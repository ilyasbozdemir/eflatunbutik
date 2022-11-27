import { app } from "./firebase";
import { auth } from "./firebase";

export const getSingleProduct = (id) =>
  app.firestore().collection("products").doc(id).get();

export const getProducts = (lastRefKey) => {
  let didTimeout = false;

  return new Promise((resolve, reject) => {
    (async () => {
      if (lastRefKey) {
        try {
          const query = app
            .firestore()
            .collection("products")
            .orderBy(app.firestore.FieldPath.documentId())
            .startAfter(lastRefKey)
            .limit(12);

          const snapshot = await query.get();
          const products = [];
          snapshot.forEach((doc) =>
            products.push({ id: doc.id, ...doc.data() })
          );
          const lastKey = snapshot.docs[snapshot.docs.length - 1];

          resolve({ products, lastKey });
        } catch (e) {
          reject(e?.message || ":( Failed to fetch products.");
        }
      } else {
        const timeout = setTimeout(() => {
          didTimeout = true;
          reject(new Error("Request timeout, please try again"));
        }, 15000);

        try {
          const totalQuery = await app.firestore().collection("products").get();
          const total = totalQuery.docs.length;
          const query = app
            .firestore()
            .collection("products")
            .orderBy(app.firestore.FieldPath.documentId())
            .limit(12);
          const snapshot = await query.get();

          clearTimeout(timeout);
          if (!didTimeout) {
            const products = [];
            snapshot.forEach((doc) =>
              products.push({ id: doc.id, ...doc.data() })
            );
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ products, lastKey, total });
          }
        } catch (e) {
          if (didTimeout) return;
          reject(e?.message || ":( Failed to fetch products.");
        }
      }
    })();
  });
};

export const searchProducts = (searchKey) => {
  let didTimeout = false;

  return new Promise((resolve, reject) => {
    (async () => {
      const productsRef = app.firestore().collection("products");

      const timeout = setTimeout(() => {
        didTimeout = true;
        reject(new Error("Request timeout, please try again"));
      }, 15000);

      try {
        const searchedNameRef = productsRef
          .orderBy("name_lower")
          .where("name_lower", ">=", searchKey)
          .where("name_lower", "<=", `${searchKey}\uf8ff`)
          .limit(12);
        const searchedKeywordsRef = productsRef
          .orderBy("dateAdded", "desc")
          .where("keywords", "array-contains-any", searchKey.split(" "))
          .limit(12);

        // const totalResult = await totalQueryRef.get();
        const nameSnaps = await searchedNameRef.get();
        const keywordsSnaps = await searchedKeywordsRef.get();
        // const total = totalResult.docs.length;

        clearTimeout(timeout);
        if (!didTimeout) {
          const searchedNameProducts = [];
          const searchedKeywordsProducts = [];
          let lastKey = null;

          if (!nameSnaps.empty) {
            nameSnaps.forEach((doc) => {
              searchedNameProducts.push({ id: doc.id, ...doc.data() });
            });
            lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
          }

          if (!keywordsSnaps.empty) {
            keywordsSnaps.forEach((doc) => {
              searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
            });
          }
          // MERGE PRODUCTS
          const mergedProducts = [
            ...searchedNameProducts,
            ...searchedKeywordsProducts,
          ];
          const hash = {};

          mergedProducts.forEach((product) => {
            hash[product.id] = product;
          });

          resolve({ products: Object.values(hash), lastKey });
        }
      } catch (e) {
        if (didTimeout) return;
        reject(e);
      }
    })();
  });
};

export const getFeaturedProducts = (itemsCount = 12) =>
  app
    .firestore()
    .collection("products")
    .where("isFeatured", "==", true)
    .limit(itemsCount)
    .get();

export const getRecommendedProducts = (itemsCount = 12) =>
  app
    .firestore()
    .collection("products")
    .where("isRecommended", "==", true)
    .limit(itemsCount)
    .get();

export const addProduct = (id, product) =>
  app.firestore().collection("products").doc(id).set(product);

export const generateKey = () =>
  app.firestore().collection("products").doc().id;

export const storeImage = async (id, folder, imageFile) => {
  const snapshot = await app.storage().ref(folder).child(id).put(imageFile);
  const downloadURL = await snapshot.ref.getDownloadURL();

  return downloadURL;
};

export const deleteImage = (id) =>
  app.storage().ref("products").child(id).delete();

export const editProduct = (id, updates) =>
  app.firestore().collection("products").doc(id).update(updates);

export const removeProduct = (id) =>
  app.firestore().collection("products").doc(id).delete();

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import { app } from "./firebase";
import { auth } from "./firebase";
 
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export const facebookWithLogin = async (email, password) => {
  facebookProvider.addScope("user_birthday");
  //kullanıcı doğum tarihini almak için
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};
export const googleWithRegister = async () => {
  auth.signInWithPopup(googleProvider).catch((error) => alert(error.message));
};
export const facebookWithRegister = async () => {
  auth.signInWithPopup(facebookProvider).catch((error) => alert(error.message));
};
export const googleWithLogin = async (email, password) => {
  GoogleAuthProvider.addScope(
    "https://www.googleapis.com/auth/contacts.readonly"
  );

  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const register = async (email, password, name, lastName) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name + " " + lastName,
    }).then(
      function () {},
      function (error) {}
    );

    await sendUserEmailVerification(email);

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
  }
};

export const login = async (email, password) => {
  try {
  
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    console.log(user.email, user.displayName);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + " " + errorMessage);
  }
};

export const logout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const getUserInfo = async (email, password) => {
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    const uid = user.uid;
  }
};

export const updateUser = async (displayName, photoURL) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

export const deleteProfile = async () => {
  const user = auth.currentUser;

  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};

export const updateUserEmail = async (email) => {
  updateEmail(auth.currentUser, email)
    .then(() => {
      // Email updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
export const sendUserEmailVerification = async (email) => {
  sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
//

export const updateUserPassword = async (newPassword) => {
  const user = auth.currentUser;

  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};
export const sendUserPasswordResetEmail = async (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const addUser = (id, user) =>
  app.firestore().collection("users").doc(id).set(user);

export const getUser = (id) =>
  app.firestore().collection("users").doc(id).get();

export const reauthenticate = (currentPassword) => {
  const user = app.auth().currentUser;
  const cred = app.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  );

  return user.reauthenticateWithCredential(cred);
};

export const updateUserProfile = (id, updates) =>
  app.firestore().collection("users").doc(id).update(updates);

export const saveBasketItems = (items, userId) =>
  app.firestore().collection("users").doc(userId).update({ basket: items });

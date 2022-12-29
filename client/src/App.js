import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import React, { Suspense } from "react";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";
import { MainContext } from "./contexts/MainContext";
import { _products } from "./components/Product/_data";
import { cartData } from "./components/Cart/_data";

const Router = React.lazy(() => import("./Router"));

function App() {
  let baslik = document.title;

  window.onblur = () => (document.title = "Alışverişe devam et");
  window.onfocus = () => (document.title = baslik);

  const [tags, setTags] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const [basket, setBasket] = React.useState(cartData);
  const [products, setProducts] = React.useState(_products);
  const [carts, setCarts] = React.useState([
    {
      name: "Yeni Gelenler",
      to: "/yeni-gelenler/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Elbise",
      to: "/elbise/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Triko",
      to: "/triko/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Üst Giyim",
      to: "/ust-giyim/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Alt Giyim",
      to: "/alt-giyim/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Dış Giyim",
      to: "/dis-giyim/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      name: "Outlet",
      to: "/outlet/",
      src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
  ]);

  const data = {
    tags,
    setTags,
    basket,
    setBasket,
    products,
    setProducts,
    wishlist,
    setWishlist,
    carts,
    setCarts,
  };

  return (
    <Suspense fallback={<LazyComponentsSkeleton />}>
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </Suspense>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

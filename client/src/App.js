import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import React, { Suspense } from "react";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";
import { MainContext } from "./contexts/MainContext";
import { _products } from "./components/Product/_data";
import { cart } from "./constants/carts";

const Router = React.lazy(() => import("./Router"));

function App() {
  let baslik = document.title;

  window.onblur = () => (document.title = "Alışverişe devam et");
  window.onfocus = () => (document.title = baslik);

  const [tags, setTags] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const [basket, setBasket] = React.useState([]);
  const [products, setProducts] = React.useState(_products);

  const [carts, setCarts] = React.useState(cart);

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

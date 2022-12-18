import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import ScrollToTop from "./components/ScrollToTop";
import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";
import CookieContainer from "./components/CookieContainer";

const Router = React.lazy(() => import("./Router"));
const Layout = React.lazy(() => import("./Layout"));
const Footer = React.lazy(() => import("./components/Footer"));

const Dashboard = React.lazy(() => import("../src/pages/Dashboard/index"));

function MyComponent() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      Rendered at width:{dimensions.width}  height:{dimensions.height}
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LazyComponentsSkeleton />}>
      <div>
        <MyComponent />
      </div>

      <Router />
    </Suspense>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

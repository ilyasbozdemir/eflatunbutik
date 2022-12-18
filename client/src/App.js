import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import React, { Suspense } from "react";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";

const Router = React.lazy(() => import("./Router"));
/*
function MyComponent() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useLayoutEffect(() => {
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
      Rendered at width:{dimensions.width} height:{dimensions.height}
    </div>
  );
}
*/

function App() {
  return (
    <Suspense fallback={<LazyComponentsSkeleton />}>
      <div>{/*<MyComponent />*/}</div>

      <Router />
    </Suspense>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

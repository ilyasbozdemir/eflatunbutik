import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import ScrollToTop from "./components/ScrollToTop";
import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";

const Router = React.lazy(() => import("./Router"));
const Layout = React.lazy(() => import("./Layout"));
const Footer = React.lazy(() => import("./components/Footer"));

const Dashboard = React.lazy(() => import("../src/pages/Dashboard/index"));

function App() {
  let location = useLocation();
  const [isDashboard, setIsDashboard] = React.useState(
    location.pathname.startsWith("/admin")
  );

  React.useEffect(() => {
    setIsDashboard(location.pathname.startsWith("/admin"));
  }, [location]);

  return (
    <Suspense fallback={<LazyComponentsSkeleton />}>
      {isDashboard === false ? (
        <Layout isDashboardLayout={isDashboard}>
          <>
            <Router />

            <Footer />
            <ScrollToTop />
          </>
        </Layout>
      ) : (
        <Layout isDashboardLayout={isDashboard}>
          <Dashboard />
        </Layout>
      )}
    </Suspense>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

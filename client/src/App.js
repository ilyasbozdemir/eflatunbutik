import Layout from "./Layout";
import Footer from "./components/Footer";
import Router from "./Router";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import { useLocation } from "react-router-dom";
import Dashboard from '../src/pages/Dashboard/index'
function App() {
  let location = useLocation();
  const [isDashboard, setIsDashboard] = React.useState(
    location.pathname.startsWith("/admin")
  );

  React.useEffect(() => {
    setIsDashboard(location.pathname.startsWith("/admin"));
  }, [location]);

  return (
    <>
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
          <Dashboard/>
        </Layout>
      )}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

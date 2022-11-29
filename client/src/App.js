import Layout from "./Layout";
import Footer from "./components/Footer";
import Router from "./Router";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Layout>
        <Router />
        <Footer />
        <>
          <ScrollToTop />
        </>
      </Layout>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

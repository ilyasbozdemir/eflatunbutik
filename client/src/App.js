import Layout from "./Layout";
import Footer from "./components/Footer";
import Router from "./Router";
import { Provider } from "react-redux";
import  store  from "./Store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Router />
          <Footer />
        </Layout>
      </Provider>
    </>
  );
}

export default App;

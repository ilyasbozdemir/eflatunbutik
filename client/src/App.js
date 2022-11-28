import Layout from "./Layout";
import Footer from "./components/Footer";
import Router from "./Router";
import { Provider } from "react-redux";
//import sagas from '../src/store/sagas';
// import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, compose, applyMiddleware } from "redux";

import storage from "redux-persist/lib/storage";
// web için varsayılan localstorage

import reducers from "../src/store/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginState"], // Whitelist (Kaydetmek istediğiniz spesifik bir reducer değişkenini içine yazabilirsiniz)
  blacklist: [], // Blacklist (Kaydetmek istemediğiniz spesifik bir reducer değişkenini içine yazabilirsiniz)
};

// Middleware: persisted reducerımızı oluşturuyoruz.
const persistedReducer = persistReducer(persistConfig, reducers);

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer
  // composeEnhancer(
  //   applyMiddleware(sagaMiddleware),
  // ),
);

// Middleware: persist store oluşturuyoruz.
let persistor = persistStore(store);

// sagaMiddleware.run(sagas);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Loading</div>} persistor={persistor}>
          <Layout>
            <></>
            <Router />
            <Footer />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

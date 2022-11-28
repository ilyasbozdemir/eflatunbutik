import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Chakra } from "../src/Chakra";

import { Provider } from "react-redux";
//import sagas from '../src/store/sagas';
// import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";

import storage from "redux-persist/lib/storage";
// web için varsayılan localstorage

import reducers from "../src/store/reducers";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";

import App from "./App";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <Chakra startAppName={<App />} />
      </PersistGate>
    </Provider>
  </Router>
);

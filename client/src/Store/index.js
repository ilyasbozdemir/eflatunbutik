import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import auth from "./auth";

const store = configureStore({
  reducer: {
    auth,
    modal,
  },
});

export default store;

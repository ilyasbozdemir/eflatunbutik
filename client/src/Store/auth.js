import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  user: {
    id: 0,
    username: "",
    email: "",
    roles: ["ROLE_ANONYMOUS"],
  },
};

const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logIn: (state, payload) => {
      state = payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { logIn, logOut } = auth.actions;

export default auth.reducers;

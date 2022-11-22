import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [],
};
const modal = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    append: (state, action) => {
      state.modals = [...state.modals, action.payload];
    },
    destroy: (state) => {},
    destroyAll: (state) => {
      state.modals = [];
    },
  },
});

export const { append, destroy, destroyAll } = modal.actions;

export default modal.reducers;

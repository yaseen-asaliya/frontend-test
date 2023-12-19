// redux.js

import { createSlice } from "@reduxjs/toolkit";

interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.open = true;
    },

    closeDrawer: (state) => {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;

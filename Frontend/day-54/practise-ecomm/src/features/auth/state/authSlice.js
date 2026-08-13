import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false,
  },

  reducers: {
    addUsers: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    removeUsers: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUsers, removeUsers } = authSlice.actions;

export default authSlice.reducer;
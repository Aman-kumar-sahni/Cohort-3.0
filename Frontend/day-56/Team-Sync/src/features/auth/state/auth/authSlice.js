import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    employee: null,
    isLoading: true,
  },

  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },

    deleteEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },
});

export const { addEmployee, deleteEmployee } = authSlice.actions;

export default authSlice.reducer;
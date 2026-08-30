import { createSlice } from "@reduxjs/toolkit";
import { currentEmployee, loginEmployee } from "./authAction";

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

  extraReducers: (builder) => {
    builder.addCase(loginEmployee.pending, (state, action) => {
      state.isLoading = true;
    })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;

        state.isLoading = false;

      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;

      }).addCase(currentEmployee.pending, (state, action) => {
              state.isLoading = true;

       })
      .addCase(currentEmployee.fulfilled, (state, action) => { 
        state.employee=action.payload;
        state.isLoading=false;
      })
      .addCase(currentEmployee.rejected, (state, action) => { 
        state.isLoading=false

      })

  }
});

export const { addEmployee, deleteEmployee } = authSlice.actions;

export default authSlice.reducer;
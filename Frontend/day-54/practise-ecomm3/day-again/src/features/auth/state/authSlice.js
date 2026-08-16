import { createSlice } from "@reduxjs/toolkit";
import { hydateUserAction, loginUserAction } from "../hooks/authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
     state.isLoading=true
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isAuthenticated=true;
        state.isLoading=false;
        state.user=action.payload

        // logic
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading=false;

      })
      .addCase(hydateUserAction.pending,(state,action)=>{
        state.isLoading=true;

      })
      .addCase(hydateUserAction.fulfilled,(state,action)=>{
          state.isAuthenticated=true;
        state.isLoading=false;
        state.user=action.payload

      })
      .addCase(hydateUserAction.rejected,(state,action)=>{
        state.isLoading=false;

    
      })

  },
});

export default authSlice.reducer;
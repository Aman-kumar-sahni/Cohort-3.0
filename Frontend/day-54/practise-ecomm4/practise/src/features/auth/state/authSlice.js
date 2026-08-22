import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  },

  // reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    deleteUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  // },
  
  extraReducers: (builder) => {
  builder

    // LOGIN
    .addCase(loginUserAction.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(loginUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    })

    .addCase(loginUserAction.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    })

    // HYDRATE USER
    .addCase(hydrateUserAction.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(hydrateUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    })

    .addCase(hydrateUserAction.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    });
}
});

export const { addUser, deleteUser } = authSlice.actions;

export default authSlice.reducer;
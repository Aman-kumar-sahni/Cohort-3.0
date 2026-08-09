import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "../../features/auth/state/authSlice";

export const Store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});
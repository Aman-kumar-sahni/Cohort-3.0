
import { configureStore } from "@reduxjs/toolkit"
import authSlicer from "../../features/auth/application/authSlice"

export const store= configureStore({
reducer:{
  auth:authSlicer
}
})
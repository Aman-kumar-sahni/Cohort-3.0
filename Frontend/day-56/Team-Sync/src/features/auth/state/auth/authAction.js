import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";


export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("LoginFailed");
    }
  }
);


export const currentEmployee =createAsyncThunk("auth/me",async(_,thunkAPI)=>{
    try {
        const res = await axiosInstance.get("/auth/me")
        return res.data.user
    } catch (error) {
     return thunkAPI.rejectWithValue("Invalid User");
    }
})
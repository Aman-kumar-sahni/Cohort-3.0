import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "auth/login",

  async (credentials, thunkApi) => {
    console.log("thunk triggered");
    console.log("credentials:", credentials);

    try {
      console.log("before api");

      const res = await api.post("/auth/login", credentials);

      console.log("after api");
      console.log(res.data);

      localStorage.setItem("accessToken", res.data.accessToken);

      return res.data;
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("ERROR RESPONSE:", error.response?.data);

      return thunkApi.rejectWithValue("Login failed");
    }
  }
);



export const hydrateUserAction=createAsyncThunk("auth/me",
  async()=>{

   try {
       const token =  localStorage.getItem("accessToken")
   const res = await api.get("/auth/me",{
  headers:{
    Authorization:`Bearer ${token}`
  }

 })
 return res.data
   }catch(errors){
    console.log(errors.message)
      return thunkApi.rejectWithValue("authorization failed");

   }

})


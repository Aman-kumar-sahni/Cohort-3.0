import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "auth/login",

  async (credentials, thunkApi) => {
    try {
      const res = await api.post("/auth/login", credentials);

      localStorage.setItem("accessToken", res.data.accessToken);

      return res.data;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue("Login failed");
    }
  }
);

export const hydateUserAction = createAsyncThunk(
  "auth/me",

  async (_, thunkApi) => {
    const token = localStorage.getItem("accessToken");

    try {
      const res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      console.log(error.message);

      return thunkApi.rejectWithValue("Unauthorized user");
    }
  }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { create } from "axios";


export const loginUserAction = createAsyncThunk(
  "auth/login",

  async (credentials, thunkApi) => {
    try {
      const res = await api.post("/auth/login", credentials);

      localStorage.setItem(
        "accessToken",
        res.data.accessToken
      );

      return res.data;

    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);




export const hydrateUserAction = createAsyncThunk(
  "auth/hydrateUser",

  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      const res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Unauthorized user"
      );
    }
  }
);
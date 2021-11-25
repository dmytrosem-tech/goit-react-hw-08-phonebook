import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (userReg, { rejectWithValue }) => {
    console.log(userReg);
    try {
      const { data } = await axios.post("users/signup", userReg);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (userLogIn, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/login", userLogIn);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI, { rejectWithValue }) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;

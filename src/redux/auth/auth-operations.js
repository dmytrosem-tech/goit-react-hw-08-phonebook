import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actualAPI from "../../services/api-store";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (userReg) => {
  console.log(userReg);
  try {
    const { data } = await axios.post("users/signup", userReg);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("auth/login", async (userLogIn) => {
  try {
    const { data } = await axios.post("users/login", userLogIn);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("токена нет, уходим");
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
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

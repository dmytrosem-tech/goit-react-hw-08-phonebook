import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

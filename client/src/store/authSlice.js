import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../services/config";

const initialState = {
  isLogin : true,
  isLoggedin: localStorage.getItem("isLoggedin") || defaultState.auth.isLoggedin,
  user: JSON.parse(localStorage.getItem("user")) || defaultState.auth.user,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    login: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedin = true;
      localStorage.setItem("isLoggedin", JSON.stringify(state.isLoggedin));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = defaultState.auth.user;
      state.isLoggedin = defaultState.auth.isLoggedin;
      localStorage.removeItem("isLoggedin");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout, updateIsLogin } = authSlice.actions;
export default authSlice.reducer;

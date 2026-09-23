import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token:null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token=action.payload.token;
      state.isLoggedIn = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token=null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout,setUser } = authSlice.actions;

export default authSlice.reducer;

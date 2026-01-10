import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginState } from "../types";

const initialState: LoginState = {
  isUserLoggedIn: false,
  userInfo: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<LoginState>) => {
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
      state.userInfo = action.payload.userInfo;
    },
  },
});

export const {
  setLoginState,
} = loginSlice.actions;

export default loginSlice.reducer;

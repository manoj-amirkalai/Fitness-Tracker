import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("fittrack-app-token", action.payload.token);
    },
    logout: (state) => {
      state.currentUser = null;
      toast.info("Logged out");
      localStorage.removeItem("fitttrack-app-token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;

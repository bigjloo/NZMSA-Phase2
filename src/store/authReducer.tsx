import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    // Actions
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// exports dialogSlice.reducers
export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;

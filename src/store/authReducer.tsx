import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = { isAuth: false }

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    },
  },
})

export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer

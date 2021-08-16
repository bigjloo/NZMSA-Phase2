import { createSlice } from "@reduxjs/toolkit"

const initialThemeState = {
  isDarkTheme: false,
}

const themeSlice = createSlice({
  name: "Theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer

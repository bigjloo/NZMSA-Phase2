import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#2c666e",
      dark: "#07393c",
    },
    secondary: {
      main: "#2c666e",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F0EDEE",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
})

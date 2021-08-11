import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c666e",
      dark: "#07393c",
    },
    secondary: {
      main: "#90ddf0",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F0EDEE",
    },
  },
})

export default theme

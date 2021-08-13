import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

export const fun_palette = {
  palette: {
    primary: {
      main: "#B693FE",
      dark: "#FF9DE2",
    },
    secondary: {
      main: "#8C82FC",
    },

    error: {
      main: red.A400,
    },
    background: {
      // default: "#F0EDEE",
      default: "#EEEDE7",
    },
  },
}

export const gray_palette = {
  palette: {
    primary: {
      // main: "#2c666e",
      // dark: "#07393c",
      main: "#E7D2CC",
      dark: "#868B8E",
    },
    secondary: {
      // main: "#90ddf0",
      main: "#B9B7BD",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#F0EDEE",
      default: "#EEEDE7",
    },
  },
}

export const dark_palette = {
  palette: {
    primary: {
      // main: "#2c666e",
      // dark: "#07393c",
      main: "#E7D2CC",
      dark: "#868B8E",
    },
    secondary: {
      // main: "#90ddf0",
      main: "#B9B7BD",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#F0EDEE",
      default: "#EEEDE7",
    },
  },
}

export const default_palette = {
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
}

const theme = createTheme(default_palette)

export default theme

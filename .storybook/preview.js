// import { ThemeProvider } from "@material-ui/core/styles"
// import theme from "../src/theme"

// const themeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn}</ThemeProvider>

// export const decorators = [themeDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


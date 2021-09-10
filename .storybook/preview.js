import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { CssBaseline } from "@material-ui/core"
import {lightTheme, darkTheme} from "../src/theme"
import store from "../src/store/store"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"
import Container from "@material-ui/core/Container"
//import {themes} from "@storybook/theming"
import {useDarkMode} from 'storybook-dark-mode'

const mockedClient = new ApolloClient({
  uri: "https://your-graphql-endpoint",
  cache: new InMemoryCache(),
})


export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <ApolloProvider client={mockedClient}>
        <Provider store={store}>
        <CssBaseline />
          <Container style={{maxWidth:"md", height: "100vh"}}>
            <Story />
          </Container>
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction','Components', [ 'Button','Dark Mode Toggler','Notification',  'Backdrop','Header', 'AppBar', 'Dialogs',   'Event Timeline']]
    }
  },
  viewport: {
    defaultViewport: 'iphone12promax',
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  },
  layout: 'fullscreen',
}


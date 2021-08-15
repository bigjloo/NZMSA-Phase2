import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
// import ProviderWrapper from "../src/ProviderWrapper"
import theme from "../src/theme"
import store from "../src/store/store"

const mockedClient = new ApolloClient({
  uri: "https://your-graphql-endpoint",
  cache: new InMemoryCache(),
})

// const themeDecorator = Component => <ThemeProvider theme={theme}>{<Component />}</ThemeProvider>
// const apolloDecorator = storyFn => <ApolloProvider client={mockedClient}>{storyFn}</ApolloProvider>
// const reduxProvider = storyFn => <ProviderWrapper children={storyFn} store={store}></ProviderWrapper>

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={mockedClient}>
        <Provider store={store}>
          <Story />
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
}


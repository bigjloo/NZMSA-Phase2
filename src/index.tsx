import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"

import CssBaseline from "@material-ui/core/CssBaseline"

import App from "./App"
import store from "./store/store"
import client from "../src/apollo-client/apollo"

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
)

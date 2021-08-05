import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

export const CONFIGURATION = {
  BACKEND_URL: "https://nzmsa-backend.azurewebsites.net/graphql/",
  SITE_URL: "https://nzmsa-react-2021.azurewebsites.net/",
  LOCAL_FRONTEND: "https://localhost:3000/",
  LOCAL_BACKEND: "https://localhost:44342/graphql/",
  GITHUB_AUTHORIZE_URL: `https://github.com/login/oauth/authorize?client_id=b77f552e93db0e271256`,
}

// from howtographql.com
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("HYD_JWT")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const httpLink = new HttpLink({
  uri: CONFIGURATION.LOCAL_BACKEND,
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

console.log("inside apollo.tsx")

const isDevelopment = false
const CLIENT_ID = "b77f552e93db0e271256"

// Sets frontend and backend url base on isDevelopment
export const CONFIGURATION = {
  FRONTEND: isDevelopment
    ? "localhost:3000/"
    : "https://nzmsa-react-2021.azurewebsites.net/",
  BACKEND: isDevelopment
    ? "https://localhost:44342/graphql/"
    : "https://nzmsa-backend.azurewebsites.net/graphql/",
  GITHUB_AUTHORIZE_URL: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
}

/* From www.howtographql.com */
// Attaches JWT token to the authorization header
// for ApolloClient to connect to GraphQL backend
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("HYD_JWT")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

// remove later
console.log("JWT TOKEN")
console.log(localStorage.getItem("HYD_JWT"))

// Creates a httpLink from URL provided
const httpLink = new HttpLink({
  uri: CONFIGURATION.BACKEND,
})

// configures new ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client

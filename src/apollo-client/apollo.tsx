import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const CONFIGURATION = {
  BACKEND_URL: "https://nzmsa-backend.azurewebsites.net/graphql/",
  GITHUB_AUTHORIZE_URL:
    "https://github.com/login/oauth/authorize?client_id=b77f552e93db0e271256",
}

const httpLink = new HttpLink({
  uri: CONFIGURATION.BACKEND_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client

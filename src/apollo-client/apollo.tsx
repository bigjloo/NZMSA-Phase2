import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const URL = "https://nzmsa-backend.azurewebsites.net/graphql/";
// const SWAPI_URL = "https://graphql.org/swapi-graphql";

export const CONFIGURATION = {
  CLIENT_ID: "b77f552e93db0e271256",
  BACKEND_URL: "https://localhost:44342/graphql/",
};

const httpLink = new HttpLink({
  uri: CONFIGURATION.BACKEND_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

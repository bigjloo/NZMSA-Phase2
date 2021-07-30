import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const URL = "https://nzmsa-backend.azurewebsites.net/graphql/";
const LOCAL_URL = "https://localhost:44342/graphql/";
const SWAPI_URL = "https://graphql.org/swapi-graphql";

const httpLink = new HttpLink({
  uri: LOCAL_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

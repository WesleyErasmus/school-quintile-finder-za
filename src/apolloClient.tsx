import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const HASURA_ENDPOINT = import.meta.env.VITE_HASURA_ENDPOINT;
const HASURA_GRAPHQL_ADMIN_SECRET = import.meta.env.VITE_HASURA_ADMIN_SECRET;

const httpLink = new HttpLink({
  uri: HASURA_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

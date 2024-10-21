import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const API_ENDPOINT =
//   import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/";

const httpLink = new HttpLink({
  // uri: API_ENDPOINT,
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

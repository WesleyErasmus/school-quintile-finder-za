// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./base.css";
import client from "./apolloClient.tsx";
import { ApolloProvider } from "@apollo/client";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  // </StrictMode>,
);

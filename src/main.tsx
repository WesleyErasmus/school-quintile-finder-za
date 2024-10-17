import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import client from "./apolloClient.tsx";
import App from "./App.tsx";
import "./base.css";

const firebaseConfig = {
  apiKey: "AIzaSyBm8IMnqqyvZaIZsjoMviqFMWrpxWeEhkE",
  authDomain: "quintilefindersa.firebaseapp.com",
  projectId: "quintilefindersa",
  storageBucket: "quintilefindersa.appspot.com",
  messagingSenderId: "122887456268",
  appId: "1:122887456268:web:189eff6cc753a5438d1029",
  measurementId: "G-D4QHLNX1QN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const fireStoreDatabase = getFirestore(firebaseApp);

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

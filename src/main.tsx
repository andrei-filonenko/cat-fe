import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import "react-material-symbols/rounded";
import "./index.css";
import inject from "@stylexjs/dev-runtime";

const host = import.meta.env.VITE_API_HOST || 'http://localhost:4000';

const client = new ApolloClient({
  uri: host,
  cache: new InMemoryCache({
    typePolicies: {
      Product: {
        keyFields: ['sku']
      }
    }
  }),
});

inject({
  classNamePrefix: "x",
  dev: true,
  test: false,
  useRemForFontSize: true,
  styleResolution: "property-specificity",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

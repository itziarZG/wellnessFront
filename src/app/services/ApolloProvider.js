"use client";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import createApolloClient from "./apolloClient";
import React from "react";

const client = createApolloClient();

const ApolloProvider = ({ children }) => {
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
};

export default ApolloProvider;

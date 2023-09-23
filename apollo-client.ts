// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_STRAPI_URL_PROD,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
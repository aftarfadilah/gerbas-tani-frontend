// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
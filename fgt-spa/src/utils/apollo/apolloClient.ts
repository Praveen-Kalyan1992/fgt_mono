import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4001/graphql" // your graphql server link
  }),
  credentials: "same-origin",
})

export default client;
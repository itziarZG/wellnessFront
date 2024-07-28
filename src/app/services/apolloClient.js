import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import config from "@/app/config";

const httpLink = new HttpLink({
  uri: `${config.apiUrl}/graphql`, // Reemplaza con la URL de tu servidor Strapi
});
const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

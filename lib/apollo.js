import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = `${process.env.NEXT_CMS_URI}/graphql` || "http://localhost:1337/graphql";

export const apolloCon = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});

import { gql } from 'apollo-server-express';

// The GraphQL schema
export const typeDefs = gql`
    type Query {
        hello: String
    }
`;

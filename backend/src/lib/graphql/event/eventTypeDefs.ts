import { gql } from 'apollo-server-express';

export const eventTypeDefs = gql`
    type Event {
        id: ID
        start: String
        end: String
        title: String
        createdAt: String
        updatedAt: String
    }

    input NewEventInput {
        title: String!
        start: String!
        end: String!
    }

    input UpdateEventInput {
        id: ID!
        title: String!
        start: String!
        end: String!
    }
`;

import { gql } from 'apollo-server-express';

export const eventTypeDefs = gql`
    type Event {
        id: ID!
        start: String!
        end: String!
        title: String!
    }

    input NewEventInput {
        title: String!
        start: String!
        end: String!
    }
`;

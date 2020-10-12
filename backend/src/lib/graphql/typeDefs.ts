import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type FieldError {
        field: String!
        message: String!
    }

    type Query {
        event: [Event]
    }

    type Mutation {
        createEvent(input: NewEventInput!): Event
        updateEvent(input: UpdateEventInput!): Event
    }
`;

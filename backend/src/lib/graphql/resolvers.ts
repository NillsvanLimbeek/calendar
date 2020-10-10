import { IResolvers } from 'apollo-server-express';

export const resolvers: IResolvers = {
    Query: {
        hello: (): string => 'world',
    },
};

import { makeExecutableSchema } from 'apollo-server-express';
import merge from 'lodash.merge';

import { eventTypeDefs } from './event/eventTypeDefs';
import { eventResolvers } from './event/eventResolvers';

import { typeDefs } from './typeDefs';

export const schema = makeExecutableSchema({
    typeDefs: [typeDefs, eventTypeDefs],
    resolvers: merge(eventResolvers),
});

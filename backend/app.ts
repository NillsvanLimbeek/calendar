import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';

import 'reflect-metadata';

import { connection } from './src/type-orm.config';

import { schema } from './src/lib/graphql/';

const main = async () => {
    // connect db
    const orm = await createConnection(connection);

    const app = express();

    // setup graphql
    const apolloServer = new ApolloServer({
        schema,
        context: () => ({ orm }),
    });

    apolloServer.applyMiddleware({
        app,
    });

    // start server
    app.set('port', process.env.PORT || 5000);
    app.listen(app.get('port'), () => {
        console.log(`Server started on port: ${app.get('port')}`);
    });
};

main();

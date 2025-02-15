import { ConnectionOptions } from 'typeorm';

export const connection: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'calendar',
    logging: false,
    synchronize: true,
    entities: ['src/lib/entities/**/*.ts'],
    migrations: ['src/lib/migrations/**/*.ts'],
    subscribers: ['src/lib/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
    },
};

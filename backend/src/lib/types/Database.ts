import { Connection } from 'typeorm';

export interface Database {
    orm: Connection;
}

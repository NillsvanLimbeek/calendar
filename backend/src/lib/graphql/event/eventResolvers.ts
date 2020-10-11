import { IResolvers } from 'apollo-server-express';

import { Event } from '../../entities';
import { Database, NewEventInput } from 'src/lib/types';

export const eventResolvers: IResolvers = {
    Query: {
        event: async (
            _root: void,
            _arg: void,
            { orm }: Database
        ): Promise<Event[]> => {
            return await orm.manager.find(Event, {});
        },
    },

    Mutation: {
        createEvent: async (
            _root: void,
            { input }: NewEventInput,
            { orm }: Database
        ): Promise<Event> => {
            const eventRepository = orm.getRepository(Event);

            const { title, start, end } = input;

            const event = await orm.manager.create(Event, {
                title,
                start,
                end,
            });
            await eventRepository.save(event);

            return event;
        },
    },
};

import { IResolvers } from 'apollo-server-express';

import { Event } from '../../entities';
import { NewEventInput, UpdateEventInput } from 'src/lib/types';

export const eventResolvers: IResolvers = {
    Query: {
        event: async (): Promise<Event[]> => {
            return Event.find();
        },
    },

    Mutation: {
        createEvent: async (
            _root: void,
            { input }: NewEventInput
        ): Promise<Event> => {
            return Event.create({
                title: input.title,
                start: input.start,
                end: input.end,
            }).save();
        },

        updateEvent: async (
            _root: void,
            { input }: UpdateEventInput
        ): Promise<Event | undefined> => {
            const event = Event.findOne(input.id);

            if (!event) {
                return undefined;
            }

            await Event.update(
                { id: input.id },
                { title: input.title, start: input.start, end: input.end }
            );

            return event;
        },
    },
};

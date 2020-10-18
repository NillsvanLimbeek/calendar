import { IResolvers } from 'apollo-server-express';

import { Event } from '../../lib/entities';
import { NewEventInput, UpdateEventInput } from '../../lib/types';

export const eventResolvers: IResolvers = {
    Query: {
        events: async (): Promise<Event[]> => {
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

        deleteEvent: async (
            _root: void,
            { id }: { id: string }
        ): Promise<boolean | undefined> => {
            const event = await Event.findOne(id);

            if (!event) {
                return undefined;
            }

            await Event.delete(id);
            return true;
        },
    },
};

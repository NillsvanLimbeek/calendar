import React from 'react';
import { startOfWeek, endOfWeek } from 'date-fns';
import { eachDayOfInterval } from 'date-fns/esm';

import { Weekday } from './Weekday';

type Props = {
    date: Date;
};

export const Weekdays = ({ date }: Props) => {
    const days = eachDayOfInterval({
        start: startOfWeek(date),
        end: endOfWeek(date),
    });

    return (
        <div className="flex">
            <div className="w-20 bg-gray-200 rounded-t-sm"></div>

            <ul className="grid grid-cols-7 w-full bg-gray-200 rounded-t-sm">
                {days.map((day, index) => (
                    <Weekday date={day} key={index} />
                ))}
            </ul>
        </div>
    );
};

import React from 'react';
import { endOfDay, startOfDay, eachHourOfInterval, isToday } from 'date-fns';

import { Timeline } from './Timeline';

type Props = {
    day: Date;
};

export const DayRow = ({ day }: Props) => {
    const hours = eachHourOfInterval({
        start: startOfDay(day),
        end: endOfDay(day),
    });

    return (
        <div className="h-full grid relative">
            {isToday(day) && <Timeline />}

            {hours.map((_hour, index) => (
                <div
                    className="h-20 border-gray-300 border-b border-r"
                    key={index}
                ></div>
            ))}
        </div>
    );
};

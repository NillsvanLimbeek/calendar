import { endOfDay, startOfDay } from 'date-fns';
import { eachHourOfInterval } from 'date-fns/esm';
import React from 'react';

type Props = {
    day: Date;
    last?: boolean;
};

export const DayRow = ({ last, day }: Props) => {
    const hours = eachHourOfInterval({
        start: startOfDay(day),
        end: endOfDay(day),
    });

    if (last) {
        return (
            <div className="h-full grid">
                {hours.map((_hour, index) => (
                    <div className="border-gray-300 border-b" key={index}></div>
                ))}
            </div>
        );
    }

    return (
        <div className="h-full border-r grid">
            {hours.map((_hour, index) => (
                <div className="border-gray-300 border-b" key={index}></div>
            ))}
        </div>
    );
};

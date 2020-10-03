import React from 'react';
import { eachHourOfInterval, startOfDay, endOfDay, format } from 'date-fns';

const style = 'text-xs font-medium px-4 text-gray-500 transform -translate-y-4';

export const Hours = () => {
    const day = new Date();

    const hours = eachHourOfInterval({
        start: startOfDay(day),
        end: endOfDay(day),
    });

    return (
        <div className="h-full border-r grid">
            {hours.map((hour, index) => (
                <p className={index === 0 ? 'opacity-0' : style} key={index}>
                    {format(hour, 'HH:ss')}
                </p>
            ))}
        </div>
    );
};

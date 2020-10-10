import React from 'react';
import { eachHourOfInterval, startOfDay, endOfDay, format } from 'date-fns';

export const Hours = () => {
    const day = new Date();

    const hours = eachHourOfInterval({
        start: startOfDay(day),
        end: endOfDay(day),
    });

    return (
        <div className="h-full grid">
            {hours.map((hour, index) => (
                <p
                    className={
                        index === 0
                            ? 'h-20 text-white border-r border-gray-300'
                            : 'h-20 text-xs font-medium px-4 text-gray-500 transform -translate-y-2 border-r border-gray-300'
                    }
                    key={index}
                >
                    {format(hour, 'HH:ss')}
                </p>
            ))}
        </div>
    );
};

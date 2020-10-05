import { differenceInMinutes, startOfDay } from 'date-fns';
import React, { useState } from 'react';

export const Timeline = () => {
    const [time, setTime] = useState<Date>(new Date());

    const minutes = differenceInMinutes(time, startOfDay(time));
    console.log(Math.ceil(minutes * 1.3333));

    return (
        <div
            className="flex justify-between items-center absolute w-full"
            style={{ top: Math.ceil(minutes * 1.3333) }}
        >
            <div className="h-2 w-2 flex-none rounded-full bg-blue-600 absolute timeline__bullet--left"></div>
            <div className="timeline__line w-full bg-blue-600"></div>
            <div className="h-2 w-2 flex-none rounded-full bg-blue-600 absolute timeline__bullet--right"></div>
        </div>
    );
};

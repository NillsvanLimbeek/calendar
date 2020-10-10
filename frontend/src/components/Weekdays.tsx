import React from 'react';
import { startOfWeek, endOfWeek } from 'date-fns';
import { eachDayOfInterval } from 'date-fns/esm';

import { Period } from '../lib/types';

import { Weekday } from './Weekday';

type Props = {
    date: Date;
    period: Period;
};

export const Weekdays = ({ date, period }: Props) => {
    const days = eachDayOfInterval({
        start: startOfWeek(date),
        end: endOfWeek(date),
    });

    return (
        <div className="flex">
            {period === 'day' || period === 'week' ? <div className="w-20 bg-gray-200 rounded-t-sm"></div> : null}


            <ul className="grid grid-cols-7 w-full bg-gray-200 rounded-t-sm">
                {days.map((day, index) => (
                    <Weekday key={index} date={day} period={period} />
                ))}
            </ul>
        </div>
    );
};

import React from 'react';
import { format, isToday } from 'date-fns';

import { Period } from '../lib/types';

type Props = {
    date: Date;
    period: Period;
};

export const Weekday = ({ date, period }: Props) => {
    return (
        <div
            className={
                isToday(date)
                    ? 'flex items-center flex-col py-4 text-blue-500 hover:text-blue-600 cursor-pointer'
                    : 'flex items-center flex-col py-4 text-gray-600 hover:text-blue-500 cursor-pointer'
            }
        >
            <h3 className="text-xl">{format(date, 'dd')}</h3>
            <p className="text-xs">{format(date, 'EEE')}</p>
        </div>
    );
};

import React from 'react';
import { format, isToday } from 'date-fns';

type Props = {
    date: Date;
};

const style =
    'flex items-center flex-col py-4 text-gray-600 hover:text-blue-500 cursor-pointer';
const today = `${style} text-blue-500`;

export const Weekday = ({ date }: Props) => {
    return (
        <div className={isToday(date) ? today : style}>
            <h3 className="text-xl">{format(date, 'dd')}</h3>
            <p className="text-xs">{format(date, 'EEE')}</p>
        </div>
    );
};

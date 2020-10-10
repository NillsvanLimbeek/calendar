import React, { useEffect, useState } from 'react';
import { format, isToday } from 'date-fns';

import { getDaysInMonth } from '../lib/utils/getDaysInMonth';

type Props = {
    date: Date;
};

export const MonthGrid = ({ date }: Props) => {
    const [days, setDays] = useState<Date[]>([]);

    useEffect(() => {
        const days = getDaysInMonth(date);
        setDays(days);

        return () => {
            setDays([]);
        };
    }, [date]);

    return (
        <div className="calendar grid grid-cols-7">
            {days.map((day, index) => (
                <div
                    key={index}
                    className={
                        isToday(day)
                            ? 'border-r border-b bg-blue-100'
                            : 'border-r border-b border-gray-300'
                    }
                >
                    <p className="text-right p-3 text-gray-600">
                        {format(day, 'dd')} {isToday(day)}
                    </p>
                </div>
            ))}
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

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
        <div className="grid grid-cols-7">
            {days.map((day, index) => (
                <div key={index}>{format(day, 'dd EEE MMMM')}</div>
            ))}
        </div>
    );
};

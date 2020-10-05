import React, { useState, useEffect } from 'react';
import { endOfWeek, startOfWeek, eachDayOfInterval } from 'date-fns';

import { DayRow } from './DayRow';
import { Hours } from './Hours';

type Props = {
    date: Date;
};

export const WeekGrid = ({ date }: Props) => {
    const [days, setDays] = useState<Date[]>([]);

    useEffect(() => {
        const days = eachDayOfInterval({
            start: startOfWeek(date),
            end: endOfWeek(date),
        });

        setDays(days);

        return () => {
            setDays([]);
        };
    }, [date]);

    return (
        <div className="days flex overflow-y-scroll">
            <Hours />

            <div className="grid grid-cols-7 w-full">
                {days.map((day, index) => (
                    <DayRow key={index} day={day} />
                ))}
            </div>
        </div>
    );
};

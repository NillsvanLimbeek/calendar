import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { endOfWeek, format, startOfWeek } from 'date-fns';

import { Period } from '../lib/types';

type Props = {
    date: Date;
    handleWeek: (week: 'next' | 'prev') => void;
    handleSetToday: () => void;
    handlePeriod: (period: Period) => void;
};

export const CalendarControls = ({
    date,
    handleWeek,
    handleSetToday,
    handlePeriod,
}: Props) => {
    const [start, setStart] = useState<Date | null>(null);
    const [end, setEnd] = useState<Date | null>(null);

    useEffect(() => {
        setStart(startOfWeek(date));
        setEnd(endOfWeek(date));

        return () => {
            setStart(null);
            setEnd(null);
        };
    }, [date]);

    return (
        <div className="w-full flex justify-between bg-white rounded-sm mb-4 p-3 shadow-md">
            {start && end && (
                <>
                    <div className="flex items-center">
                        <p className="mr-4">
                            {format(start, 'dd')} - {format(end, 'dd')}{' '}
                            {format(date, 'MMMM yyyy')}
                        </p>

                        <i
                            className="fas fa-chevron-left mr-3 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors ease-in-out duration-300"
                            onClick={() => handleWeek('prev')}
                        />
                        <i
                            className="fas fa-chevron-right cursor-pointer text-gray-500 hover:text-gray-700 transition-colors ease-in-out duration-300"
                            onClick={() => handleWeek('next')}
                        />
                    </div>

                    <div className="">
                        <button
                            className="px-4 py-2 mr-3 text-sm text-white bg-blue-600 rounded-sm"
                            onClick={handleSetToday}
                        >
                            Today
                        </button>

                        <Link
                            to="/week"
                            className="px-4 py-2 mr-3 text-sm text-gray-700 border-2 border-blue-600 rounded-sm"
                            onClick={() => handlePeriod('week')}
                        >
                            Week
                        </Link>

                        <Link
                            to="/month"
                            className="px-4 py-2 text-sm text-gray-700 border-2 border-blue-600 rounded-sm"
                            onClick={() => handlePeriod('month')}
                        >
                            Month
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

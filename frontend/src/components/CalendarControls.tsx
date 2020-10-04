import React, { useEffect, useState } from 'react';
import { endOfWeek, format, startOfWeek } from 'date-fns';

type Props = {
    date: Date;
    handleWeek: (week: 'next' | 'prev') => void;
    handleSetToday: () => void;
};

export const CalendarControls = ({
    date,
    handleWeek,
    handleSetToday,
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

                    <button
                        className="px-4 py-2 text-white bg-blue-600 rounded-sm"
                        onClick={handleSetToday}
                    >
                        Today
                    </button>
                </>
            )}
        </div>
    );
};

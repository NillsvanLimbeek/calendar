import React from 'react';

import { Weekdays } from '../components/Weekdays';
import { WeekGrid } from '../components/WeekGrid';
import { CalendarControls } from '../components/CalendarControls';

import { useDateState, useDateDispatch } from '../lib/context';
import { addWeeks, subWeeks } from 'date-fns';

export const Calendar = () => {
    const { date } = useDateState();
    const dispatch = useDateDispatch();

    function handleWeek(week: 'next' | 'prev') {
        let newDate = date;

        if (week === 'next') {
            newDate = addWeeks(date, 1);
        } else {
            newDate = subWeeks(date, 1);
        }

        dispatch({ type: 'SET_DATE', payload: newDate });
    }

    function handleSetToday() {
        dispatch({ type: 'SET_DATE', payload: new Date() });
    }

    return (
        <main className="w-full">
            <CalendarControls
                date={date}
                handleWeek={(week) => handleWeek(week)}
                handleSetToday={handleSetToday}
            />

            <div className="calendar bg-white rounded-sm shadow-md">
                <Weekdays date={date} />
                <WeekGrid date={date} />
            </div>
        </main>
    );
};

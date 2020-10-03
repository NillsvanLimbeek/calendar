import React from 'react';

import { Weekdays } from './Weekdays';
import { WeekGrid } from './WeekGrid';
import { CalendarControls } from './CalendarControls';

export const Main = () => {
    const date = new Date();

    return (
        <main className="w-full">
            <CalendarControls />

            <div className="calendar bg-white rounded-sm shadow-md">
                <Weekdays date={date} />
                <WeekGrid date={date} />
            </div>
        </main>
    );
};

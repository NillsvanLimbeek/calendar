import React from 'react';

import { Weekdays } from './Weekdays';

export const Main = () => {
    const date = new Date();

    return (
        <main className="border-grey-400 h-full w-full bg-white rounded shadow-md">
            <Weekdays date={date} />
        </main>
    );
};

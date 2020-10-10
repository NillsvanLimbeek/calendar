import React, { useState, useEffect } from 'react';

import { minutesExpired } from '../lib/utils';

export const Timeline = () => {
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setMinutes(minutesExpired());

        const interval = setInterval(() => {
            setMinutes(minutesExpired());
        }, 10000);

        return () => {
            clearInterval(interval);
            setMinutes(0);
        };
    }, []);

    useEffect(() => {
        const timeline = document.querySelector('#timeline');

        setTimeout(() => {
            timeline?.scrollIntoView({ block: 'center' });
        }, 0);
    }, []);

    return (
        <div
            className="flex justify-between items-center absolute w-full"
            id="timeline"
            style={{ top: minutes }}
        >
            <div className="h-2 w-2 flex-none rounded-full bg-blue-600 absolute timeline__bullet--left"></div>
            <div className="timeline__line w-full bg-blue-600"></div>
            <div className="h-2 w-2 flex-none rounded-full bg-blue-600 absolute timeline__bullet--right"></div>
        </div>
    );
};

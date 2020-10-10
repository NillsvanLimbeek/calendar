import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { addWeeks, subWeeks } from 'date-fns';

import { Weekdays } from '../components/Weekdays';
import { WeekGrid } from '../components/WeekGrid';
import { MonthGrid } from '../components/MonthGrid';
import { CalendarControls } from '../components/CalendarControls';

import { useDateState, useDateDispatch } from '../lib/context';
import { Period } from '../lib/types';

export const Calendar = () => {
    const { date, period } = useDateState();
    const dispatch = useDateDispatch();

    function handleWeek(week: 'next' | 'prev') {
        let newDate = date;
        week === 'next'
            ? (newDate = addWeeks(date, 1))
            : (newDate = subWeeks(date, 1));

        dispatch({ type: 'SET_DATE', payload: newDate });
    }

    function handleSetToday() {
        dispatch({ type: 'SET_DATE', payload: new Date() });
    }

    function handlePeriod(period: Period) {
        dispatch({ type: 'SET_PERIOD', payload: period });
    }

    return (
        <Router>
            <main className="w-full">
                <CalendarControls
                    date={date}
                    handleWeek={(week) => handleWeek(week)}
                    handleSetToday={handleSetToday}
                    handlePeriod={handlePeriod}
                />

                <div className="calendar bg-white rounded-sm shadow-md">
                    <Weekdays date={date} period={period} />

                    <Switch>
                        <Route
                            path="/week"
                            component={() => <WeekGrid date={date} />}
                        />
                        <Route
                            path="/month"
                            component={() => <MonthGrid date={date} />}
                        />
                    </Switch>
                </div>
            </main>
        </Router>
    );
};

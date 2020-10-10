import React, { useReducer, createContext, useContext } from 'react';

import DateReducer from './DateReducer';
import { State, Dispatch, Props } from './DateTypes';

const initialState: State = {
    date: new Date(),
    period: 'week',
};

const DateStateContext = createContext<State | undefined>(undefined);
const DateDispatchContext = createContext<Dispatch | undefined>(undefined);

function DateProvider({ children }: Props) {
    const [state, dispatch] = useReducer(DateReducer, initialState);

    return (
        <DateStateContext.Provider
            value={{ date: state.date, period: state.period }}
        >
            <DateDispatchContext.Provider value={dispatch}>
                {children}
            </DateDispatchContext.Provider>
        </DateStateContext.Provider>
    );
}

function useDateState() {
    const context = useContext(DateStateContext);

    if (context === undefined) {
        throw new Error('useDateState must be used within a DateProvider');
    }

    return context;
}

function useDateDispatch() {
    const context = useContext(DateDispatchContext);

    if (context === undefined) {
        throw new Error('useDateDispatch must be used within a DateProvider');
    }

    return context;
}

export { DateProvider, useDateState, useDateDispatch };

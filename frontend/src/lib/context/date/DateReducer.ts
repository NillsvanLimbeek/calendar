import { State, Action } from './DateTypes';

export default (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_DATE':
            return { ...state, date: action.payload };
        case 'SET_PERIOD':
            return { ...state, period: action.payload };
        default:
            return state;
    }
};

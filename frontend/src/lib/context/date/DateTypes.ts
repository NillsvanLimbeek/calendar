import { Period } from '../../types';

export type Action =
    | { type: 'SET_DATE'; payload: Date }
    | { type: 'SET_PERIOD'; payload: Period };
export type State = { date: Date; period: Period };
export type Dispatch = (action: Action) => void;
export type Props = { children: React.ReactNode };

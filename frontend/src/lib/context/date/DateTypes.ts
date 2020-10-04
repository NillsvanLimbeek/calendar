export type Action = { type: 'SET_DATE'; payload: Date };
export type State = { date: Date };
export type Dispatch = (action: Action) => void;
export type Props = { children: React.ReactNode };

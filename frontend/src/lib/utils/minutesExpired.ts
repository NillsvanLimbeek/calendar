import { differenceInMinutes, startOfDay } from 'date-fns';

export function minutesExpired() {
    const minutes = differenceInMinutes(new Date(), startOfDay(new Date()));

    return Math.ceil(minutes * 1.3333);
}

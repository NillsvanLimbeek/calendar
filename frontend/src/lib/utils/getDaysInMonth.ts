import {
    addDays,
    differenceInDays,
    endOfMonth,
    endOfWeek,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

export function getDaysInMonth(date: Date) {
    const monthStart = startOfMonth(date);
    const weekStart = startOfWeek(monthStart);

    const monthEnd = endOfMonth(date);
    const weekEnd = endOfWeek(monthEnd);

    const diff = differenceInDays(weekEnd, weekStart) + 1;

    return [...Array(diff)].map((_, index) => {
        return addDays(weekStart, index);
    });
}

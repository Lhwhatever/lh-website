export enum Month {
    JAN = 0,
    FEB = 1,
    MAR = 2,
    APR = 3,
    MAY = 4,
    JUN = 5,
    JUL = 6,
    AUG = 7,
    SEP = 8,
    OCT = 9,
    NOV = 10,
    DEC = 11,
}

export function makeDate(year: number, month: Month): Date {
    return new Date(year, month);
}

export interface DateInterval {
    start: Date;
    end?: Date;
}

export function compareDateIntervals<T extends DateInterval>(
    a: T,
    b: T
): number {
    if (a.end) return b.end ? Number(b.end) - Number(a.end) : 1;
    else return b.end ? -1 : Number(a.start) - Number(b.start);
}

export function formatYM(d: Date): string {
    return `${String(d.getMonth() + 1).padStart(2, "0")} · ${d.getFullYear()}`;
}

export function makeInterval(fr: Date, to?: Date): string {
    return `${formatYM(fr)} — ${to ? formatYM(to) : "Present"}`;
}

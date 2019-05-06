import { DateDiff, isLeapYear, daysInMonth } from './DateStuff';

test('isLeapYear', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2012)).toBe(true);
    expect(isLeapYear(2200)).toBe(false);
    expect(isLeapYear(2001)).toBe(false);
});

test('daysInMonth', () => {
    expect(daysInMonth('february', 2000)).toBe(29);
    expect(daysInMonth(2, 2200)).toBe(28);
    expect(daysInMonth('february')).toBe(28);
    expect(daysInMonth(1)).toBe(31);
});

test('DatDiff', () => {
    const date1String = 'March 8, 1990 05:21:00 AM EST';
    const date1 = new Date(date1String);

    const date2String = 'March 8, 2019 05:20:55 AM EST';
    const date2 = new Date(date2String);

    const dateDiff = new DateDiff(date1, date2)

    expect(dateDiff.diffYears()).toBe(28);
    expect(dateDiff.diffMonthsAfterYears()).toBe(11); // failing
    expect(dateDiff.diffDaysAfterMonths()).toBe(27); // failing
});
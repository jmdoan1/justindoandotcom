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
    const ogDateString = 'March 8, 1990 05:21:00 AM EST';
    const ogDate = new Date(ogDateString);

    const date1String = 'March 8, 2019 05:20:59 AM EST';
    const date1 = new Date(date1String);

    const dateDiff1 = new DateDiff(ogDate, date1)

    expect(dateDiff1.diffYears()).toBe(28);
    expect(dateDiff1.diffMonthsAfterYears()).toBe(11);
    expect(dateDiff1.diffDaysAfterMonths()).toBe(27);
    expect(dateDiff1.diffHoursAfterDays()).toBe(23);
    expect(dateDiff1.diffMinutesAfterHours()).toBe(59);
    expect(dateDiff1.diffSecondsAfterMinutes()).toBe(59);

    const date2String = 'March 8, 2016 05:20:59 AM EST';
    const date2 = new Date(date2String);
    const dateDiff2 = new DateDiff(ogDate, date2)

    expect(dateDiff2.diffYears()).toBe(25);
    expect(dateDiff2.diffMonthsAfterYears()).toBe(11);
    expect(dateDiff2.diffDaysAfterMonths()).toBe(28);
    expect(dateDiff2.diffHoursAfterDays()).toBe(23);
    expect(dateDiff2.diffMinutesAfterHours()).toBe(59);
    expect(dateDiff2.diffSecondsAfterMinutes()).toBe(59);

    const date3String = 'March 8, 2019 05:22:59 AM EST';
    const date3 = new Date(date3String);
    const dateDiff3 = new DateDiff(ogDate, date3)

    expect(dateDiff3.diffYears()).toBe(29);
    expect(dateDiff3.diffMonthsAfterYears()).toBe(0);
    expect(dateDiff3.diffDaysAfterMonths()).toBe(0);
    expect(dateDiff3.diffHoursAfterDays()).toBe(0);
    expect(dateDiff3.diffMinutesAfterHours()).toBe(1);
    expect(dateDiff3.diffSecondsAfterMinutes()).toBe(59);
});
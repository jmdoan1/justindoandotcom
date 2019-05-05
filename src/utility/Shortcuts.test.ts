import { remainder, loopIndex, isLeapYear, daysInMonth } from './Shortcuts';

test('remainder', () => {
    expect(remainder(4, 6)).toBe(4);
    expect(remainder(6, 4)).toBe(2);
    expect(remainder(6780, 438)).toBe(210);
    expect(remainder(52, 653)).toBe(52);
});

test('loopIndex', () => {
    expect(loopIndex(0, 5)).toBe(1);
    expect(loopIndex(3, 5)).toBe(4);
    expect(loopIndex(4, 5)).toBe(0);
});

test('isLeapYear', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2012)).toBe(true);
    expect(isLeapYear(2200)).toBe(false);
    expect(isLeapYear(2001)).toBe(false);
});

test('ghjhj', () => {
    expect(daysInMonth('february', 2000)).toBe(29);
    expect(daysInMonth(2, 2200)).toBe(28);
    expect(daysInMonth('february')).toBe(28);
    expect(daysInMonth(1)).toBe(31);
});


import remainder, { loopIndex } from './Shortcuts';

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


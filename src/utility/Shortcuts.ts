import { daysInMonth } from './DateStuff';

export function randomize(arr: any[]) {
    return arr.sort(function (a, b) { return 0.5 - Math.random() });
}

/**
 * Returns the remainder of x over y 
 * @param x The dividend
 * @param overY The divisor
 */
export function remainder(x: number, overY: number): number {
    // eg 6 / 4
    return (
        Math.round(
            (
                (x / overY) - // 1.5
                Math.floor(x / overY) // - 1 = 0.5
            ) * overY) // * 4 = 2
    );
}

/**
 * Returns either the next index or 0 if at the end of the array
 * @param currentIndex The index of the current item
 * @param arrayLength The length of the array you are looping through
 */
export function loopIndex(currentIndex: number, arrayLength: number): number | undefined {
    if (currentIndex >= 0 && arrayLength > 0) {
        return remainder(currentIndex + 1, arrayLength);
    }
    return undefined;
}

/**
 * Returns the difference between two dats (currently as a string like 'x years, x months, 'etc...)
 * @param date1 Any date
 * @param date2 Any other date
 */
export function dateDiff(date1: Date, date2: Date) {
    var firstDate: Date;
    var secondDate: Date;

    if (date1 <= date2) {
        firstDate = date1;
        secondDate = date2;
    } else {
        firstDate = date2;
        secondDate = date1;
    }

    const firstYear = firstDate.getUTCFullYear();
    const secondYear = secondDate.getUTCFullYear();
    // months apparently 0 indexed, adding + 1 to better align with how my brain is treating these numbers in the logic
    const firstMonth = firstDate.getUTCMonth() + 1;
    const secondMonth = secondDate.getUTCMonth() + 1;

    const firstDay = firstDate.getUTCDate();
    const secondDay = secondDate.getUTCDate();

    const firstHour = firstDate.getUTCHours();
    const secondHour = secondDate.getUTCHours();

    const firstMinute = firstDate.getUTCMinutes();
    const secondMinute = secondDate.getUTCMinutes();

    var diffYearsTotal = secondYear - firstYear;
    if (secondMonth < firstMonth && diffYearsTotal > 0) { diffYearsTotal = diffYearsTotal - 1 };

    var diffMonthsAfterYears = secondMonth >= firstMonth ? secondMonth - firstMonth : 12 - (firstMonth - secondMonth);
    // const diffMonthsTotal = diffMonthsAfterYears + (diffYearsTotal * 12); // maybe later, when this is a class

    var diffDaysAfterMonth: number;

    if (secondDay < firstDay) {
        diffMonthsAfterYears = diffMonthsAfterYears > 0 ? diffMonthsAfterYears - 1 : 11;

        diffDaysAfterMonth = (daysInMonth(secondMonth > 0 ? (secondMonth - 1) : 12) || 30) - (firstDay - secondDay);
    } else {
        diffDaysAfterMonth = secondDay - firstDay;
    }

    var diffHoursAfterDay: number;

    if (secondHour < firstHour) {
        diffDaysAfterMonth = diffDaysAfterMonth - 1

        diffHoursAfterDay = 24 - (firstHour - secondHour);
    } else {
        diffHoursAfterDay = secondHour - firstHour;
    }

    var diffMinutesAfterHour: number;

    if (secondMinute < firstMinute) {
        diffHoursAfterDay = diffHoursAfterDay - 1

        diffMinutesAfterHour = 60 - (firstMinute - secondMinute);
    } else {
        diffMinutesAfterHour = secondMinute - firstMinute;
    }

    const firstSecond = firstDate.getUTCSeconds();
    const secondSecond = secondDate.getUTCSeconds();

    var diffSecondsAfterMinute: number;

    if (secondSecond < firstSecond) {
        diffMinutesAfterHour = diffMinutesAfterHour - 1

        diffSecondsAfterMinute = 60 - (firstSecond - secondSecond);
    } else {
        diffSecondsAfterMinute = secondSecond - firstSecond;
    }

    return (
        diffYearsTotal + (diffYearsTotal === 1 ? ' year, ' : ' years, ') +
        diffMonthsAfterYears + (diffMonthsAfterYears === 1 ? ' month, ' : ' months, ') +
        diffDaysAfterMonth + (diffDaysAfterMonth === 1 ? ' day, ' : ' days, ') +
        diffHoursAfterDay + (diffHoursAfterDay === 1 ? ' hour, ' : ' hours, ') +
        diffMinutesAfterHour + (diffMinutesAfterHour === 1 ? ' minute, ' : ' minutes, ') +
        diffSecondsAfterMinute + (diffSecondsAfterMinute === 1 ? ' second' : ' seconds')
    );
}


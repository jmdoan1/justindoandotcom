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

    var diffYearsTotal = secondYear - firstYear;

    // apparently 0 indexed, adding + 1 to better align with how my brain is treating these numbers in the logic
    const firstMonth = firstDate.getUTCMonth() + 1;
    const secondMonth = secondDate.getUTCMonth() + 1;

    if (secondMonth < firstMonth && diffYearsTotal > 0) { diffYearsTotal = diffYearsTotal - 1 };

    var diffMonthsAfterYears = secondMonth >= firstMonth ? secondMonth - firstMonth : 12 - (firstMonth - secondMonth);
    // const diffMonthsTotal = diffMonthsAfterYears + (diffYearsTotal * 12); // maybe later, when this is a class

    const firstDay = firstDate.getUTCDate();
    const secondDay = secondDate.getUTCDate();

    var diffDaysAfterMonth: number;

    if (secondDay < firstDay) {
        diffMonthsAfterYears = diffMonthsAfterYears > 0 ? diffMonthsAfterYears - 1 : 11;

        diffDaysAfterMonth = (daysInMonth(secondMonth > 0 ? (secondMonth - 1) : 12) || 30) - (firstDay - secondDay);
    } else {
        diffDaysAfterMonth = secondDay - firstDay;
    }

    const firstHour = firstDate.getUTCHours();
    const secondHour = secondDate.getUTCHours();

    var diffHoursAfterDay: number;

    if (secondHour < firstHour) {
        diffDaysAfterMonth = diffDaysAfterMonth - 1

        diffHoursAfterDay = 24 - (firstHour - secondHour);
    } else {
        diffHoursAfterDay = secondHour - firstHour;
    }

    const firstMinute = firstDate.getUTCMinutes();
    const secondMinute = secondDate.getUTCMinutes();

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

/**
 * Returns a boolean value for whether the provided year is a leap year
 * @param year The year you are checking
 */
export function isLeapYear(year: number): boolean {
    // https://www.mathsisfun.com/leap-years.html
    return ((remainder(year, 4) === 0 && remainder(year, 100) !== 0) || remainder(year, 400) === 0);
}

/**
 * Returns
 * @param month 
 * @param ofYear 
 */
export function daysInMonth(month: number | string, ofYear?: number): number | undefined {
    switch (month.toString().toLowerCase().trim()) {
        case '1': case 'january': {
            return 31;
        }
        case '2': case 'february': {
            if (ofYear) { return isLeapYear(ofYear) ? 29 : 28; }
            return 28;
        }
        case '3': case 'march': {
            return 31;
        }
        case '4': case 'april': {
            return 30;
        }
        case '5': case 'may': {
            return 31;
        }
        case '6': case 'june': {
            return 30;
        }
        case '7': case 'july': {
            return 31;
        }
        case '8': case 'august': {
            return 31;
        }
        case '9': case 'september': {
            return 30;
        }
        case '10': case 'october': {
            return 31;
        }
        case '11': case 'november': {
            return 30;
        }
        case '12': case 'december': {
            return 31;
        }
        default: {
            return undefined;
        }
    }
}
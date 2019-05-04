export function randomize(arr: any[]) {
    return arr.sort(function (a, b) { return 0.5 - Math.random() });
}

/**
 * Returns the remainder of x over y 
 * @param x The dividend
 * @param overY The divisor
 */
export function remainder(x: number, overY: number): number {
    //eg 4 / 6
    return (
        Math.round(
            (
                (x / overY) - // 1.666666
                Math.floor(x / overY) // - 1 = 0.6666
            ) * overY) // * 6 = 2
    );
}

/**
 * Returns either the next index or 0 if at the end of the array
 * @param currentIndex The index of the current item
 * @param arrayLength The length of the array you are looping through
 */
export function loopIndex(currentIndex: number, arrayLength: number): number | undefined {
    if (currentIndex >= 0 && arrayLength > 0) {
        return remainder(currentIndex + 1, arrayLength)
    }
    return undefined;
}

export function ageFromMilliseconds(milliseconds: number): String {
    const years = Math.floor(milliseconds / (24 * 60 * 60 * 365 * 1000))
    return (years + ' years');
}

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

    const firstMonth = firstDate.getUTCMonth();
    const secondMonth = secondDate.getUTCMonth();

    if (secondMonth < firstMonth && diffYearsTotal > 0) { diffYearsTotal = diffYearsTotal - 1 };

    var diffMonthsAfterYears = secondMonth >= firstMonth ? secondMonth - firstMonth : 12 - (firstMonth - secondMonth);
    const diffMonthsTotal = diffMonthsAfterYears + (diffYearsTotal * 12);

    const firstDay = firstDate.getUTCDate();
    const secondDay = secondDate.getUTCDate();

    if (secondDay < firstDay) {
        diffMonthsAfterYears = diffMonthsAfterYears > 0 ? diffMonthsAfterYears - 1 : 11;
    };

    console.log(daysInMonth(secondMonth) + ' ' + diffMonthsTotal);

    return (diffYearsTotal + ' Years, ' + diffMonthsAfterYears + ' months');
}

function isLeapYear(year: number): boolean {
    // https://www.mathsisfun.com/leap-years.html
    return ((remainder(year, 4) === 0 && remainder(year, 100) !== 0) || remainder(year, 400) === 0);
}

function daysInMonth(month: number | string, ofYear?: number): number | undefined {
    switch (month.toString().toLowerCase().trim()) {
        case '1' || 'january': {
            return 31;
        }
        case '2' || 'february': {
            if (ofYear) { return isLeapYear(ofYear) ? 29 : 28; }
            return 28;
        }
        case '3' || 'march': {
            return 31;
        }
        case '4' || 'april': {
            return 30;
        }
        case '5' || 'may': {
            return 31;
        }
        case '6' || 'june': {
            return 30;
        }
        case '7' || 'july': {
            return 31;
        }
        case '8' || 'august': {
            return 31;
        }
        case '9' || 'september': {
            return 30;
        }
        case '10' || 'october': {
            return 31;
        }
        case '11' || 'november': {
            return 30;
        }
        case '12' || 'december': {
            return 31;
        }
        default: {
            return undefined;
        }
    }
}
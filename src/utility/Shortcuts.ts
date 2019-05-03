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
    const years = Math.floor(milliseconds / (24*60*60*365*1000))
    return(years + ' years');
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

    let firstYear = firstDate.getUTCFullYear();
    let secondYear = secondDate.getUTCFullYear();

    return(secondYear - firstYear + ' Years');
}
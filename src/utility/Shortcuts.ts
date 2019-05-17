/**
 * Returns the array you provide in random order.
 * @param arr The array you want randomized
 */
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


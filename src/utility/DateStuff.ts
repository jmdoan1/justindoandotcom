import { remainder } from './Shortcuts';


export class DateDiff {
    firstDate: Date;
    secondDate: Date;

    /**
     * The year of the earlier date
     */
    firstYear: number;
    secondYear: number;
    firstMonth: number;
    secondMonth: number;
    firstDay: number;
    secondDay: number;
    firstHour: number;
    secondHour: number;
    firstMinute: number;
    secondMinute: number;
    firstSecond: number;
    secondSecond: number;
    firstMillisecond: number;
    secondMillisecond: number;

    constructor(oneDate: Date, anotherDate: Date) {
        if (oneDate <= anotherDate) {
            this.firstDate = oneDate;
            this.secondDate = anotherDate;
        } else {
            this.firstDate = anotherDate;
            this.secondDate = oneDate;
        }

        this.firstYear = this.firstDate.getUTCFullYear();
        this.secondYear = this.secondDate.getUTCFullYear();
        // months apparently 0 indexed, adding + 1 because this is actual calendars work
        this.firstMonth = this.firstDate.getUTCMonth() + 1;
        this.secondMonth = this.secondDate.getUTCMonth() + 1;
        this.firstDay = this.firstDate.getUTCDate();
        this.secondDay = this.secondDate.getUTCDate();
        this.firstHour = this.firstDate.getUTCHours();
        this.secondHour = this.secondDate.getUTCHours();
        this.firstMinute = this.firstDate.getUTCMinutes();
        this.secondMinute = this.secondDate.getUTCMinutes();
        this.firstSecond = this.firstDate.getUTCSeconds();
        this.secondSecond = this.secondDate.getUTCSeconds();
        this.firstMillisecond = this.firstDate.getUTCMilliseconds();
        this.secondMillisecond = this.secondDate.getUTCMilliseconds();

    }

    public diffYears(): number {
        var years = this.secondYear - this.firstYear;

        if (this.secondMonth < this.firstMinute && years > 1) {
            years = years - 1;
        }

        return years;
    }

    diffMonthsAfterYears(): number {
        var months = this.secondMonth >= this.firstMonth ?
            this.secondMonth - this.firstMonth :
            12 - (this.firstMonth - this.secondMonth);

        if (this.monthsNeedRollBack()) {
            months = months > 0 ? months - 1 : 11;
        }

        return months;
    }

    private monthsNeedRollBack(): boolean {
        return (
            (this.secondDay < this.firstDay) ||
            (this.secondDay === this.firstDay && this.daysNeedRollBack())
        );
    }

    diffMonthsTotal(): number {
        return this.diffMonthsAfterYears() + (this.diffYears() * 12);
    }

    diffWeeksTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (7 * 24 * 60 * 60 * 1000));
    }

    diffDaysAfterMonths(): number {
        var days = this.secondDay - this.firstDay;

        const daysInSecondMonth = daysInMonth(
            this.secondMonth > 1 ? (this.secondMonth - 1) : 12,
            this.secondMonth > 1 ? this.secondYear : this.secondYear - 1) ||
            30;

        if (this.secondDay < this.firstDay) {
            days = daysInSecondMonth - (this.firstDay - this.secondDay);
        }

        if (this.daysNeedRollBack()) {
            days = (days > 1) ? days - 1 : (daysInSecondMonth - 1);
        }

        return days;
    }
    
    private daysNeedRollBack(): boolean {
        return (
            (this.secondHour < this.firstHour) ||
            (this.secondHour === this.firstHour && this.secondMinute < this.firstMinute) ||
            (this.secondHour === this.firstHour && this.secondMinute === this.firstMinute && this.secondSecond < this.firstSecond) ||
            (this.secondHour === this.firstHour && this.secondMinute === this.firstMinute && this.secondSecond === this.firstSecond && this.secondMillisecond < this.firstMillisecond)
        );
    }

    diffDaysTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (24 * 60 * 60 * 1000));
    }

    diffHoursAfterDays(): number {
        var hours = (this.secondHour < this.firstHour) ?
            24 - (this.firstHour - this.secondHour) :
            this.secondHour - this.firstHour;

        if (this.secondMinute < this.firstMinute) { hours = hours - 1; }

        return hours;
    }

    diffHoursTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (60 * 60 * 1000));
    }

    diffMinutesAfterHours() {
        var minutes = (this.secondMinute < this.firstMinute) ?
            60 - (this.firstMinute - this.secondMinute) :
            this.secondMinute - this.firstMinute;

        if (this.secondSecond < this.firstSecond) { minutes = minutes - 1; }

        return minutes;
    }

    diffMinutesTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (60 * 1000));
    }

    diffSecondsAfterMinutes(): number {
        var seconds = (this.secondSecond < this.firstSecond) ?
            60 - (this.firstSecond - this.secondSecond) :
            this.secondSecond - this.firstSecond;

        if (this.secondMillisecond < this.firstMillisecond) { seconds = seconds - 1; }

        return seconds;
    }

    diffMillisecondsAfterSeconds(): number {
        return (this.secondMillisecond < this.firstMillisecond) ?
            60 - (this.firstMillisecond - this.secondMillisecond) :
            this.secondMillisecond - this.firstMillisecond;
    }

    diffInMilliseconds(): number {
        return Date.parse(this.secondDate.toISOString()) - Date.parse(this.firstDate.toISOString());
    }

    totalTimeString(): string {
        return (
            this.diffYears() + (this.diffYears() === 1 ? ' year, ' : ' years, ') +
            this.diffMonthsAfterYears() + (this.diffMonthsAfterYears() === 1 ? ' month, ' : ' months, ') +
            this.diffDaysAfterMonths() + (this.diffDaysAfterMonths() === 1 ? ' day, ' : ' days, ') +
            this.diffHoursAfterDays() + (this.diffHoursAfterDays() === 1 ? ' hour, ' : ' hours, ') +
            this.diffMinutesAfterHours() + (this.diffMinutesAfterHours() === 1 ? ' minute, ' : ' minutes, ') +
            this.diffSecondsAfterMinutes() + (this.diffSecondsAfterMinutes() === 1 ? ' second' : ' seconds')
        );
    }
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
 * Returns the number days in the month.
 * @param month Numbers 1-12 OR full month name string e.g. 'january' (not case sensitive)
 * @param ofYear Optional parameter to factor in leap years for February
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
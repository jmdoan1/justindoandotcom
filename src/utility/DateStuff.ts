import { remainder } from './Shortcuts';

/**
 * A class for dynamically calculating differences between two Date objects
 */
export class DateDiff {
    /**
     * The earlier of the two provided dates. Every other 'firstSomething' variable comes from this date
     */
    firstDate: Date;
    /**
     * The later of the two provided dates. Every other 'secondSomething' variable comes from this date
     */
    secondDate: Date;

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

    /**
     * Dynamically calculate differences between two Date objects. Earliest date is determined within class, order doesn't matter
     * @param oneDate any date
     * @param anotherDate any other date
     * @param ignoreTimeZones Optional. Setting this to true treats provided dates as absolute. Default behavior gets UTC time values
     */
    constructor(oneDate: Date, anotherDate: Date, ignoreTimeZones?: boolean) {
        if (oneDate <= anotherDate) {
            this.firstDate = oneDate;
            this.secondDate = anotherDate;
        } else {
            this.firstDate = anotherDate;
            this.secondDate = oneDate;
        }

        if (ignoreTimeZones) {
            this.firstYear = this.firstDate.getFullYear();
            this.secondYear = this.secondDate.getFullYear();
            // months apparently 0 indexed, adding + 1 because this is actual calendars work
            this.firstMonth = this.firstDate.getMonth() + 1;
            this.secondMonth = this.secondDate.getMonth() + 1;
            this.firstDay = this.firstDate.getDate();
            this.secondDay = this.secondDate.getDate();
            this.firstHour = this.firstDate.getHours();
            this.secondHour = this.secondDate.getHours();
            this.firstMinute = this.firstDate.getMinutes();
            this.secondMinute = this.secondDate.getMinutes();
            this.firstSecond = this.firstDate.getSeconds();
            this.secondSecond = this.secondDate.getSeconds();
            this.firstMillisecond = this.firstDate.getMilliseconds();
            this.secondMillisecond = this.secondDate.getMilliseconds();
        } else {
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

    }

    /**
     * Returns integer value of years passed. Rounds down (e.g. Sept 2 2018 to Sept 1 2019 = 0 years)
     */
    public diffYears(): number {
        var years = this.secondYear - this.firstYear;

        if (this.yearsNeedRollBack() && years > 0) { years = years - 1; }

        return years;
    }

    private yearsNeedRollBack(): boolean {
        return (
            (this.secondMonth < this.firstMonth) ||
            (this.secondMonth === this.firstMonth && this.monthsNeedRollBack())
        );
    }

    /**
     * Returns integer value of months after years have been factored. Rounds down (e.g. Sept 2 2018 to Oct 30 2019 = 1 month)
     */
    diffMonthsAfterYears(): number {
        var months = this.secondMonth >= this.firstMonth ?
            this.secondMonth - this.firstMonth :
            12 - (this.firstMonth - this.secondMonth);

        if (this.monthsNeedRollBack()) { months = months > 0 ? months - 1 : 11; }

        return months;
    }

    private monthsNeedRollBack(): boolean {
        return (
            (this.secondDay < this.firstDay) ||
            (this.secondDay === this.firstDay && this.daysNeedRollBack())
        );
    }

    /**
     * Returns integer value of total months. Rounds down (e.g. Sept 2 2018 to Oct 30 2019 = 13 months)
     */
    diffMonthsTotal(): number {
        return this.diffMonthsAfterYears() + (this.diffYears() * 12);
    }

    /**
     * Returns integer value of weeks. Rounds down (e.g. Sept 2 2018 to Sept 12 2018 = 1 week)
     */
    diffWeeksTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (7 * 24 * 60 * 60 * 1000));
    }

    /**
     * Returns integer value of days after months have been factored. Rounds down (e.g. Sept 2 2018 5pm to Oct 13 2018 4:59pm = 10 days)
     */
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
            (this.secondHour === this.firstHour && this.hoursNeedRollBack())
        );
    }

    /**
     * Returns integer value of total days. Rounds down (e.g. Sept 2 2018 5pm to Oct 13 2018 4:59pm = 40 days)
     */
    diffDaysTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (24 * 60 * 60 * 1000));
    }

    /**
     * Returns integer value of hours after days have been factored. Rounds down (e.g. Sept 2 2018 5pm to Oct 13 2018 4:59pm = 23 hours)
     */
    diffHoursAfterDays(): number {
        var hours = (this.secondHour < this.firstHour) ?
            24 - (this.firstHour - this.secondHour) :
            this.secondHour - this.firstHour;

        if (this.hoursNeedRollBack()) { hours = (hours > 0) ? hours - 1 : 23; }

        return hours;
    }
    
    private hoursNeedRollBack(): boolean {
        return (
            (this.secondMinute < this.firstMinute) ||
            (this.secondMinute === this.firstMinute && this.minutesNeedRollBack())
        );
    }

    /**
     * Returns integer value of total hours. Rounds down (e.g. Sept 2 2018 5pm to Sept 4 2018 4:59pm = 47 hours)
     */
    diffHoursTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (60 * 60 * 1000));
    }

    /**
     * Returns integer value of minutes after hours have been factored. Rounds down (e.g. Sept 2 2018 5pm to Sept 2 2018 7:59pm = 59 minutes)
     */
    diffMinutesAfterHours() {
        var minutes = (this.secondMinute < this.firstMinute) ?
            60 - (this.firstMinute - this.secondMinute) :
            this.secondMinute - this.firstMinute;

        if (this.minutesNeedRollBack()) { minutes = minutes - 1; }

        return minutes;
    }
    
    private minutesNeedRollBack(): boolean {
        return (
            (this.secondSecond < this.firstSecond) ||
            (this.secondSecond === this.firstSecond && this.secondsNeedRollBack())
        );
    }

    /**
     * Returns integer value of total minutes. Rounds down (e.g. Sept 2 2018 5pm to Sept 2 2018 7:59pm = 179 minutes)
     */
    diffMinutesTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (60 * 1000));
    }

    diffSecondsAfterMinutes(): number {
        var seconds = (this.secondSecond < this.firstSecond) ?
            60 - (this.firstSecond - this.secondSecond) :
            this.secondSecond - this.firstSecond;

        if (this.secondsNeedRollBack()) { seconds = seconds - 1; }

        return seconds;
    }

    private secondsNeedRollBack(): boolean {
        return (
            (this.secondMillisecond < this.firstMillisecond)
        );
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
            if (ofYear !== undefined) { return isLeapYear(ofYear) ? 29 : 28; }
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
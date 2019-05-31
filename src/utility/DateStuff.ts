import remainder from './Shortcuts';

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
            // months apparently 0 indexed, adding + 1 because this is how actual calendars work
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
            // months apparently 0 indexed, adding + 1 because this is how actual calendars work
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

        if (this.yearsNeedRollback() && years > 0) { years = years - 1; }

        return years;
    }

    /**
     * This comment block attempts to explain ALL 'thingsNeedTollBack' functions
     * This function returns true for either of the following two scenarios:
     * 
     * 1. If the month of the second date is earlier than the month of the first date. 
     * *  e.g. 4/15/2018 - 3/15/2019: Years were just calculated at 1 
     * *  but need to be reduced to 0
     * 2. If the months are the same AND THE DAYS had to be rolled back
     * *  eg. 4/15/2018 - 4/14/2019 Years and months were just caluclated at 1 and 0 
     * *  but both need to be rolled back to 0 and 11
     * 
     * This logic flows ALL the way through to milliseconds such that 
     * * 4/15/2018 02:15:3000 AM - 4/15/2019 02:15:2999
     * 
     * triggers secondsNeedRollback, which triggers minutesNeedRollback, etc. etc. turning original calculations
     * * from 1 year, 0 months, 0 days, 0 hours, 0 minuts, 0 seconds, and -1 milliseconds
     * * into 0 years, 11 months, 30 days, 23 hours, 59 minutes, 59 seconds, and 999 milliseconds
     */
    private yearsNeedRollback(): boolean {
        return (
            (this.secondMonth < this.firstMonth) ||
            (this.secondMonth === this.firstMonth && this.monthsNeedRollback())
        );
    }

    /**
     * Returns integer value of months after years have been factored. Rounds down (e.g. Sept 2 2018 to Oct 30 2019 = 1 month)
     */
    diffMonthsAfterYears(): number {
        var months = this.secondMonth >= this.firstMonth ?
            this.secondMonth - this.firstMonth :
            12 - (this.firstMonth - this.secondMonth);

        if (this.monthsNeedRollback()) { months = months > 0 ? months - 1 : 11; }

        return months;
    }

    private monthsNeedRollback(): boolean {
        return (
            (this.secondDay < this.firstDay) ||
            (this.secondDay === this.firstDay && this.daysNeedRollback())
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

        if (this.daysNeedRollback()) {
            days = (days > 1) ? days - 1 : (daysInSecondMonth - 1);
        }

        return days;
    }

    private daysNeedRollback(): boolean {
        return (
            (this.secondHour < this.firstHour) ||
            (this.secondHour === this.firstHour && this.hoursNeedRollback())
        );
    }

    /**
     * Returns integer value of weeks after years and months have been accounted for
     * TODO: add to unit tests
     */
    diffWeeksAfterMonths(): number {
        return Math.floor(this.diffDaysAfterMonths() / 7);
    }

    /**
     * Returns integer value of days after weeks have been accounted for
     * TODO: add to unit tests
     */
    diffDaysAfterWeeks(): number {
        return this.diffDaysAfterMonths() - (this.diffWeeksAfterMonths() * 7);
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

        if (this.hoursNeedRollback()) { hours = (hours > 0) ? hours - 1 : 23; }

        return hours;
    }

    private hoursNeedRollback(): boolean {
        return (
            (this.secondMinute < this.firstMinute) ||
            (this.secondMinute === this.firstMinute && this.minutesNeedRollback())
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

        if (this.minutesNeedRollback()) { minutes = minutes - 1; }

        return minutes;
    }

    private minutesNeedRollback(): boolean {
        return (
            (this.secondSecond < this.firstSecond) ||
            (this.secondSecond === this.firstSecond && this.secondsNeedRollback())
        );
    }

    /**
     * Returns integer value of total minutes. Rounds down (e.g. Sept 2 2018 5pm to Sept 2 2018 7:59pm = 179 minutes)
     */
    diffMinutesTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (60 * 1000));
    }

    /**
     * Returns integer value of minutes after hours have been factored. Rounds down (e.g. Sept 2 2018 5:00:50pm to Sept 2 2018 5:10:20pm = 30 seconds)
     */
    diffSecondsAfterMinutes(): number {
        var seconds = (this.secondSecond < this.firstSecond) ?
            60 - (this.firstSecond - this.secondSecond) :
            this.secondSecond - this.firstSecond;

        if (this.secondsNeedRollback()) { seconds = seconds - 1; }

        return seconds;
    }

    private secondsNeedRollback(): boolean {
        return (
            (this.secondMillisecond < this.firstMillisecond)
        );
    }

    /**
     * Returns integer value of total seconds. Rounds down (e.g. Sept 2 2018 5:00:35 pm to Sept 2 2018 5:02:34 pm = 119 seconds)
     */
    diffSecondsTotal(): number {
        return Math.floor(this.diffInMilliseconds() / (1000));
    }

    /**
     * Returns integer value of milliseconds after seconds have been factored. Rounds down (e.g. Sept 2 2018 5:00:00.900 pm to Sept 2 2018 5:00:01.800 pm = 900 milliseconds)
     */
    diffMillisecondsAfterSeconds(): number {
        return (this.secondMillisecond < this.firstMillisecond) ?
            60 - (this.firstMillisecond - this.secondMillisecond) :
            this.secondMillisecond - this.firstMillisecond;
    }

    diffInMilliseconds(): number {
        return Date.parse(this.secondDate.toISOString()) - Date.parse(this.firstDate.toISOString());
    }

    /**
     * Returns 'x year(s), x month(s), x week(s), x day(s), x hour(s), x minute(s), x second(s)'
     */
    totalTimeString(): string {
        return (
            (this.diffYears() > 0 ? this.diffYears() + (this.diffYears() === 1 ? ' year, ' : ' years, ') : '') +
            (this.diffMonthsAfterYears() > 0 ? this.diffMonthsAfterYears() + (this.diffMonthsAfterYears() === 1 ? ' month, ' : ' months, ') : '') +
            (this.diffWeeksAfterMonths() > 0 ? this.diffWeeksAfterMonths() + (this.diffWeeksAfterMonths() === 1 ? 'weeks, ' : ' weeks, ') : '') +
            (this.diffDaysAfterWeeks() > 0 ? this.diffDaysAfterWeeks() + (this.diffDaysAfterWeeks() === 1 ? ' day, ' : ' days, ') : '') +
            (this.diffHoursAfterDays() > 0 ? this.diffHoursAfterDays() + (this.diffHoursAfterDays() === 1 ? ' hour, ' : ' hours, ') : '') +
            (this.diffMinutesAfterHours() > 0 ? this.diffMinutesAfterHours() + (this.diffMinutesAfterHours() === 1 ? ' minute, ' : ' minutes, ') : '') +
            (this.diffSecondsAfterMinutes() > 0 ? this.diffSecondsAfterMinutes() + (this.diffSecondsAfterMinutes() === 1 ? ' second' : ' seconds') : '')
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
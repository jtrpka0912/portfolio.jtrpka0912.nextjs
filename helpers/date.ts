/**
 * @function humanReadableDate
 * @summary Human readable date
 * @description Convert YYYY-MM-DD to a human readable date.
 * @author J. Trpka
 * @param { string } simpleDate 
 * @returns { string }
 */
 export const humanReadableDate = (simpleDate: string): string => {
    // Lets first convert the string to a Date object to handle date calculations.
    const simpleDateObj: Date = new Date(simpleDate);

    // And split the date into an array for checking missing parts of a date.
    const simpleDateArray: string[] = simpleDate.split('-');

    /**
     * @var { number } fullYear
     * @summary Full year
     * @description The full year of the date (YYYY)
     * @author J. Trpka
     */
    const fullYear: number = simpleDateObj.getUTCFullYear();

    /**
     * @var { string } fullMonth
     * @summary Full month
     * @description The full name of the month (September)
     * @author J. Trpka
     */
    let fullMonth: string = '';

    /**
     * @var { string } fullDate
     * @summary Full date
     * @description The nth of the date (12th)
     * @author J. Trpka
     */
    let fullDate: string = '';

    if(simpleDateArray[1]) 
        fullMonth = convertMonthNumberToString(simpleDateObj.getUTCMonth());
    
    
    // https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th/15397495
    if(simpleDateArray[2]) 
        fullDate = convertDateNumberToString(simpleDateObj.getUTCDate()) + ',';

    
    // Combine the results of the full values
    const fullHumanDate: string[] = [];
    if(fullMonth) fullHumanDate.push(fullMonth);
    if(fullDate) fullHumanDate.push(fullDate);
    if(fullYear) fullHumanDate.push(fullYear.toString());

    return fullHumanDate.join(' ');
}

/**
 * @function convertMonthNumberToString
 * @summary Convert month number to string
 * @description Convert the month to a human readable string, full name.
 * @author J. Trpka
 * @param { number } numericMonth
 * @returns { string } 
 * @throws { Error }
 */
export const convertMonthNumberToString = (numericMonth: number): string => {
    switch(numericMonth) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: throw new Error('Invalid month value.');
    }
}

/**
 * @function convertDateNumberToString
 * @summary Convert date number to string
 * @description Convert the date to a nth format string.
 * @author J. Trpka
 * @tutorial https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th/15397495
 * @param { number } numericDate
 * @returns { string }
 * @throws { Error } 
 */
export const convertDateNumberToString = (numericDate: number): string => {
    if(numericDate <= 0 || numericDate > 31) throw new Error('Invalid date value.');

    if (numericDate > 3 && numericDate < 21) return numericDate + 'th';

    switch (numericDate % 10) {
        case 1:  return numericDate + 'st';
        case 2:  return numericDate + 'nd';
        case 3:  return numericDate + 'rd';
        default: return numericDate + 'th';
    }
}
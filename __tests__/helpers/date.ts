import { humanReadableDate, convertMonthNumberToString, convertDateNumberToString } from "../../helpers/date";

describe('humanReadableDate()', () => {
    test('Print out full date', () => {
        // Arrange
        const humanDate = humanReadableDate('2020-03-02');

        // Assert
        expect(humanDate).toBe('March 2nd, 2020');
    });

    test('Print out a partial date', () => {
        // Arrange
        const humanDate = humanReadableDate('2021-05');

        // Assert
        expect(humanDate).toBe('May 2021');
    });

    test('Print just the year', () => {
        // Arrange
        const humanDate = humanReadableDate('2022');

        // Assert
        expect(humanDate).toBe('2022');
    });

    test('Test if leap year with final day of February', () => {
        // Arrange
        const humanDate = humanReadableDate('2000-02-29');

        // Assert
        expect(humanDate).toBe('February 29th, 2000');
    });

    test('Test if not leap year by going over to March', () => {
        // Arrange
        const humanDate = humanReadableDate('2001-02-29');

        // Assert
        expect(humanDate).toBe('March 1st, 2001');
    });

    test('Throw an error if invalid date.', () => {
        expect(() => {
            humanReadableDate('2022-01-35');
        }).toThrowError('Invalid date.');
    });
});

describe('convertMonthNumberToString', () => {
    test('Retrieve January', () => {
        // Arrange
        const monthString = convertMonthNumberToString(0);

        // Assert
        expect(monthString).toBe('January');

        expect(() => {
            convertMonthNumberToString(0);
        }).not.toThrowError();
    });

    test('Retrieve September', () => {
        // Arrange
        const monthString = convertMonthNumberToString(8);

        // Assert
        expect(monthString).toBe('September');
        expect(monthString).not.toBe('August');
    });

    test('Throw an error', () => {
        // Assert
        expect(() => {
            convertMonthNumberToString(12); // One would think this would get December
        }).toThrowError('Invalid month value.');
    });
});

describe('convertDateNumberToString', () => {
    const errorMessage = 'Invalid date value.';

    test('Retrieve the 1st', () => {
        // Arrange
        const dateString = convertDateNumberToString(1);

        // Assert
        expect(dateString).toBe('1st');
    });

    test('Retrieve the 22nd', () => {
        // Arrange
        const dateString = convertDateNumberToString(22);

        // Assert
        expect(dateString).toBe('22nd');
    });

    test('Retrieve the 3rd', () => {
        // Arrange
        const dateString = convertDateNumberToString(3);

        // Assert
        expect(dateString).toBe('3rd');
    });

    test('Retrieve the 11th', () => {
        // Arrange
        const dateString = convertDateNumberToString(11);

        // Assert
        expect(dateString).toBe('11th');
    });

    test('Throw error with 0 or less', () => {
        // Assert
        expect(() => {
            convertDateNumberToString(0);
        }).toThrowError(errorMessage);

        expect(() => {
            convertDateNumberToString(-2);
        }).toThrowError(errorMessage);
    });

    test('Throw error with value greater than 31', () => {
        // Assert
        expect(() => {
            convertDateNumberToString(32);
        }).toThrowError(errorMessage);

        expect(() => {
            convertDateNumberToString(50);
        }).toThrowError(errorMessage);
    });
});
// script.test.js
import { calculateRevisionDates } from './script';

describe('Date Calculations', () => {
    test('Calculates correct revision dates', () => {
        const startDate = '2025-07-19';
        const expected = [
            '2025-07-26',
            '2025-08-19',
            '2025-10-19',
            '2026-01-19',
            '2026-07-19'
        ];
        
        expect(calculateRevisionDates(startDate)).toEqual(expected);
    });
});

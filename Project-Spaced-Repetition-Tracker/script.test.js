import { getRevisionDates } from './script.js';

test('placeholder test', () => {
  expect(true).toBe(true); // Temporary test to verify suite detection
});

describe("getRevisionDates", () => {
  test("calculates correct dates from 2024-02-29", () => {
    const result = getRevisionDates("2024-02-29");
    expect(result.oneYear).toBe("2025-02-28");
  });
});


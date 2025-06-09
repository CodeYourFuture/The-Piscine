import assert from "node:assert";
import { getSpacedRepetitionDates } from "./dateIntervals.mjs";

const base = "2025-06-03";
const expected = [
  "2025-06-10",
  "2025-07-03",
  "2025-09-03",
  "2025-12-03",
  "2026-06-03",
];
assert.deepEqual(getSpacedRepetitionDates(base), expected);
console.log("Date intervals: PASSED");

const leapStart = "2024-02-29";
const expectedLeap = [
  "2024-03-07", // +1 week
  "2024-03-29", // +1 month
  "2024-05-29", // +3 months
  "2024-08-29", // +6 months
  "2025-02-28", // +1 year (2025 is not a leap year)
];
assert.deepEqual(getSpacedRepetitionDates(leapStart), expectedLeap);
console.log("Leap year/edge case test: PASSED");

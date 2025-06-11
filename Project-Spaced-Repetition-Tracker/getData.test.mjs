import { getData } from "./storage.mjs";
import assert from "node:assert";

const expectedData = [
  { userId: "user1", topic: "Math", date: "2023-10-01" },
  { userId: "user1", topic: "Science", date: "2023-10-02" },
  { userId: "user2", topic: "History", date: "2023-10-03" },
];
const userId = "user1";

globalThis.localStorage = {
  getItem: (key) => {
    if (key === `stored-data-user-${userId}`) {
      return JSON.stringify(expectedData);
    }
    return null;
  },
};

const data = getData(userId);
assert.deepStrictEqual(
  data,
  expectedData,
  "Data does not match expected output"
);
console.log("getData: PASSED");

/*test(
  "getData returns correct data for user",
  () => {
    const userId = "user1";
    const expectedData = [
      { userId: "user1", topic: "Math", date: "2023-10-01" },
      { userId: "user1", topic: "Science", date: "2023-10-02" },
    ];

    globalThis.localStorage = {
      getItem: (key) => {
        if (key === `stored-data-user-${userId}`) {
          return JSON.stringify(expectedData);
        }
        return null;
      },
    };

    const data = getData(userId);
    assert.deepEqual(data, expectedData);
  },
  "Data should match expected data for user1"
);
*/

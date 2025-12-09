import assert from "node:assert";
import test from "node:test";
import { getUserIds } from "./storage.js";

test("User count is correct", () => {
  assert.equal(getUserIds().length, 5);
});

import assert from "node:assert";
import test from "node:test";
import { countUsers } from "./common.mjs";

test("User count is correct", () => {
  assert.equal(countUsers(), 4);
});

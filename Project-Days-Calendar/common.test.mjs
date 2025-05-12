import { getGreeting } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("Greeting is correct", () => {
  assert.equal(getGreeting(), "Hello");
});

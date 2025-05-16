import { getDictionarySize } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("Dictionary size is correct", () => {
  assert.equal(getDictionarySize(), 856);
});

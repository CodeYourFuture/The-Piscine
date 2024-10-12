// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be run with `node`.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

console.log(`{getGreeting()} - there are ${daysData.length} know days`);

const { addUserBookmark } = require("./script.js");

test("Check if the data is getting added into the database", function () {
	const testData = ["Test Bookmark", "A test","http://example.com"];
	const result = addUserBookmark("1", testData[0], testData[1], testData[2]);
	const containsTestBookmark = result.some(item => item.title === testData[0]);    
  	expect(containsTestBookmark).toBeTruthy();
});
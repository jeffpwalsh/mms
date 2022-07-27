//TESTS DATE STAMP FUNCTION IN CONFIG.JS USING JEST

const timeStampTEST = require("./configtest.js");

test("properly creates a date stamp - via function", () => {
  expect(timeStampTEST).toBeTruthy();
  expect(timeStampTEST).toBeDefined();
  expect(typeof timeStampTEST).toBe("function");
});

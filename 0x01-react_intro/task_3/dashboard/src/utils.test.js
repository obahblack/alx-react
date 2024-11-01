import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test("should test getFUllYear to make sure it returns correct year ", () => {
  const correctYear = new Date().getFullYear();
  expect(getFullYear()).toBe(correctYear);
});

test("should check that getFooterCpy returns the correct string when true or false ", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("should check the return string for getLastNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});

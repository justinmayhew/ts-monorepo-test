import { concat } from "./concat";

test("concat", () => {
  expect(concat("a", "b")).toBe("ab");
});

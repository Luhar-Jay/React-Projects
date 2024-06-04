import { sum } from "../Sum";

test("Sum function to be calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(5);
});

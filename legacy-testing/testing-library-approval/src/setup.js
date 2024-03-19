import { expect } from "vitest";

expect.extend({
  toVerifyAllCombinations(received, expected) {
    const result = expected.map((value) => value.map(received));
    expect(result).toMatchSnapshot();

    return {
      pass: true,
    };
  },
});

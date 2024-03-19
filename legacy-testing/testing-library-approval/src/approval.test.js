import { test, expect } from "vitest";

test("API response snapshot", async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const { results } = await response.json();

  expect(results).toMatchSnapshot();
});

test("Computed data snapshot", async () => {
  function magicOperation(value) {
    return Math.abs(value * 2);
  }

  expect(magicOperation).toVerifyAllCombinations([
    [1, 2, 3, 4, 5],
    [1, 3, 5, 7, 11],
    [-1, -2, -4, -6],
  ]);
});

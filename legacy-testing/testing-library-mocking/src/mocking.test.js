import { test, expect, vi } from "vitest";

vi.mock("./repositories/users-repository");
vi.mock("./repositories/companies-repository", () => ({
  findCompany: () => ({ name: "ACME S.A." }),
}));

import { findUser } from "./repositories/users-repository";
import { findCompany } from "./repositories/companies-repository";

test("Auto mocking", () => {
  expect(findUser()).toEqual({ login: "borillo" });
  expect(findCompany()).toEqual({ name: "ACME S.A." });
});

test("Function mocks", () => {
  const userId = 433342;
  const findUser = vi.fn();

  const user = findUser(userId);

  expect(findUser).toHaveBeenCalledOnce();
  expect(findUser).toHaveBeenCalledWith(userId);
});

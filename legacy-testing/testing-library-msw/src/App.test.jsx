import { render } from "@testing-library/react";

import App from "./App";

describe("Starwars characters", () => {
  test("should be listed", async () => {
    const { findByText } = render(<App />);

    expect(await findByText(/ricardo/i)).toBeDefined();
  });
});

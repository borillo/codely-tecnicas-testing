import { render } from "@testing-library/react";

import App from "./App";

/**
 * Prism command: `prism mock api.yaml`
 */

describe("Starwars characters", () => {
  test("should be listed", async () => {
    const { findByText } = render(<App />);

    expect(await findByText(/ricardo/i)).toBeDefined();
  });
});

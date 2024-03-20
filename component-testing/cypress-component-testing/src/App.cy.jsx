import React from "react";
import App from "./App";

import { appPageObject } from "./App.pageobject";

/**
 * 📖 https://testing-library.com/docs/cypress-testing-library/intro/
 */

describe("<App />", () => {
  it("Puede gestionar el estado", () => {
    const app = appPageObject(<App />);
    app.increase();
    app.increase();
    app.increase();

    cy.findByText("count is 3").should("exist");
  });
});

import React from "react";
import App from "./App";

/**
 * https://testing-library.com/docs/cypress-testing-library/intro/
 */

describe("<App />", () => {
  it("Puede gestionar el estado", () => {
    cy.mount(<App />);

    const button = cy.findByRole("button", { name: "count is 0" });
    button.click();
    button.click();
    button.click();

    cy.findByText("count is 3").should("exist");
  });
});

/**
 * https://docs.cypress.io/guides/tooling/visual-testing
 */

describe("Charts", () => {
  it("Librerias en State of JS", () => {
    cy.visit("https://2022.stateofjs.com/en-US/libraries/");

    cy.eyesOpen({
      appName: "Chart integration",
      testName: "Cambios en el tiempo de las distintas librerias",
    });

    cy.eyesCheckWindow({
      target: "region",
      selector: {
        type: "css",
        selector: ".ToolsArrowsChart",
      },
    });

    cy.eyesClose();
  });
});

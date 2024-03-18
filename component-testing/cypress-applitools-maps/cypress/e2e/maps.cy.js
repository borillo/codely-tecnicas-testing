it("Maps: Vuelos desde Valencia", () => {
  cy.visit("https://www.flightconnections.com/es", {
    onBeforeLoad(win) {
      win.localStorage.setItem(
        "id5id_privacy",
        '{"jurisdiction":"gdpr","id5_consent":true}'
      );
    },
  });

  cy.contains("Desde").click();
  cy.get("#from-input").type("Valencia");
  cy.contains("VLC - Valencia").click();

  cy.eyesOpen({
    appName: "Maps integration",
    testName: "Vuelos disponibles desde Valencia",
  });

  cy.eyesCheckWindow({
    target: "region",
    selector: {
      type: "css",
      selector: "#map-container",
    },
  });

  cy.eyesClose();
});

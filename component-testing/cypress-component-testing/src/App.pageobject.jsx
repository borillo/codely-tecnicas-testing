export function appPageObject(component) {
  cy.mount(component);

  const button = cy.findByRole("button", { name: "count is 0" });

  return {
    increase() {
      button.click();
    },
  };
}

/// <reference types="Cypress" />

describe("Test the server", () => {
  it("checks the server is running", () => {
    cy.visit("localhost:4000").contains("Hello");
  });
});

///<reference types="cypress"/>

describe("Comar Automation", () => {
  it("Automates the required actions", () => {
    cy.visit("https://www.comar.tn/");

    cy.contains("Actualités").click();
    // Actualité html

    cy.contains("Actualités").should("be.visible");
    cy.get("#edit-searchmeta").type("COMAR Assurances partenaire");
    cy.get("#edit-submit-actualites").click();

    cy.contains(
      "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba"
    ).should("be.visible");
  });
});

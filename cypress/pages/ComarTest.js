class ComarTest {
  navigate(url) {
    cy.visit(url);
  }

  clickActualites() {
    cy.contains("Actualités").click();
  }
  CheckText(resultText) {
    cy.contains(resultText).should("be.visible");
  }
  search(keyword) {
    cy.get("#edit-searchmeta").type(keyword);
    cy.get("#edit-submit-actualites").click();
  }
}
export default ComarTest;

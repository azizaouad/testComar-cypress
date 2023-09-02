///<reference types="cypress"/>
import ComarTest from "../../pages/ComarTest";

beforeEach(() => {
  const ln = new ComarTest();
  ln.navigate("https://www.comar.tn/");
  ln.clickActualites();
});

afterEach(() => {
  cy.end();
});

describe("Comar Automation", () => {
  it("check the word", () => {
    const ln = new ComarTest();

    const word = "Actualités";
    ln.CheckText(word);
  });

  // Actualité html

  it("check the text", () => {
    const ln = new ComarTest();
    ln.search("COMAR Assurances partenaire");

    const text = "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba";
    ln.CheckText(text);
  });
});

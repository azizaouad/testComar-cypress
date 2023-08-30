///<reference types="cypress"/>
import ComarTest from "../../pages/ComarTest";

describe("Comar Automation", () => {
  it("Automates the required actions", () => {
    const ln = new ComarTest();
    ln.navigate("https://www.comar.tn/");
    ln.clickActualites();

    const word = "Actualités";
    ln.CheckText(word);

    // Actualité html
    ln.search("COMAR Assurances partenaire");

    const text = "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba";
    ln.CheckText(text);
  });
});

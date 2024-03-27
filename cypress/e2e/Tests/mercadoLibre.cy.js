import { formularioPage } from "../../support/pages/mercadoLibre.Page";

describe("", () => {
  beforeEach("", () => {
    cy.visit("https://www.mercadolibre.com.ar/a/product/starlink-en-meli");
    cy.url().should('contain', "mercadolibre");
  });

  it("Enviamos formulario para obtener informacion", () => {
    cy.fixture("data/mercadoLibreData").then((user) => {
      formularioPage.typeInputName(user.data.userName);
      formularioPage.typeInputLastName(user.data.lastName);
      formularioPage.typeInputEmail(user.data.email);
      formularioPage.selectCheckLegal();
      formularioPage.clickBtnEnter();
      formularioPage.get
        .resultTitle()
        .should("have.text", "¡Recibimos tu solicitud!");
    });
  });
});

import { loginPage } from "../../support/pages/Login.Page";

describe("", () => {
  beforeEach("", () => {
    cy.visit("/");
    cy.url().should("contain", "micarrefour");
  });

  it("001 | TC01 | Validar ingreso del Login", () => {
    cy.fixture("data/Login").then((user) => {
      loginPage.get.iniciarSesion().should("contain.text", "INGRESAR");
      loginPage.bottonSesion();
      loginPage.typeInputUser(user.data.userEmail);
      loginPage.typeInputPassword(user.data.userPassword);
      loginPage.btnLogin();
      loginPage.get.titleName().should("have.text", "¡Hola ALEXANDER!");
    });
  });
});

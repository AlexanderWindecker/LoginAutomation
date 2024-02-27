class Login {
  get = {
    iniciarSesion: () => cy.get("div .button").eq(0),
    inputUser: () => cy.get('#login-form [for="email"]'),
    inputPassword: () => cy.get('#login-form [for="password"]'),
    bottonLogin: () => cy.get('button[type="submit"]').eq(0),
    titleName: () => cy.get("h1").eq(0),
  };

  bottonSesion() {
    this.get.iniciarSesion().click();
  }

  typeInputUser(email) {
    this.get.inputUser().type(email, { log: false, delay: 50 });
  }

  typeInputPassword(password) {
    this.get.inputPassword().type(password, { log: false, delay: 50 });
  }

  btnLogin() {
    this.get.bottonLogin().click();
  }
}

export const loginPage = new Login();

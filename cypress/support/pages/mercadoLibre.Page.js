class Formulario {
    get = {
        inputName: () => cy.get('input[name="Nombre_"]'),
        inputLastName: () => cy.get('input[name="Apellido"]'),
        inputEmail: () => cy.get('input[name=Tu_email_de_usuario_en_MELI]'),
        checkLegal: () => cy.get('input[type="checkbox"]'),
        resultTitle: () => cy.get('.result-title'),
        btnEnter: () => cy.get('[type="submit"]').eq(1),
    }
    
    typeInputName(userName) {
        this.get.inputName().type(userName)
    }

    typeInputLastName(lastName) {
        this.get.inputLastName().type(lastName);
    }
S
    typeInputEmail(email) {
        this.get.inputEmail().type(email)
    }

    selectCheckLegal() {
        this.get.checkLegal().check();
    }

    clickBtnEnter() {
        this.get.btnEnter().click();
    }

    checkresultTitle() {
        this.get.resultTitle()
    }
}

export const formularioPage = new Formulario();


describe("Chuck Norris API Testing", () => {
  
  it("Validar crear 5 chistes aleatorios de Chuck Norris" , () => {
    const creaChiste = new Set();

    for (let i = 0; i < 5; i++) {
      cy.api("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("value").that.is.a("string");

          const broma = response.body.value;

          expect(creaChiste.has(broma)).to.be.false;
          creaChiste.add(broma);

          cy.log(`Chiste ${i + 1}: ${broma}`);
          
        });
    }
  });
});

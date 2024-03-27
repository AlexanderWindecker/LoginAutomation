describe("Rick & Morti API Test", () => {
  beforeEach("", () => {});

  it("TC1 | Validar obtener los personajes. ", () => {
    cy.api("GET", "https://rickandmortyapi.com/api/character").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("results");
        expect(response.body.results).to.have.length.greaterThan(0);
      }
    );
  });

  it("TC2 | Validar obtener un personaje random", () => {
    const randomId = Cypress._.random(1, 183);

    cy.api(
      "GET",
      `https://rickandmortyapi.com/api/character/${randomId}`
    ).should((response) => {
      expect(response.status).to.eq(200);
      expect(`ID ${response.body.id}`).to.equal(`ID ${randomId}`);
    });
  });

  it("TC3 | Validar filtrar por el nombre Summer Smith", () => {
    const name = "Summer Smith";
    cy.api(
      "GET",
      `https://rickandmortyapi.com/api/character/?name=${name}`
    ).should((response) => {
      expect(response.status).to.eq(200, "La respuesta debería ser 200");
      expect(response.body).to.have.property("results");

      expect(response.body.results).to.have.length.greaterThan(
        0,
        "Debería haber al menos un personaje en los resultados"
      );

      const character = response.body.results[0];

      expect(character.name).to.equal(
        name,
        `El nombre del personaje debería ser ${name}`
      );

      expect(
        character.id,
        `El personaje con el nombre ${name} debería tener un ID`
      ).to.satisfy((id) => Cypress._.isNumber(id) && id > 0);
    });
  });

  it("TC4 | Validar filtrar por Status random", () => {
    const status = ["alive", "dead", "unknown"];
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    cy.api(
      "GET",
      `https://rickandmortyapi.com/api/character/?status=${randomStatus}`
    ).should((response) => {
      expect(response.status).to.equal(200, "La respuesta deberia dar un 200");
      expect(response.body).to.have.property("results");
    });
  });

  it("TC5 | Validar filtrar por varios parametros de manera Random ", () => {
    const filtersOptions = ["alive", "dead", "unknown"];
    const randomStatus =
      filtersOptions[Math.floor(Math.random() * filtersOptions.length)];

    const filtersGender = ["female", "male", "genderless", "unknown"];
    const randomGender =
      filtersGender[Math.floor(Math.random() * filtersGender.length)];

    const filterSpecies = [
      "humanoid",
      "alien",
      "animal",
      "robot",
      "cronenberg",
      "mythological creature",
      "unknown",
    ];
    const randomSpecies =
      filterSpecies[Math.floor(Math.random() * filterSpecies.length)];

    const filters = {
      status: randomStatus,
      gender: randomGender,
      species: randomSpecies,
    };
    const apiUrl =
      "https://rickandmortyapi.com/api/character/?" +
      Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    cy.api("GET", apiUrl).should((response) => {
      expect(response.status).to.eq(200, "La respuesta debería ser 200");
      expect(response.body).to.have.property("results");

      response.body.results.forEach((character) => {
        expect(character.status.toLowerCase()).to.equal(
          filters.status,
          `El personaje con nombre "${character.name}" debería tener estado ${filters.status}`
        );
        expect(character.gender.toLowerCase()).to.equal(
          filters.gender,
          `El personaje con nombre "${character.name}" debería tener género ${filters.gender}`
        );
        expect(character.species.toLowerCase()).to.equal(
          filters.species,
          `El personaje con nombre "${character.name}" debería tener especie ${filters.species}`
        );
      });
    });
  });
});

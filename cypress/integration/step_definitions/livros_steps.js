import { When, Then } from "cypress-cucumber-preprocessor/steps";
import Livros from "../../services/livros_service";

//GET ----------------------------------------------------------------------------------

When("Eu procuro por todos os livros", () => {
  Livros.get_livros().then((res) => {
    cy.log("RESPONSE: " + JSON.stringify(res.body));
    cy.wrap({ res }).as("response");
  });
});

Then(`Deve retornar a resposta {string} status {int}`, (schema, status) => {
  cy.get("@response").then((when) => {
    cy.validateSchema(when.res.body, `${schema}/${status}`);
    expect(when.res.status).to.eq(status);
  });
});

Then(`Deveria retornar todos os livros`, () => {
  cy.get("@response").then((when) => {
    expect(when.res.body).to.not.be.null;
  });
});

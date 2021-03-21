import "./commands";
import "jsonschema";

Cypress.on("uncaught:exception", () => false);

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: () => true,
});

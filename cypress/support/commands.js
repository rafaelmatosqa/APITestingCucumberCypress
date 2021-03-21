import { validate } from 'jsonschema'

Cypress.Commands.add('validateSchema', (res, schema) => {
  cy.fixture(`schemas/${schema}`).as('dataLoader').then(schema => {
    const validation = validate(res, schema, {required: true, nestedErrors: true})
    let errors = ''
    if (!validation.valid) {
      errors += validation.errors.map(err => {
        return '\n' + err.message
      })
      throw new Error('schema validate error: ' + errors)
    }
  })
})

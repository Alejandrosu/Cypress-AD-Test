// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const dateTimeNow = new Date().toLocaleString().replace(/[\/\-,:]/g, '_')
const email = dateTimeNow + '@email.com'

const definiteE = email

Cypress.Commands.add('emailRegister', () => {

  cy.get('[data-qa="signup-email"]')
    .type(definiteE)

})

Cypress.Commands.add('emailLogin', () => {

cy.get('[data-qa="login-email"]')
.type(definiteE)

})

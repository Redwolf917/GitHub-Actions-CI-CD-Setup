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
// Add custom Cypress commands
import '@cypress/react18';  // Import for React 18 component testing

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof import('@cypress/react18').mount;
      login(email: string, password: string): Chainable<Element>;
      drag(subject: JQuery, options: any): Chainable<Element>;
      dismiss(subject: JQuery, options: any): Chainable<Element>;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject: JQuery, options: any) => {
    cy.wrap(subject).trigger('dragstart', options);
  });
  
  Cypress.Commands.add('dismiss', { prevSubject: false }, (subject: JQuery, options: any) => {
    cy.wrap(subject).click(options);
  });
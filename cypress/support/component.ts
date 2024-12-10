// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// No need to import Cypress, it's globally available

// Example of adding a custom command for login
Cypress.Commands.add('login', (email: string, password: string) => {
    cy.visit('/login');  // Navigate to login page
    cy.get('input[name="email"]').type(email); // Enter email
    cy.get('input[name="password"]').type(password); // Enter password
    cy.get('button[type="submit"]').click(); // Submit the form
  });
  
  // Example of adding a custom command for dragging
  Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject: JQuery, options: any) => {
    cy.wrap(subject).trigger('dragstart', options);  // Trigger drag event
  });
  
  // Example of adding a custom command for dismissing an element
  Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject: JQuery, options: any) => {
    cy.wrap(subject).click(options);  // Click on the element
  });
  
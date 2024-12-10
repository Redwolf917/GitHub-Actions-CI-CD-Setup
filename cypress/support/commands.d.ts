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
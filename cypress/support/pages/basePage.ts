/**
 * BasePage class for common page actions
 */
export default class BasePage {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    navigateToPage() {
        cy.visit(this.url);
    }

    getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector);
    }

}
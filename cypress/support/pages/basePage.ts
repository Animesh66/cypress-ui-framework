/**
 * BasePage class for common page actions
 */
export default class BasePage {
    url: string;

    constructor(url: string) {
        this.url = url;
    }
    /**
     * Navigates to the page
     */
    navigateToPage() {
        cy.visit(this.url);
    }
    /**
     * Gets an element by selector
     * @param selector - The selector to use to find the element
     */
    getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.isVisible(selector);
        return cy.get(selector);
    }

}
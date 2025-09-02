/// <reference types="cypress" />

/**
 * BasePage class for common page actions
 */
export default class BasePage {
    /**
     * Navigates to the page
     */
    navigateToHomePage() {
        cy.visit("/");
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
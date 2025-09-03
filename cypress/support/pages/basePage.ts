/// <reference types="cypress" />

/**
 * BasePage class for common page actions
 */
export default class BasePage {
    /**
     * Navigates to the page
     */
    static navigateToHomePage() {
        cy.visit("/");
    }
    /**
     * Gets an element by selector
     * @param selector - The selector to use to find the element
     */
    static getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.isVisible(selector);
        return cy.get(selector);
    }

}
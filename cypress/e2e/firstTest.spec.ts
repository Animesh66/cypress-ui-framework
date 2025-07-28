/// <reference types="cypress" />

describe('This is my first test', () => {
    it('Login test', () => {
        // Navigate to base url
        cy.visit('/');
        // Go to search product searchbox and type product name
        cy.get('.search-box-text ui-autocomplete-input').type('Laptop');
        // Click on search button
        cy.get('.button-1 search-box-button').click();
    })
})
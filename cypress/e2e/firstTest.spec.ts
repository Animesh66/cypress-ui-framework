/// <reference types="cypress" />

describe('This is my first test', () => {
    it('Login test', () => {
        // Navigate to base url
        cy.visit('/');
        // Go to search product searchbox and type product name
        cy.get('[class="search-box-text ui-autocomplete-input"]').type('Laptop');
        // Click on search button
        cy.get('[value="Search"]').click();
        // Verify that the search results page is displayed
        cy.get('h1').should('have.text', 'Search');
    })
})
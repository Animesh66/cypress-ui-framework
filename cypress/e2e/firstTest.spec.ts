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
        // Verify that the product is displayed
        cy.get('[class="price actual-price"]').should('have.text', '1590.00');
        cy.get('[alt="Picture of 14.1-inch Laptop"]').click();
        cy.get('[class="product-name"]').should('contains.text', '14.1-inch Laptop');
        cy.get('[id="add-to-cart-button-31"]').click();
        cy.get('[class="content"]').should('have.text', 'The product has been added to your shopping cart');
        cy.get('[href="/cart"]').click();
    })
})
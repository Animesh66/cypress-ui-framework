export default class TopNavigation {
    private static readonly registerLink = '[class="ico-register"]';
    private static readonly loginLink = '[class="ico-login"]';
    private static readonly cart = '[class="ico-cart"]';
    private static readonly wishList = '[class="ico-wishlist"]';
    private static readonly searchBox = '[id="small-searchterms"]';
    private static readonly searchButton = '[class="button-1 search-box-button"]';

    static clickOnRegisterNavigation() {
        cy.get(TopNavigation.registerLink).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.registerLink).click();
        cy.url().should('include', 'register');
    }

    static clickOnLoginNavigation() {
        cy.get(TopNavigation.loginLink).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.loginLink).click();
        cy.url().should('include', 'login');
    }

    static clickOnCart() {
        cy.get(TopNavigation.cart).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.cart).click();
        cy.url().should('include', 'cart');
    }

    static clickOnWishList() {
        cy.get(TopNavigation.wishList).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.wishList).click();
        cy.url().should('include', 'wishlist');
    }

    static clickOnSearchBox() {
        cy.get(TopNavigation.searchBox).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.searchBox).click();
        cy.url().should('include', 'search');
    }

    static clickOnSearchButton() {
        cy.get(TopNavigation.searchButton).should('be.visible').and('not.be.disabled');
        cy.get(TopNavigation.searchButton).click();
        cy.url().should('include', 'search');
    }
}

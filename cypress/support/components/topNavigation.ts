/// <reference types="cypress" />
/**
 * TopNavigation class for top navigation actions
 */
export default class TopNavigation {

    private static readonly webshopLogo = '[alt="Tricentis Demo Web Shop"]';
    private static readonly registerLink = '[class="ico-register"]';
    private static readonly loginLink = '[class="ico-login"]';
    private static readonly cart = '[class="ico-cart"]';
    private static readonly wishList = '[class="ico-wishlist"]';
    private static readonly searchBox = '[id="small-searchterms"]';
    private static readonly searchButton = '[class="button-1 search-box-button"]';
    /**
     * Click on Webshop logo
     */
    static clickOnWebshopLogo() {
        cy.isVisible(this.webshopLogo);
        cy.get(this.webshopLogo)
        cy.get(this.webshopLogo).click();
    }
    /**
     * Click on Register navigation
     */
    static clickOnRegisterNavigation() {
        cy.isVisible(this.registerLink);
        cy.get(this.registerLink).click();
        cy.url().should('include', 'register');
    }

    /**
     * Click on Login navigation
     */
    static clickOnLoginNavigation() {
        cy.isVisible(this.loginLink);
        cy.get(this.loginLink).click();
        cy.url().should('include', 'login');
    }

    /**
     * Click on Cart
     */
    static clickOnCart() {
        cy.isVisible(this.cart);
        cy.get(this.cart).click();
        cy.url().should('include', 'cart');
    }

    /**
     * Click on Wish List
     */
    static clickOnWishList() {
        cy.isVisible(this.wishList);
        cy.get(this.wishList).click();
        cy.url().should('include', 'wishlist');
    }

    /**
     * Click on Search Box
     */
    static clickOnSearchBox() {
        cy.isVisible(this.searchBox);
        cy.get(this.searchBox).click();
    }

    /**
     * Click on Search Button
     */
    static clickOnSearchButton() {
        cy.isVisible(this.searchButton);
        cy.get(this.searchButton).click();
    }
}

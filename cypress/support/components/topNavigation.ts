export default class TopNavigation {

    private static readonly webshopLogo = '[alt="Tricentis Demo Web Shop"]';
    private static readonly registerLink = '[class="ico-register"]';
    private static readonly loginLink = '[class="ico-login"]';
    private static readonly cart = '[class="ico-cart"]';
    private static readonly wishList = '[class="ico-wishlist"]';
    private static readonly searchBox = '[id="small-searchterms"]';
    private static readonly searchButton = '[class="button-1 search-box-button"]';

    static clickOnWebshopLogo() {
        cy.isVisible(TopNavigation.webshopLogo);
        cy.get(TopNavigation.webshopLogo)
        cy.get(TopNavigation.webshopLogo).click();
    }
    static clickOnRegisterNavigation() {
        cy.isVisible(TopNavigation.registerLink);
        cy.get(TopNavigation.registerLink).click();
        cy.url().should('include', 'register');
    }

    static clickOnLoginNavigation() {
        cy.isVisible(TopNavigation.loginLink);
        cy.get(TopNavigation.loginLink).click();
        cy.url().should('include', 'login');
    }

    static clickOnCart() {
        cy.isVisible(TopNavigation.cart);
        cy.get(TopNavigation.cart).click();
        cy.url().should('include', 'cart');
    }

    static clickOnWishList() {
        cy.isVisible(TopNavigation.wishList);
        cy.get(TopNavigation.wishList).click();
        cy.url().should('include', 'wishlist');
    }

    static clickOnSearchBox() {
        cy.isVisible(TopNavigation.searchBox);
        cy.get(TopNavigation.searchBox).click();
    }

    static clickOnSearchButton() {
        cy.isVisible(TopNavigation.searchButton);
        cy.get(TopNavigation.searchButton).click();
    }
}

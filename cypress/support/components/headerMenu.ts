/**
 * HeaderMenu class for header menu actions
 */
export default class HeaderMenu {

    private static readonly headerMenu = '[class="top-menu"]';
    
    /**
     * Click on Books
     */
    static clickOnBooks() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Books").click();
        cy.url().should('include', 'books');
    }
    /**
     * Hover on Computers
     */
    static hoverOnComputers() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Computers").trigger('mouseover');
    }
    /**
     * Click on Desktops
     */
    static clickOnDesktops() {
        HeaderMenu.hoverOnComputers();
        cy.get(HeaderMenu.headerMenu).contains("Desktops").click();
        cy.url().should('include', 'desktops');
    }      
    /**
     * Click on Accessories
     */
    static clickOnAccessories() {
        HeaderMenu.hoverOnComputers();
        cy.get(HeaderMenu.headerMenu).contains("Accessories").click();
        cy.url().should('include', 'accessories');
    }
    /**
     * Click on Notebooks
     */
    static clickOnNotebooks() {
        HeaderMenu.hoverOnComputers();
        cy.get(HeaderMenu.headerMenu).contains("Notebooks").click();
        cy.url().should('include', 'notebooks');
    }
    /**
     * Hover on Electronics
     */
    static hoverOnElectronics() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Electronics").trigger('mouseover');
    }
    /**
     * Click on Camera & photo
     */
    static clickOnCameraPhotos() {
        HeaderMenu.hoverOnElectronics();
        cy.get(HeaderMenu.headerMenu).contains("Camera & photo").click();
        cy.url().should('include', 'camera-photos');
    }
    /**
     * Click on Cell Phones
     */
    static clickOnCellPhones() {
        HeaderMenu.hoverOnElectronics();
        cy.get(HeaderMenu.headerMenu).contains("Cell Phones").click();
        cy.url().should('include', 'cell-phones');
    }
    /**
     * Click on Apparel
     */
    static clickOnApparel() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Apparel & Shoes").click();
        cy.url().should('include', 'apparel-shoes');
    }
    /**
     * Click on Digital downloads
     */
    static clickOnDigitalDownloads() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Digital downloads").click();
        cy.url().should('include', 'digital-downloads');
    }
    /**
     * Click on Jewelry
     */
    static clickOnJewelry() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Jewelry").click();
        cy.url().should('include', 'jewelry');
    }
    /**
     * Click on Gift Cards
     */
    static clickOnGiftCards() {
        cy.isVisible(HeaderMenu.headerMenu);
        cy.get(HeaderMenu.headerMenu).contains("Gift Cards").click();
        cy.url().should('include', 'gift-cards');
    }
}
/// <reference types="cypress" />

/**
 * HeaderMenu class for header menu actions
 */
export default class HeaderMenu {

    private static readonly headerMenu = '[class="top-menu"]';
    
    /**
     * Click on Books
     */
    static clickOnBooks() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Books").click();
        cy.url().should('include', 'books');
    }
    /**
     * Hover on Computers
     */
    static hoverOnComputers() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Computers").trigger('mouseover');
    }
    /**
     * Click on Desktops
     */
    static clickOnDesktops() {
        this.hoverOnComputers();
        cy.get(this.headerMenu).contains("Desktops").click();
        cy.url().should('include', 'desktops');
    }      
    /**
     * Click on Accessories
     */
    static clickOnAccessories() {
        this.hoverOnComputers();
        cy.get(this.headerMenu).contains("Accessories").click();
        cy.url().should('include', 'accessories');
    }
    /**
     * Click on Notebooks
     */
    static clickOnNotebooks() {
        this.hoverOnComputers();
        cy.get(this.headerMenu).contains("Notebooks").click();
        cy.url().should('include', 'notebooks');
    }
    /**
     * Hover on Electronics
     */
    static hoverOnElectronics() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Electronics").trigger('mouseover');
    }
    /**
     * Click on Camera & photo
     */
    static clickOnCameraPhotos() {
        this.hoverOnElectronics();
        cy.get(this.headerMenu).contains("Camera & photo").click();
        cy.url().should('include', 'camera-photos');
    }
    /**
     * Click on Cell Phones
     */
    static clickOnCellPhones() {
        this.hoverOnElectronics();
        cy.get(this.headerMenu).contains("Cell Phones").click();
        cy.url().should('include', 'cell-phones');
    }
    /**
     * Click on Apparel
     */
    static clickOnApparel() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Apparel & Shoes").click();
        cy.url().should('include', 'apparel-shoes');
    }
    /**
     * Click on Digital downloads
     */
    static clickOnDigitalDownloads() {
        this.hoverOnElectronics();
        cy.get(this.headerMenu).contains("Digital downloads").click();
        cy.url().should('include', 'digital-downloads');
    }
    /**
     * Click on Jewelry
     */
    static clickOnJewelry() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Jewelry").click();
        cy.url().should('include', 'jewelry');
    }
    /**
     * Click on Gift Cards
     */
    static clickOnGiftCards() {
        cy.isVisible(this.headerMenu);
        cy.get(this.headerMenu).contains("Gift Cards").click();
        cy.url().should('include', 'gift-cards');
    }
}
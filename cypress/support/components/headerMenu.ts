/**
 * HeaderMenu class for header menu actions
 */
export default class HeaderMenu {
    private static readonly books = '[class="Books"]';
    private static readonly computers = '[class="Computers"]';
    private static readonly notebooks = '[class="Notebooks"]';
    private static readonly desktops = '[class="Desktops"]';
    private static readonly accessories = '[class="Accessories"]';
    private static readonly cameraPhoto = '[class="Camera, photo"]';
    private static readonly cellPhones = '[class="Cell phones"]';
    private static readonly electronics = '[class="Electronics"]';
    private static readonly apparel = '[class="Apparel & Shoes"]';
    private static readonly digitalDownloads = '[class="Digital downloads"]';
    private static readonly jewelry = '[class="Jewelry"]';
    private static readonly giftCards = '[class="Gift Cards"]'; 
    
    /**
     * Click on Books
     */
    static clickOnBooks() {
        cy.get(this.books).should('be.visible').and('not.be.disabled');
        cy.get(this.books).click();
        cy.url().should('include', 'books');
    }
    /**
     * Hover on Computers
     */
    static hoverOnComputers() {
        cy.get(this.computers).should('be.visible').and('not.be.disabled');
        cy.get(this.computers).trigger('mouseover');
        cy.get(this.desktops).should('be.visible').and('not.be.disabled');
        cy.get(this.accessories).should('be.visible').and('not.be.disabled');
        cy.get(this.notebooks).should('be.visible').and('not.be.disabled');
    }
    /**
     * Click on Desktops
     */
    static clickOnDesktops() {
        HeaderMenu.hoverOnComputers();
        cy.get(this.desktops).should('be.visible').and('not.be.disabled');
        cy.get(this.desktops).click();
        cy.url().should('include', 'desktops');
    }      
    /**
     * Click on Accessories
     */
    static clickOnAccessories() {
        HeaderMenu.hoverOnComputers();
        cy.get(this.accessories).should('be.visible').and('not.be.disabled');
        cy.get(this.accessories).click();
        cy.url().should('include', 'accessories');
    }
    /**
     * Click on Notebooks
     */
    static clickOnNotebooks() {
        HeaderMenu.hoverOnComputers();
        cy.get(this.notebooks).should('be.visible').and('not.be.disabled');
        cy.get(this.notebooks).click();
        cy.url().should('include', 'notebooks');
    }
    /**
     * Hover on Electronics
     */
    static hoverOnElectronics() {
        cy.get(this.electronics).should('be.visible').and('not.be.disabled');
        cy.get(this.electronics).trigger('mouseover');
        cy.get(this.cameraPhoto).should('be.visible').and('not.be.disabled');
        cy.get(this.cellPhones).should('be.visible').and('not.be.disabled');
    }
    /**
     * Click on Electronics
     */
    static clickOnElectronics() {
        HeaderMenu.hoverOnElectronics();
        cy.get(this.electronics).should('be.visible').and('not.be.disabled');
        cy.get(this.electronics).click();
        cy.url().should('include', 'electronics');
    }
    /**
     * Click on Apparel
     */
    static clickOnApparel() {
        cy.get(this.apparel).should('be.visible').and('not.be.disabled');
        cy.get(this.apparel).click();
        cy.url().should('include', 'apparel');
    }
    /**
     * Click on Digital Downloads
     */
    static clickOnDigitalDownloads() {
        cy.get(this.digitalDownloads).should('be.visible').and('not.be.disabled');
        cy.get(this.digitalDownloads).click();
        cy.url().should('include', 'digital-downloads');
    }
    /**
     * Click on Jewelry
     */
    static clickOnJewelry() {
        cy.get(this.jewelry).should('be.visible').and('not.be.disabled');
        cy.get(this.jewelry).click();
        cy.url().should('include', 'jewelry');
    }
    /**
     * Click on Gift Cards
     */
    static clickOnGiftCards() {
        cy.get(this.giftCards).should('be.visible').and('not.be.disabled');
        cy.get(this.giftCards).click();
        cy.url().should('include', 'gift-cards');
    }
}
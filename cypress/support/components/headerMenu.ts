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
        cy.isVisible(this.books);
        cy.get(this.books).click();
        cy.url().should('include', 'books');
    }
    /**
     * Hover on Computers
     */
    static hoverOnComputers() {
        cy.isVisible(this.computers);
        cy.get(this.computers).trigger('mouseover');
        cy.isVisible(this.desktops);
        cy.isVisible(this.accessories);
        cy.isVisible(this.notebooks);
    }
    /**
     * Click on Desktops
     */
    static clickOnDesktops() {
        HeaderMenu.hoverOnComputers();
        cy.isVisible(this.desktops);
        cy.get(this.desktops).click();
        cy.url().should('include', 'desktops');
    }      
    /**
     * Click on Accessories
     */
    static clickOnAccessories() {
        HeaderMenu.hoverOnComputers();
        cy.isVisible(this.accessories);
        cy.get(this.accessories).click();
        cy.url().should('include', 'accessories');
    }
    /**
     * Click on Notebooks
     */
    static clickOnNotebooks() {
        HeaderMenu.hoverOnComputers();
        cy.isVisible(this.notebooks);
        cy.get(this.notebooks).click();
        cy.url().should('include', 'notebooks');
    }
    /**
     * Hover on Electronics
     */
    static hoverOnElectronics() {
        cy.isVisible(this.electronics);
        cy.get(this.electronics).trigger('mouseover');
        cy.isVisible(this.cameraPhoto);
        cy.isVisible(this.cellPhones);
    }
    /**
     * Click on Electronics
     */
    static clickOnElectronics() {
        HeaderMenu.hoverOnElectronics();
        cy.isVisible(this.electronics);
        cy.get(this.electronics).click();
        cy.url().should('include', 'electronics');
    }
    /**
     * Click on Apparel
     */
    static clickOnApparel() {
        cy.isVisible(this.apparel);
        cy.get(this.apparel).click();
        cy.url().should('include', 'apparel');
    }
    /**
     * Click on Digital Downloads
     */
    static clickOnDigitalDownloads() {
        cy.isVisible(this.digitalDownloads);
        cy.get(this.digitalDownloads).click();
        cy.url().should('include', 'digital-downloads');
    }
    /**
     * Click on Jewelry
     */
    static clickOnJewelry() {
        cy.isVisible(this.jewelry);
        cy.get(this.jewelry).click();
        cy.url().should('include', 'jewelry');
    }
    /**
     * Click on Gift Cards
     */
    static clickOnGiftCards() {
        cy.isVisible(this.giftCards);
        cy.get(this.giftCards).click();
        cy.url().should('include', 'gift-cards');
    }
}
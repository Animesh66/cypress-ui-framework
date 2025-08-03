import BasePage from "./basePage";

export default class RegistrationPage extends BasePage {
    registerLink = '[class="ico-register"]';
    
    constructor() {
        super('/');
    }

    clickOnRegisterNavigation(){
        this.getElement(this.registerLink).should('be.visible').and('not.be.disabled');
        this.getElement(this.registerLink).click();
        cy.url().should('include', 'register');
    }

}
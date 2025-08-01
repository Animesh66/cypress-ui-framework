import BasePage from "./basePage";

export default class NavigationMenu extends BasePage {
    registerLink = cy.get('[class="ico-register"]');
    

    clickOnRegisterNavigation(){
        // Ensure the register link is visible and clickable
        this.registerLink.should('be.visible').and('not.be.disabled');
        this.registerLink.click();
        // Verify we've navigated to the registration page
        cy.url().should('include', '/register');
    }

}
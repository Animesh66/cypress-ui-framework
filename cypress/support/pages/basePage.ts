export default class BasePage {

    navigateToUrl(url?: string) {
        if (url != null)
            cy.visit(url);
        else
            cy.visit('/');
        return this;
    }
}
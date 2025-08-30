/// <reference types="cypress" />

export class Validation {
    
    static validateResponse(response: Cypress.Chainable<Cypress.Response<any>>) {
        expect(response).to.have.property('status').to.equal(200);
    }

    static validateTextContain(response: Cypress.Chainable<Cypress.Response<any>>, text: string) {
        expect(response).to.have.property('body').to.contain(text);
    }
}

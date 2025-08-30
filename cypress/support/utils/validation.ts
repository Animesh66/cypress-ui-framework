/// <reference types="cypress" />
/**
 * Validation class for validating API responses
 */
export class Validation {
    /**
     * Validates the response status code
     * @param response - The response object
     */
    static validateResponse(response: Cypress.Chainable<Cypress.Response<any>>) {
        expect(response).to.have.property('status').to.equal(200);
    }

    /**
     * Validates the response body contains the expected text
     * @param response - The response object
     * @param text - The expected text to be present in the response body
     */
    static validateTextContain(response: Cypress.Chainable<Cypress.Response<any>>, text: string) {
        expect(response).to.have.property('body').to.contain(text);
    }
}

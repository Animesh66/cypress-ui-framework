/// <reference types="cypress" />
import { HttpMethods } from "./emuns";
/**
 * Utils class for utility functions
 */
export default class Utils {
    /**
     * Sends a request to the specified endpoint
     * @param endpoint - The endpoint to send the request to
     * @param method - The HTTP method to use
     * @param body - The request body (optional)
     * @param headers - The request headers (optional)
     * @param authorization - The authorization object (optional)
     */
    static sendRequest(endpoint: string, method: HttpMethods, body?: object, headers?: object, authorization?: object) {
        return cy.request({
            method,
            url: endpoint,
            body,
            headers,
            auth: authorization,
            failOnStatusCode: false
        })
    }
    
}

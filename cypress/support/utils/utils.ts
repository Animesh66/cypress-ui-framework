/// <reference types="cypress" />
import { HttpMethods } from "./emuns";

export default class Utils {

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

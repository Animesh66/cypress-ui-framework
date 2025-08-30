/// <reference types="cypress" />

// ***********************************************
// Custom Commands Implementation
// ***********************************************

Cypress.Commands.add('isVisible', (selector: string) => {
    cy.get(selector).should('be.visible');
})

Cypress.Commands.add('isHidden', (selector: string) => {
    cy.get(selector).should('not.be.visible');
})

Cypress.Commands.add('isDisabled', (selector: string) => {
    cy.get(selector).should('be.disabled');
})

Cypress.Commands.add('isNotDisabled', (selector: string) => {
    cy.get(selector).should('not.be.disabled');
})

Cypress.Commands.add('isEnabled', (selector: string) => {
    cy.get(selector).should('be.enabled');
})

Cypress.Commands.add('isNotEmpty', (selector: string) => {
    cy.get(selector).should('not.be.empty');
})

Cypress.Commands.add('isEmpty', (selector: string) => {
    cy.get(selector).should('be.empty');
})

Cypress.Commands.add('isNotSelected', (selector: string) => {
    cy.get(selector).should('not.be.selected');
})

Cypress.Commands.add('isSelected', (selector: string) => {
    cy.get(selector).should('be.selected');
})

Cypress.Commands.add('isNotChecked', (selector: string) => {
    cy.get(selector).should('not.be.checked');
})

Cypress.Commands.add('isChecked', (selector: string) => {
    cy.get(selector).should('be.checked');
})  
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    isVisible(selector: string): Chainable<JQuery<HTMLElement>>;
    isHidden(selector: string): Chainable<JQuery<HTMLElement>>;
    isDisabled(selector: string): Chainable<JQuery<HTMLElement>>;
    isNotDisabled(selector: string): Chainable<JQuery<HTMLElement>>;
    isEnabled(selector: string): Chainable<JQuery<HTMLElement>>;
    isNotEmpty(selector: string): Chainable<JQuery<HTMLElement>>;
    isEmpty(selector: string): Chainable<JQuery<HTMLElement>>;
    isNotSelected(selector: string): Chainable<JQuery<HTMLElement>>;
    isSelected(selector: string): Chainable<JQuery<HTMLElement>>;
    isNotChecked(selector: string): Chainable<JQuery<HTMLElement>>;
    isChecked(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}

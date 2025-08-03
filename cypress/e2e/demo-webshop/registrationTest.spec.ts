/// <reference types="cypress" />

import RegistrationPage from "../../support/pages/registrationPage";

describe('This is my first test', () => {
    const regPage = new RegistrationPage();
    beforeEach(() => {
        regPage.navigateToPage();
    })
    it('Click on register link', () => {
        regPage.clickOnRegisterNavigation(); 
    })
})
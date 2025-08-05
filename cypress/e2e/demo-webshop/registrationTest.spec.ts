/// <reference types="cypress" />

import RegistrationPage from "../../support/pages/registrationPage";

describe('Test conatining user registration flow', () => {
    const regPage = new RegistrationPage();
    beforeEach(() => {
        regPage.navigateToPage();
    })
    it('User registration flow happy path scenario works as expected', () => {
        regPage.clickOnRegisterNavigation(); 
        regPage.registerUser('male', 'Test', 'User', 'testuse56512@email.com', 'Test@123');
    })
})
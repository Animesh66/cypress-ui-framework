/// <reference types="cypress" />

import Data from "../../../testData/data";
import RegistrationPage from "../../support/pages/registrationPage";

describe('Test conatining user registration flow', () => {
    const regPage = new RegistrationPage();
    beforeEach(() => {
        regPage.navigateToPage();
    })
    it('User registration flow happy path scenario works as expected', () => {
        regPage.clickOnRegisterNavigation(); 
        regPage.registerUser(Data.Gender("female"), Data.FirstName, Data.LastName, Data.Email, Data.Password);
    })
})
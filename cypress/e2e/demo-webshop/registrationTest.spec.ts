/// <reference types="cypress" />

import Data from "../../../testData/data";
import RegistrationPage from "../../support/pages/registrationPage";
import TopNavigation from "../../support/components/topNavigation";

describe('Test conatining user registration flow', () => {
    const regPage = new RegistrationPage();
    beforeEach(() => {
        regPage.navigateToPage();
    })
    it('User registration flow happy path scenario works as expected', () => {
        TopNavigation.clickOnRegisterNavigation();
        const email = Data.Email;
        regPage.registerUser(Data.Gender("female"), Data.FirstName, Data.LastName, email, Data.Password);
        regPage.verifyMyAccountPage(email);
    })
})
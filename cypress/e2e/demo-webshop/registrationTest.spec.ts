/// <reference types="cypress" />

import Data from "../../../testData/data";
import RegistrationPage from "../../support/pages/registrationPage";
import TopNavigation from "../../support/components/topNavigation";
import MyAccountPage from "../../support/pages/myAccountPage";
import { Logger } from "../../support/utils/logger";

describe.skip('Test conatining user registration flow', () => {
    const regPage = new RegistrationPage();
    const myAccount = new MyAccountPage();

    beforeEach(() => {
        Logger.info('Navigating to home page');
        regPage.navigateToHomePage();
        Logger.info('Successfully navigated to home page')
    })
    it('User registration flow happy path scenario works as expected', () => {
        Logger.info('Navigating to registration page');
        TopNavigation.clickOnRegisterNavigation();
        Logger.info('Succesfully navigated to registration page');
        const email = Data.Email;
        Logger.info('Registering user with email ' + email);
        regPage.registerUser(Data.Gender("female"), Data.FirstName, Data.LastName, email, Data.Password);
        Logger.info('Succesfully registered user with email ' + email);
        Logger.info('Verifying my account page');
        myAccount.verifyMyAccountPage(email);
        Logger.info('Succesfully verified my account page');
    })
})
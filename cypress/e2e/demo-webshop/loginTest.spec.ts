/// <reference types="cypress" />

import { LoginPage } from "../../support/pages/loginPage";
import TopNavigation from "../../support/components/topNavigation";
import HeaderMenu from "../../support/components/headerMenu";
import MyAccountPage from "../../support/pages/myAccountPage";
import { data } from "cypress/types/jquery";
import { Logger } from "../../support/utils/logger";

describe.skip('Test conatining user login flow', () => {
    const loginPage = new LoginPage();
    const myAccount = new MyAccountPage();
    beforeEach(() => {
        Logger.info('Navigating to home page');
        loginPage.navigateToHomePage();
        Logger.info('Successfully navigated to home page')
        Logger.info('Navigating to login page');
        TopNavigation.clickOnLoginNavigation();
        Logger.info('Succesfully navigated to login page');
    })
    it.only('User login flow happy path scenario works as expected', () => {
        cy.fixture('login.json').then((data) => {
            Logger.info('Logging in with valid credentials');
            loginPage.login(data.email, data.password);
            Logger.info('Succesfully logged in with valid credentials');
            myAccount.verifyMyAccountPage(data.email);
        });
        Logger.info('Clicking on accessories');
        HeaderMenu.clickOnAccessories();
        Logger.info('Succesfully clicked on accessories');
    })
})
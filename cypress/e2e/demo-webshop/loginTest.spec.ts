/// <reference types="cypress" />

import { LoginPage } from "../../support/pages/loginPage";
import TopNavigation from "../../support/components/topNavigation";
import HeaderMenu from "../../support/components/headerMenu";
import MyAccountPage from "../../support/pages/myAccountPage";
import { data } from "cypress/types/jquery";

describe('Test conatining user login flow', () => {
    const loginPage = new LoginPage();
    const myAccount = new MyAccountPage();
    beforeEach(() => {
        loginPage.navigateToPage();
    })
    it.only('User login flow happy path scenario works as expected', () => {
        TopNavigation.clickOnLoginNavigation();
        cy.fixture('login.json').then((data) => {
            loginPage.login(data.email, data.password);
            myAccount.verifyMyAccountPage(data.email);
        });
        HeaderMenu.clickOnAccessories();
    })
})
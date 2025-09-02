/// <reference types="cypress" />

import { LoginPage } from "../../support/pages/loginPage";
import TopNavigation from "../../support/components/topNavigation";

describe('Test conatining user login flow', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.navigateToPage();
    })
    it('User login flow happy path scenario works as expected', () => {
        TopNavigation.clickOnLoginNavigation();
        cy.fixture('login.json').then((data) => {
            loginPage.login(data.email, data.password);
        })
    })
})
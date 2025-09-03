import BasePage from "./basePage";

export default class MyAccountPage extends BasePage {
    private static readonly myAccountLink = '[class="account"]';

    /**
     * Verify my account page
     * @param email - The email to use for verification
     */
    static verifyMyAccountPage(email: string){
        this.getElement(this.myAccountLink).should('contain', `${email}`);
    }
}
import BasePage from "./basePage";

export default class MyAccountPage extends BasePage {
    myAccountLink = '[class="account"]';

    verifyMyAccountPage(email: string){
        this.getElement(this.myAccountLink).should('contain', `${email}`);
    }
}
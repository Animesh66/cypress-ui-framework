import BasePage from "./basePage";

export default class MyAccountPage extends BasePage {
    myAccountLink = '[class="account"]';
    constructor() {
        super('/');
    }

    verifyMyAccountPage(email: string){
        this.getElement(this.myAccountLink).should('contain', `${email}`);
    }
}
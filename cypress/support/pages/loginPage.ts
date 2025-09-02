/**
 * LoginPage class for login page actions
 */
import BasePage from "./basePage";

export class LoginPage extends BasePage {
    email = '[id="Email"]';
    password = '[id="Password"]';
    loginButton = '[class="button-1 login-button"]';
    /**
     * Login with given email and password
     * @param email - The email to use for login
     * @param password - The password to use for login
     */
    login(email: string, password: string) {
        this.getElement(this.email).type(email);
        this.getElement(this.password).type(password);
        this.getElement(this.loginButton).click();
    }
}
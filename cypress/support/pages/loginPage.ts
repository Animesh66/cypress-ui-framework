/**
 * LoginPage class for login page actions
 */
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    private static readonly email = '[id="Email"]';
    private static readonly password = '[id="Password"]';
    private static readonly loginButton = '[class="button-1 login-button"]';
    
    /**
     * Login with given email and password
     * @param email - The email to use for login
     * @param password - The password to use for login
     */
    static login(email: string, password: string) {
        this.getElement(this.email).type(email);
        this.getElement(this.password).type(password);
        this.getElement(this.loginButton).click();
    }
}
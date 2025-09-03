import BasePage from "./basePage";
    
export default class RegistrationPage extends BasePage {
    private static readonly maleRadio = '[id="gender-male"]';
    private static readonly femaleRadio = '[id="gender-female"]';
    private static readonly firstName = '[id="FirstName"]';
    private static readonly lastName = '[id="LastName"]';
    private static readonly email = '[id="Email"]';
    private static readonly password = '[id="Password"]';
    private static readonly confirmPassword = '[id="ConfirmPassword"]';
    private static readonly registerButton = '[id="register-button"]';
    private static readonly successMessage = '[class="result"]';
    private static readonly continueButton = '[class="button-1 register-continue-button"]';
    
    /**
     * Register user with given gender, first name, last name, email and password
     * @param gender - The gender to use for registration
     * @param firstName - The first name to use for registration
     * @param lastName - The last name to use for registration
     * @param email - The email to use for registration
     * @param password - The password to use for registration
     */
    static registerUser(gender: 'male' | 'female', firstName: string, lastName: string, email: string, password: string){
        if(gender === 'male')
            this.getElement(this.maleRadio).should('not.be.checked').and('not.be.disabled').check();
        else if(gender === 'female')
            this.getElement(this.femaleRadio).should('not.be.checked').and('not.be.disabled').check();
        else
            throw new Error(`Invalid gender value ${gender}. Gender should be either male or female`);
        this.getElement(this.firstName).type(firstName);
        this.getElement(this.lastName).type(lastName);
        this.getElement(this.email).type(email);
        this.getElement(this.password).type(password);
        this.getElement(this.confirmPassword).type(password);
        this.getElement(this.registerButton).click();
        this.getElement(this.successMessage).should('contain', 'Your registration completed');
        this.getElement(this.continueButton).click();
    }
}
import BasePage from "./basePage";

export default class RegistrationPage extends BasePage {
    registerLink = '[class="ico-register"]';
    maleRadio = '[id="gender-male"]';
    femaleRadio = '[id="gender-female"]';
    firstName = '[id="FirstName"]';
    lastName = '[id="LastName"]';
    email = '[id="Email"]';
    password = '[id="Password"]';
    confirmPassword = '[id="ConfirmPassword"]';
    registerButton = '[id="register-button"]';
    successMessage = '[class="result"]';
    continueButton = '[class="button-1 register-continue-button"]';
    
    constructor() {
        super('/');
    }

    clickOnRegisterNavigation(){
        this.getElement(this.registerLink).should('be.visible').and('not.be.disabled');
        this.getElement(this.registerLink).click();
        cy.url().should('include', 'register');
    }

    registerUser(gender: 'male' | 'female', firstName: string, lastName: string, email: string, password: string){
        if(gender === 'male'){
            this.getElement(this.maleRadio).should('not.be.checked').and('not.be.disabled').check();
        }
        else if(gender === 'female'){
            this.getElement(this.femaleRadio).should('not.be.checked').and('not.be.disabled').check();
        }
        else{
            throw new Error('Invalid gender. Gender should be either male or female');
        }
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
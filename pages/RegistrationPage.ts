import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { faker } from '@faker-js/faker';

let savedUser = {
            name: '',
            email: '',
            password: ''
        };
        savedUser.name = "Elsa";
        // faker.person.firstName();
        savedUser.email = "elsa@frozen.com";
        // faker.internet.email();
        savedUser.password = "IceQueen123";
        // faker.internet.password();
export class RegistrationPage extends BasePage{
    
    async OpenRegistrationPage(){
        await this.navigateToUrl("https://automationexercise.com/login");
    }
    async VerifyRegistrationPageTitle(){
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
    }
    async EnterRegistrationDetails(){
        await this.page.locator("input[data-qa='signup-name']").fill(savedUser.name);
        await this.page.locator("input[data-qa='signup-email']").fill(savedUser.email);
        await this.page.locator("button[data-qa='signup-button']").click();
        await expect(this.page.locator("text=ENTER ACCOUNT INFORMATION")).toBeVisible();
    }
    async VerifyRegistrationPageURL(){
        await expect(this.page).toHaveURL(/.*signup/);
    }
    async EnterAccountInformation(){
        await this.page.locator("input#id_gender1").check();
        await this.page.locator("input#password").fill(savedUser.password);
        await this.page.locator("select#days").selectOption("10");
        await this.page.locator("select#months").selectOption("5");
        await this.page.locator("select#years").selectOption("1990");
    }
    async EnterAddressInformation(){
        await this.page.locator("input#first_name").fill(savedUser.name);
        await this.page.locator("input#last_name").fill("Santos");
        await this.page.locator("input#address1").fill("123 Main St");
        await this.page.getByLabel('Country *').selectOption('Canada');
        await this.page.locator("input#state").fill("Ontario");
        await this.page.locator("input#city").fill("Toronto");
        await this.page.locator("input#zipcode").fill("M4B1B3");
        await this.page.locator("input#mobile_number").fill("+14161234567");
        await this.page.locator("button[data-qa='create-account']").click();
    }
}
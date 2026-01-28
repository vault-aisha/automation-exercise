import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { userState } from '../data/userState';

export class RegistrationPage extends BasePage {

    async UserCreateAccount() {
        await this.navigateToUrl("https://automationexercise.com/login");
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
        await this.page.locator("input[data-qa='signup-name']").fill(this.user.name);
        await this.page.locator("input[data-qa='signup-email']").fill(this.user.email);
        await this.page.locator("button[data-qa='signup-button']").click();
        await expect(this.page.locator("text=ENTER ACCOUNT INFORMATION")).toBeVisible();
        await expect(this.page).toHaveURL(/.*signup/);
        await this.page.locator("input#id_gender1").check();
        await this.page.locator("input#password").fill(this.user.password);
        await this.page.locator("select#days").selectOption("10");
        await this.page.locator("select#months").selectOption("5");
        await this.page.locator("select#years").selectOption("1990");
        await this.page.locator("input#first_name").fill(this.user.name);
        await this.page.locator("input#last_name").fill("Santos");
        await this.page.locator("input#address1").fill("123 Main St");
        await this.page.getByLabel('Country *').selectOption('Canada');
        await this.page.locator("input#state").fill("Ontario");
        await this.page.locator("input#city").fill("Toronto");
        await this.page.locator("input#zipcode").fill("M4B1B3");
        await this.page.locator("input#mobile_number").fill("+14161234567");
        await this.page.locator("button[data-qa='create-account']").click();
        await this.page.getByRole('link', { name: 'Continue' }).click();

        userState.email = this.user.email;
        userState.password = this.user.password;
    }
}

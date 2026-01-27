import {Page,expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { TestConfig } from '../test.config.ts';

export class LoginPage extends BasePage{
    async openLoginPage(){
        await this.navigateToUrl("https://automationexercise.com/login");
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
    }
    async userLogin(){
        
        const testConfig = new TestConfig();
        await this.page.locator("input[data-qa='login-email']").fill(testConfig.email);
        await this.page.locator("input[data-qa='login-password']").fill(testConfig.password);
        await this.page.locator("button[data-qa='login-button']").click();
        await expect(this.page.locator("a:has-text(' Logged in as ')")).toBeVisible();
    }
    async incorrectUserLogin(){
        const testConfig = new TestConfig();
        await this.page.locator("input[data-qa='login-email']").fill(testConfig.email);
        await this.page.locator("input[data-qa='login-password']").fill("WrongPassword123");
        await this.page.locator("button[data-qa='login-button']").click();
        await expect(this.page.locator("p:has-text('Your email or password is incorrect!')]")).toBeVisible();
    }
}
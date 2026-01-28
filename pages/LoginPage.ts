import {Page,expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { userState } from '../data/userState';

export class LoginPage extends BasePage{
    async openLoginPage(){
        await this.navigateToUrl("https://automationexercise.com/login");
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
    }
    async userLogin(){
        await this.page.locator("input[data-qa='login-email']").fill(userState.email);
        await this.page.locator("input[data-qa='login-password']").fill(userState.password);
        await this.page.locator("button[data-qa='login-button']").click();
        await expect(this.page.locator("a:has-text(' Logged in as ')")).toBeVisible();
    }
    async userLogout(){
        await this.page.locator("a:has-text(' Home')").click();
        await this.page.locator("a:has-text(' Logout')").click();
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
    }
    async incorrectUserLogin(){
        await this.page.locator("input[data-qa='login-email']").fill(userState.email);
        await this.page.locator("input[data-qa='login-password']").fill("WrongPassword123");
        await this.page.locator("button[data-qa='login-button']").click();
        await expect(this.page.locator(':text("Your email or password is incorrect!")')).toBeVisible();
    }
}
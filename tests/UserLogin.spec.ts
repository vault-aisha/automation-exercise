import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';

test.describe('User Creation Tests', () => {
  let loginPage: LoginPage;
  let registrationPage: RegistrationPage;

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();

    registrationPage = new RegistrationPage(page);
    await registrationPage.UserCreateAccount();

    loginPage = new LoginPage(page);
    await loginPage.userLogout();

    await page.close();
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test('User Login', async () => {
    await loginPage.userLogin();
  });

  test('Incorrect User Login', async () => {
    await loginPage.incorrectUserLogin();
  });
});

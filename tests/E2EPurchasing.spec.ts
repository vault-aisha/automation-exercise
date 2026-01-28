import {test} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config.ts";
import { CartPage } from "../pages/CartPage";
import { RegistrationPage } from "../pages/RegistrationPage";

test.describe('User Creation Tests',()=>{
    let registrationPage:RegistrationPage;
    let loginPage:LoginPage;
    let homePage:HomePage;
    let cartPage:CartPage;
    const testConfig = new TestConfig();
    test.beforeEach(async({page})=>{
        registrationPage=new RegistrationPage(page);
        loginPage=new LoginPage(page);
        homePage=new HomePage(page);
        cartPage=new CartPage(page);
        await registrationPage.UserCreateAccount();
        await loginPage.userLogout();
    });
    test("Verify E2E Purchasing Flow",async({page})=>{ 
        //Login User
        await loginPage.openLoginPage();
        await loginPage.userLogin();
        //Add Product to Cart
        await homePage.openHomePage();
        await cartPage.filterByCategoryWomen();
        await cartPage.viewProduct();
        await cartPage.addProductToCart();
        //Checkout Cart
        await cartPage.checkOutCart();
    });
});
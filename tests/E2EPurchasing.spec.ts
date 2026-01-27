import {test} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config.ts";
import { CartPage } from "../pages/CartPage";

test.describe("E2E Purchasing Flow",()=>{
    let homePage:HomePage;
    let loginPage:LoginPage;
    let cartPage:CartPage;
    const testConfig = new TestConfig();
    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        loginPage=new LoginPage(page);
        cartPage=new CartPage(page);
        await homePage.openHomePage();
    });

    test("Verify E2E Purchasing Flow",async({page})=>{
        //Verify Home Page
        await homePage.verifyHomePageLogo();
        await homePage.verifyNavigationLinks();
        await homePage.verifySliders();
        await homePage.verifyCategories();
        await homePage.verifyBrands();
        await homePage.verifyFeatureItems();    
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
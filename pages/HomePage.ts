import {Page,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
    async openHomePage(){
        await this.navigateToUrl("https://automationexercise.com/");
        await expect(this.page).toHaveTitle("Automation Exercise");
    }
    async verifyHomePageLogo(){
        await expect(this.page.locator("img[alt='Website for automation practice']")).toBeVisible();
    }
    async verifyNavigationLinks(){
        await expect(this.page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Products' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Cart' })).toBeVisible();
        await expect(this.page.locator('a').filter({ hasText: 'Test Cases' }).first()).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Contact us' })).toBeVisible();
    }
    async verifySliders(){
        await expect(this.page.locator('#slider')).toBeVisible();
        await expect(this.page.locator('ol.carousel-indicators')).toBeVisible();
    }

    async verifyCategories(){
        await expect(this.page.locator("div.left-sidebar")).toBeVisible();
        await expect(this.page.locator("//a[normalize-space()='Women']")).toBeVisible();
        await expect(this.page.locator("//a[normalize-space()='Men']")).toBeVisible();
        await expect(this.page.locator("//a[normalize-space()='Kids']")).toBeVisible();
    }
    async verifyBrands(){
        await expect(this.page.locator('div.brands_products')).toBeVisible();
        await expect(this.page.locator("a[href='/brand_products/Polo']")).toBeVisible();
        await expect(this.page.locator("a[href='/brand_products/H&M']")).toBeVisible();
        await expect(this.page.locator("a[href='/brand_products/Madame']")).toBeVisible();
    }
    async verifyFeatureItems(){
        await expect(this.page.getByRole('heading', { name: 'Features Items' })).toBeVisible();
        await expect(this.page.locator('a').filter({ hasText: 'Add to cart' }).first()).toBeVisible();

    }
}
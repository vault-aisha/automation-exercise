import {Page,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    async filterByCategoryWomen(){
        await this.page.locator("//a[normalize-space()='Women']").click();
        await this.page.locator("a[href='/category_products/1']").click();
        await expect(this.page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
        await expect(this.page.getByText('Women > Dress', { exact: true })).toBeVisible();
    }
    async filterByCategoryMen(){
        await this.page.locator("//a[normalize-space()='Men']").click();
        await this.page.getByRole('link', { name: 'Tshirts' }).click();
        await expect(this.page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
        await expect(this.page.getByText('Men > Tshirts', { exact: true })).toBeVisible();
    }
    async filterByCategoryKids(){
        await this.page.locator("//a[normalize-space()='Kids']").click();
        await this.page.getByRole('link', { name: 'Dress' }).click();
        await expect(this.page.getByRole('heading', { name: 'Kids - Dress Products' })).toBeVisible();
        await expect(this.page.getByText('Kids > Dress', { exact: true })).toBeVisible();
    }
    async viewProduct(){
        await this.page.locator('a').filter({ hasText: 'View Product' }).first().click();
        await expect(this.page.locator('div.product-information')).toBeVisible();
    }
    async addProductToCart(){
        await this.page.locator('#quantity').fill("2");
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
        await expect(this.page.locator('div.modal-content')).toBeVisible();
        await expect(this.page.getByText('Your product has been added to cart.')).toBeVisible();
        await this.page.getByText('View Cart').click();
        await expect(this.page).toHaveURL(/.*view_cart/);
    }
    async checkOutCart(){
        await this.page.getByText('Proceed To Checkout').click();
        await expect(this.page).toHaveURL(/.*checkout/);
        await this.page.locator('[name="message"]').fill("Please deliver between 9 AM to 5 PM.");
        await this.page.getByRole('link', { name: 'Place Order' }).click();
        await expect(this.page).toHaveURL(/.*payment/);
        await this.page.locator('[name="name_on_card"]').fill("Elsa Frozen");
        await this.page.locator('[name="card_number"]').fill("4111111111111111");
        await this.page.getByRole('textbox', { name: 'ex. 311' }).fill("123");
        await this.page.getByPlaceholder('MM').fill("12");
        await this.page.getByPlaceholder('YYYY').fill("2025");
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(this.page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
    }
}

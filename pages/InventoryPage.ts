import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    private readonly page: Page;
    private readonly backpackAddBtn: Locator;
    private readonly cartLink: Locator;
    private readonly checkoutBtn: Locator;
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backpackAddBtn = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = this.page.locator('.shopping_cart_link');
        this.checkoutBtn = this.page.locator('[data-test="checkout"]');
        this.cartBadge = this.page.locator('.shopping_cart_badge');
    }

    async addBackpack() {
        await this.backpackAddBtn.click();
        await expect(this.cartBadge).toBeVisible({ timeout: 3000 });
    }

    async goToCart() {
        await this.cartLink.click();
        await expect(this.checkoutBtn).toBeVisible();
        await this.checkoutBtn.click();
    }
}

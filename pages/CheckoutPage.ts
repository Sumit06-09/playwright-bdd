import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    private readonly page: Page;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly zipCode: Locator;
    private readonly continueBtn: Locator;
    private readonly finishBtn: Locator;
    private readonly title: Locator;
    private readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
        this.finishBtn = page.locator('[data-test="finish"]');
        this.title = page.locator('.title');
        this.header = page.locator('.complete-header');
    }

    async fillInformation(fname: string, lname: string, zip: string) {
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.zipCode.fill(zip);
        await this.continueBtn.click();
    }

    async finishCheckout() {
        await this.finishBtn.click();
    }

    async verifyTitle(expectedTitle: string) {
        await expect(this.title).toHaveText(expectedTitle);
    }

    async verifySuccess(expectedText: string) {
        await expect(this.header).toHaveText(expectedText);
    }
}
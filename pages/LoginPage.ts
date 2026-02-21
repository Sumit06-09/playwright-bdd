import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('[data-test="username"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginBtn = this.page.locator('[data-test="login-button"]');
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginBtn.click();
    }

    async getErrorMessage() {
    return await this.page.locator('[data-test="error"]').innerText();
    }
}
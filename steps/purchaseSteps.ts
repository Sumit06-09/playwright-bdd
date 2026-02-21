import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/hooks';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { DbUtil } from '../support/dbUtil';
import { DataManager } from '../support/dataManager';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let checkoutPage: CheckoutPage;
let dm: DataManager; 
const db = new DbUtil();

Given('I am on the SauceDemo login page', async () => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('I login with {string}', async (userKey: string) => {
    dm = new DataManager(userKey);
    await loginPage.login(dm.username, dm.password);
});

When('I add {string} to the cart', async (productName: string) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpack();
});

When('I navigate to the cart and click checkout', async () => {
    if (!inventoryPage) inventoryPage = new InventoryPage(page);
    await inventoryPage.goToCart();
});

When('I complete the checkout process', async () => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformation(dm.firstName, dm.lastName, dm.zip);
    await checkoutPage.finishCheckout();
});

Then('I should see the {string} header', async (message: string) => {
    await checkoutPage.verifySuccess(message);
});

Then('the order status should be correct in the database', async () => {
    const actualStatus = await db.verifyOrderStatus("MOCK_ID");
    if (actualStatus !== dm.expectedStatus) {
        throw new Error(`DB Fail: Expected ${dm.expectedStatus} but got ${actualStatus}`);
    }
});

Then('I should be redirected to the inventory page', async () => {
    await expect(page).toHaveURL(/.*inventory.html/);
});

Then('I should see the error message {string}', async (expectedError: string) => {
    const actualError = await loginPage.getErrorMessage();
    expect(actualError).toContain(expectedError);
});

Then('I should remain on the login page', async () => {
    expect(page.url()).toBe('https://www.saucedemo.com/');
});
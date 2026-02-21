import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

setDefaultTimeout(30000);

let browser: Browser;
let context: BrowserContext;
export let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await page.screenshot();
        this.attach(screenshot, 'image/png');
    }
    await page.close();
    await context.close();
    await browser.close();
});
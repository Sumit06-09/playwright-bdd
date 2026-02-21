import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

setDefaultTimeout(30000);

let browser: Browser;
let context: BrowserContext;
export let page: Page;

Before(async function () {
    // This logic ensures it runs headless in CI but can stay headed locally
    const isCI = !!process.env.CI; 

    browser = await chromium.launch({ 
        headless: isCI ? true : false, // Auto-detect environment
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    
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
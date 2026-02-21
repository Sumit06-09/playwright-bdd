export const config = {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/',
    browser: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS !== 'false',
    dbConfig: {
        host: 'localhost',
        user: 'qa_user',
        password: 'password123'
    }
};
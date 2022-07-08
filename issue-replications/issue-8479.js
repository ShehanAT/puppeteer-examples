const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        request.continue();
    });
    await page.goto(`https://mail.google.com/`);
})()
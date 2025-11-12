const { Builder, Browser } = require("selenium-webdriver");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        await driver.get("https://ya.ru");
        const pageTitle = await driver.getTitle();
        console.log(pageTitle);
    } finally {
        await driver.quit();
    }
        
}) ();
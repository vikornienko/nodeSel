const { Builder, Browser } = require("selenium-webdriver");

(async function helloSelenium() {
    let driverFirefox = await new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        await driverFirefox.get("https://ya.ru");
        const pageTitle = await driverFirefox.getTitle();
        console.log(pageTitle);
    } finally {
        await driverFirefox.quit();
    }

    let driverChrome = await new Builder().forBrowser(Browser.CHROME).build();

    try {
        await driverChrome.get("https://google.com");
        const pageTitle = await driverChrome.getTitle();
        console.log(pageTitle);
    } finally {
        await driverChrome.quit();
    }
        
}) ();
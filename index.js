const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false}); //instancier le browser , option "headless:false va démarrer Chromium"
    const page = await browser.newPage();// pour ouvrir une nouvelle page
    await page.goto('https://www.imdb.com/calendar/?ref_=hm_cs_sm')// goto=promesse , aller sur la page du url 
})();
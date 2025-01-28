const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:true}); //instancier le browser , option "headless:false va démarrer Chromium"
    const page = await browser.newPage();// pour ouvrir une nouvelle page
    await page.goto('https://www.imdb.com/calendar/?ref_=hm_cs_sm')// goto=promesse , aller sur la page du url 
    const movies= await page.evaluate(() =>{        // methode pour effectuer le code dans la page elle même
        let elements = document.querySelectorAll('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li'); // selection tous les element de la liste selectionéé
        return elements;
    });
    console.log(movies);
    await browser.close();
})()

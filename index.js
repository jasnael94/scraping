const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:true}); //instancier le browser , option "headless:false va démarrer Chromium"
    const page = await browser.newPage();// pour ouvrir une nouvelle page
    await page.goto('https://www.imdb.com/calendar/?ref_=hm_cs_sm');// goto=promesse , aller sur la page du url 
    await page.waitForSelector('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li',{ timeout: 60000 });
    const movies= await page.evaluate(() =>{        // methode pour effectuer le code dans la page elle même
        let movies =[];
        let elements = document.querySelectorAll('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li'); // selection tous les element de la liste selectionéé
        for (element of elements){
            movies.push({
            img:element.querySelector('img.ipc-image').src ,
            title:element.querySelector('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li:nth-child(1) > div.ipc-metadata-list-summary-item__c > div > a').text,
            genre:element.querySelector('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li:nth-child(1) > div.ipc-metadata-list-summary-item__c > div > ul.ipc-inline-list.ipc-inline-list--show-dividers.ipc-inline-list--no-wrap.ipc-inline-list--inline.ipc-metadata-list-summary-item__tl.base > li:nth-child(1) > span').textContent,
            actor:element.querySelector('#__next > main > div > div.ipc-page-content-container.ipc-page-content-container--center > section > section > article:nth-child(2) > ul > li:nth-child(1) > div.ipc-metadata-list-summary-item__c > div > ul.ipc-inline-list.ipc-inline-list--show-dividers.ipc-inline-list--no-wrap.ipc-inline-list--inline.ipc-metadata-list-summary-item__stl.base > li:nth-child(1) > span').textContent,
            });
        };
        return movies ;
    });
    console.log(movies);
    await browser.close();
})()

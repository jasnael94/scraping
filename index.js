const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://www.imdb.com/calendar/?ref_=hm_cs_sm');
    
    await page.waitForSelector('#__next > main > div > div.ipc-page-content-container> section > section > article:nth-child(2) > ul > li', {
        timeout: 60000
    });
    
    const movies = await page.evaluate(() => {
        let film = [];
        let elements = document.querySelectorAll('#__next > main > div > div.ipc-page-content-container> section > section > article:nth-child(2) > ul > li');
        console.log("🚀 ~ movies ~ elements:", elements)
        
        for (let element of elements) {
            try {
                movies.push({
                    img: element.querySelector('img.ipc-image').src,
                    title: element.querySelector('div.ipc-metadata-list-summary-item__c div > a')?.text,
                    genre: element.querySelector('ul.ipc-metadata-list-summary-item__tl li:first-child span')?.textContent,
                    actor: element.querySelector('ul.ipc-metadata-list-summary-item__stl li:first-child span')?.textContent
                });
            } catch (error) {
                console.log('Erreur lors de l\'extraction d\'un film:', error);
            }
        }
        return movies;
    });
    
    console.log(movies);
    // await browser.close();
})();
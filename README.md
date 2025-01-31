# scraping

SCRAPING:
tuto : https://www.youtube.com/watch?v=Y_NlDyUfVJ8&ab_channel=RomainKania

-créer un dossier “scraping” et ouvrir avec VS
- dans le dossier : “npm init” pour avoir le package.json
- créer index.js
- dans package.json rajouter dans “script” :
       "start" : "node index.js",  = pour “node index.js” on peut “npm start”;pour démarrer projet
-installer module puppeteer pour controller chromium :
   npm install puppeteer --save

-créer le fichier “index.js”


Dans “ index.js ” :

-importer la bibliothèque puppeteer:
   const puppeteer = require('puppeteer');

- créer une fonction pour scraper
	(async () => {
    const browser = await puppeteer.launch({headless:false}); //instancer le browser , option    "headless:false= avec interface grafique ”, “headless:true “ =sans interface grafique
    const page = await browser.newPage(); // pour ouvrir une nouvelle page
	wait page.goto('https://www.imdb.com/calendar/?ref_=hm_cs_sm')// goto=promesse , aller sur la page choisie
})();


le selector (utililiser inspect , console):
- inspecter l’element (sur la page choisie)
-sélectionner élément souhaiter et copier>sélecteur css ou copy>copy selector
- dans console :
    >> document.querySelector(‘coller sélecteur’)pour un élément et
    >> document.querySelectorAll(‘coller sélecteur’)pour tous les éléments 

Maintenant dans le fichier index.js rajouter le sélecteur :

	(async () => {
    const browser = await puppeteer.launch({headless:false}); 
    const page = await browser.newPage(); 
    await page.goto('url’);
    document.querySelectorAll('’);

})();


const puppeteer = require('puppeteer');
const ghost = require("g")
// executablePath : 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'

/*test = (async () => {
  const browser = await puppeteer.launch({executablePath : 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',headless : false});
  const page = await browser.newPage();

  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );

  const fullTitle = await textSelector.evaluate(el => el.textContent);
    
  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

})();*/


test = (async () => {
  const browser = await puppeteer.launch({executablePath : 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',headless : false});
  page = await browser.newPage();
  const cursor = puppeteer.create
  await page.goto("https://www.monbureaunumerique.fr/");
  await page.setViewport({width: 1000, height: 1000});
  await page.click(".fo-connect__link");
  //const n = await page.$(".js-wayf-composant");
  //console.log(await n.screenshot);

})();

//document.querySelector("body > main > div > div > div > div > div > form > fieldset:nth-child(7) > legend > button")
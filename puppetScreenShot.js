const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.co.za/');
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'google.png'});

  await browser.close();
}

getPic();

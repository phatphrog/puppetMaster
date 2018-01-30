
const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');

  //Click on button on the page identified by it's > selector
  //await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img')

  //Wait for page to laod
  await page.waitFor(1000);

  //Evaluate and scrape page data
  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll('.product_pod');

    for(var element of elements){
      let title = element.childNodes[5].innerText; // Select the title
      let price = element.childNodes[7].children[0].innerText; // Select the price
      data.push({title, price});
    }
     return data;
  });

  browser.close();

  return result;
};

scrape().then((value) => {
    console.log(value);
});

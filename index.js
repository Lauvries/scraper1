const puppeteer = require('puppeteer')

async function scrapeProduct(url) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url)

  const [el] = await page.$x('//*[@id="panel--user-profile-review-tabs--0"]/div[1]/div[1]/div[1]/div[1]/div[1]')
  const txt = await el.getProperty('textContent');
  const title = await txt.jsonValue();
  console.log({ title })
  browser.close();


}
scrapeProduct('https://www.airbnb.com/users/show/39214060')
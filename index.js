const puppeteer = require('puppeteer')
const fs = require('fs')

// Define an array of URLs to process
const urls = ['https://sara-v.com/']

async function runProduct(url) {
  console.log(`Running product for URL: ${url}`)
  const time = new Date()
  const timestamp = time.getTime()
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto(url)
  try {
    await page.screenshot({
      path: `./screenshots/${timestamp}.png`,
      fullPage: true,
    })
  } catch (err) {
    // If there was an error saving the screenshot, write the timestamp to a .txt file
    fs.writeFileSync(
      `./screenshots/${timestamp}.txt`,
      'Error saving screenshot',
    )
    console.error(err)
  }

  try {
    // Get all elements in the page using page.$$eval method
    const elements = await page.$$eval('*', (els) =>
      els.map((el) => el.innerHTML),
    )
    //console.log(elements)

    // Write the page HTML to a new file with the same timestamp as the screenshot
    fs.writeFileSync(`./screenshots/${timestamp}.html`, await page.content())
  } catch (err) {
    // If there was an error saving the .html file, write the timestamp to a .txt file
    fs.writeFileSync(`./screenshots/${timestamp}.txt`, 'Error saving HTML')
    console.error(err)
  }

  browser.close()
}

// Loop through the array of URLs and call runProduct for each URL
urls.forEach(async (url) => {
  try {
    await runProduct(url)
  } catch (err) {
    console.error(err)
  }
})

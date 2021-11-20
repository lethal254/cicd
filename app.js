const fs = require("fs")
const puppeteer = require("puppeteer")

const captureScreenshot = async () => {
  let browser = null
  try {
    browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setViewport({ width: 1440, height: 1080 })

    await page.goto("http://127.0.0.1:5500/index.html")

    await page.screenshot({ path: `./github-profile.jpeg` })
  } catch (error) {
    console.log(error.message)
  } finally {
    await browser.close()
  }
}
captureScreenshot()

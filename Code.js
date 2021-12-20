const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const request = require('request');

const { Console } = require("console");

let cPage;                                                                                     // Current page 

console.log("Before");
let browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: true,
});
browserOpenpromise.then(function (browser) {
    let pagePromise = browser.pages();
    return pagePromise;
}).then(function (pagesArr) {
    cPage = pagesArr[0];
    let googlePagePromise = cPage.goto("https://www.google.com");                               // Open google page
    return googlePagePromise;
}).then(function () {
    let waitForSelector = cPage.waitForSelector("input[type='text']", { visible: true });       // Wait to type element on page
    return waitForSelector;
}).then(function () {
    return cPage.type("input[type='text']", "wikipedia");                                       // Type "wikipedia"
}).then(function () {
    return cPage.keyboard.press("Enter");                                                       // Hit enter on keyboard
}).then(function () {
    return cPage.waitForSelector(".yuRUbf h3", { visible: true });                              // Find h3 tag in class
}).then(function () {
    return cPage.click(".yuRUbf h3");                                                           // Click on website
}).then(function () {
    return cPage.waitForSelector(".lang1 strong", { visible: true }); 
}).then(function () {
    return cPage.click(".lang1 strong");
}).then(function () {
    return cPage.waitForSelector(".portal-hright.portal-vbot a", { visible: true });
}).then(function () {
    return cPage.click(".portal-hright.portal-vbot a");
}).then(function () {
    return cPage.waitForSelector('.hlist.noprint li a[title="Wikipedia:Contents/A–Z index"]', { visible: true });           // Find "A-Z index"
}).then(function () {
    return cPage.click('.hlist.noprint li a[title="Wikipedia:Contents/A–Z index"]');                                        // Click on "A-Z index" link
}).then(function () {
    return cPage.waitForSelector('#toc tr a[title="Special:AllPages/S"]', { visible: true });                               // Find word 'S'
}).then(function () {
    return cPage.click('#toc tr a[title="Special:AllPages/S"]');                                                            // Click on 'S'
}).then(function () {
    return cPage.waitForSelector('.mw-allpages-chunk li a', { visible: true });                               // Find article on'S'
}).then(function () {
    return cPage.click('.mw-allpages-chunk li a');                                                            // Click on 'S' to get article
}).then(function () {
    return cPage.waitForSelector('.toctext', { visible: true });                               // Find 'History'
}).then(function () {
    return cPage.click('.toctext');                                                            // Click on history
}).then(function () {
    return cPage.waitForSelector('.toclevel-1.tocsection-4 .toctext', { visible: true });                               // Find 'Use in writing systems'
}).then(function () {
    return cPage.click('.toclevel-1.tocsection-4 .toctext');                                                            // Click on Use in writing systems
})


//-----------There is no "other uses" section for letter 'S'-----------------//


console.log("After");
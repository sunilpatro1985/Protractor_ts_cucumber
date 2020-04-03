import { Given, Then } from "cucumber";
import { HomePage } from "../pages/HomePage";
import { Util } from "../Utility/Util";
import { AddCustomerPage } from "../pages/AddCustPage";
import { OpenAccount } from "../pages/OpenAccount"
import { brotliCompress } from "zlib";
import { browser } from "protractor";

//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
const expect = require('chai').expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const log = require("../config/Logging").default;
var App = require("../TestData/App");

var homePage = new HomePage();
const addCustPage: AddCustomerPage = new AddCustomerPage();
var openAccount: OpenAccount = new OpenAccount();

Given(/^I am on XYZ Bank home page$/, async () => {
  log.debug("Starting");
  log.debug(await Util.getText(homePage.mainHeading));
  await expect(await Util.getText(homePage.mainHeading)).to.equal("XYZ Bank");
});

Then(/^I go to Add Customer screen$/, async () => {
  await homePage.goToOpenCustomerPage();
  //await browser.sleep(2000);
});

Then(/^I enter ([^"]*), ([^"]*), ([^"]*) to create a customer$/, async (fname, lname, pcode) => {
  log.debug(fname + lname + pcode);
  await addCustPage.addCustomer(fname, lname, pcode);
  //await browser.sleep(3000);
})

Given(/^I am on Open Account Page$/, async () => {
  await homePage.goToOpenAccountPage();
  await browser.sleep(2000);
  //log.debug(await Util.getText(openAccount.Process));
  await expect(await Util.getText(openAccount.Process)).to.equal("Process");
});

Then(/^I select ([^"]*) as customer$/, async (fname: any) => {
  var customerName = fname;
  //log.debug(customerName);
  await openAccount.selectACustomer(customerName);
  //await browser.sleep(3000);
})

Then(/^I select currency as "([^"]*)"$/, async (currency) => {
  var Currency: any = currency;
  //log.debug(Currency);
  await openAccount.selectACurrency(Currency);
  //await browser.sleep(3000);
})

Then(/^I should click on Process to create an account$/, async () => {
  await openAccount.ProcessIt();
  //log.debug("I should click on Process to create an account");

})




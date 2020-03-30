import { browser, element, by } from "protractor";
import { Given, Then, When } from "cucumber";
import { HomePage } from "../pages/HomePage";
import { Util } from "../Utility/Util";
import { AddCustomerPage } from "../pages/AddCustPage";
import { OpenAccount } from "../pages/OpenAccount"

//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
const expect = require('chai').expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const log = require("../config/Logging").default;
var App = require("../TestData/App");

var homePage = new HomePage();
const addCustPage : AddCustomerPage = new AddCustomerPage();
var openAccount : OpenAccount = new OpenAccount();

Given(/^I am on XYZ Bank home page$/, async () => {
  log.debug("Starting");
    log.debug(await Util.getText(homePage.mainHeading));
    await expect(await Util.getText(homePage.mainHeading)).to.equal("XYZ Bank");
  });

  Then(/^I go to Add Customer screen$/, async () => {
    await homePage.goToOpenCustomerPage();
    //await browser.sleep(2000);
  });

  Then(/^I should create a customer with ([^"]*), ([^"]*), ([^"]*)$/, async(fname, lname, pcode) => {
    log.debug(fname + lname + pcode);
    await addCustPage.addCustomer(fname, lname, pcode);
    //await browser.sleep(3000);
  })

Then(/^I go to Open Account page$/, async () => {
    await homePage.goToOpenAccountPage();
    await expect(await Util.getText(openAccount.Process)).to.equal("Process");
  });

  Then(/^I should select the ([^"]*) ([^"]*) as customer$/, async(fname: any, lname: any) => {
    var customerName = fname + " " + lname;
    log.debug(customerName);
    //await browser.sleep(3000);
  })

  Then(/^I should select the currency as "([^"]*)"$/, async(currency) => {
    var Currency: any = currency;
    log.debug(Currency);
    //await browser.sleep(3000);
  })

  Then(/^I should click on Process to create an account$/, async() => {
    log.debug("I should click on Process to create an account");
  
  })
  



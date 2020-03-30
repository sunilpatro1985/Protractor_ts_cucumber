import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
const log = require("../config/logging").default;

export class HomePage{

    Home = by.className('btn home');
    mainHeading = by.className('mainHeading');
    BankManagerLogin = by.buttonText('Bank Manager Login');
    AddCustomer = by.buttonText('Add Customer');
    OpenAccount = by.buttonText("Open Account");
    Customers = by.buttonText("Customers");
		

    async goToOpenCustomerPage(){
        await Util.click(this.BankManagerLogin);
        await browser.sleep(1000);
        await Util.click(this.AddCustomer);
    }

    async goToOpenAccountPage(){
        await browser.sleep(1000);
        await Util.click(this.OpenAccount);
    }
}
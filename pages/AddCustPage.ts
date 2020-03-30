import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";

export class AddCustomerPage{
    App = require("../TestData/App");

     fName = by.xpath('//input[@ng-model="fName"]');
     lName = by.xpath('//input[@ng-model="lName"]');
     postalcode = by.xpath('//input[@ng-model="postCd"]');
     addcustomerbtn = by.className('btn btn-default');

     async addCustomer(fname: string, lname: string, pcode: string){
        await Util.sendKeys(this.fName, fname);
        await Util.sendKeys(this.lName, lname);
        await Util.sendKeys(this.postalcode, pcode);
        await Util.click(this.addcustomerbtn);
        await browser.sleep(1000);
        await Util.VerifyAndCloseAlert("Customer added");
    }

}



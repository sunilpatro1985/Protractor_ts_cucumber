import { browser, element, by, protractor, Browser } from "protractor";
const log = require("../config/Logging").default;

describe("Banking project test", function(){
    let App = require("../TestData/App");
    
    beforeEach(function(){
        browser.get(App.homePage);
        //browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
    })

    it("Verify Open Add Customer", function(){
        element(by.buttonText('Bank Manager Login')).click();
        browser.sleep(2000);
        element(by.buttonText('Add Customer')).click();
        log.debug("Navigated to Open Customer Page");
        browser.sleep(2000);
    })

})
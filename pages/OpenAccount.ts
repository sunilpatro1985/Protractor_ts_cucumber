import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
const log = require("../config/logging").default;

export class OpenAccount {
    Process = by.buttonText('Process');
    selectCustomer = by.id('userSelect');
    selectCurrency = by.id('currency');
    Customers = element(this.selectCustomer).all(by.tagName('option'));
    Currency = element(this.selectCurrency).all(by.tagName('option'));

    async selectACustomer(txt: string) {
        log.debug("Customers count " + (await this.Customers).length);
        Util.click(this.selectCustomer);
        //log.debug(await this.Customers.get(0).getText());
        for (let i = 0; i < (await this.Customers).length; i++) {
            log.debug(await this.Customers.get(i).getText());
            if (await this.Customers.get(i).getText() == txt) {
                await this.Customers.get(i).click();
            }
        }
    }

    async selectACurrency(txt: string) {
        for (let i = 0; i < (await this.Currency).length; i++) {
            log.debug(await this.Currency.get(i).getText());
            if (await this.Currency.get(i).getText() == txt) {
                log.debug(await this.Currency.get(i).getText());
                await this.Currency.get(i).click();
            }
        }
    }
    
    async ProcessIt() {
        await Util.click(this.Process);
        await browser.sleep(1000);
        await Util.VerifyAndCloseAlert("Account created");
    }
}

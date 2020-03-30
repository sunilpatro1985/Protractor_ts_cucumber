
import { element, browser, ExpectedConditions, protractor } from "protractor"
const log = require("../config/Logging").default;

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export class Util{

    static EC = protractor.ExpectedConditions;

    static async click(byEl: any){
        try{
            await Util.waitForEl(byEl);
            await element(byEl).click();
            log.debug("clicked on -"+ byEl)
        }catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }

    static async sendKeys(byEl:any, text:string){
        try{
            Util.waitForEl(byEl);
            await element(byEl).sendKeys(text);
        }catch(ex){
            log.debug(ex);
            throw new Error(ex);
        }
    }

    static async getText(byEl:any): Promise<any>{
        var text: any = null;
        try{
            Util.waitForEl(byEl);
            text = await element(byEl).getText();
            return text;
        }catch(ex){
            log.debug(ex);
            return text;
        }
    }

    static async waitForEl(byEl: any) {
        await browser.wait(Util.EC.presenceOf(element(byEl)), 30000, 'Element taking too long to appear in the DOM');
    }

    static async waitForAlert(){
        await browser.wait(Util.EC.alertIsPresent(), 4000, "ALert not found");
    }

    static async VerifyAndCloseAlert(txt: String){
        this.waitForAlert();
        let alert = browser.switchTo().alert();
        let alertText = await alert.getText();

        log.debug("alert text :- " + alertText);

        await browser.sleep(2000);
        expect(alertText).to.include(txt);
        alert.accept();
    }
}
import { browser,protractor, ExpectedConditions as EC, $, $$,by  } from 'protractor'
export class Helper {

    public SHORT_WAIT: number = 5000;
    public NORMAL_WAIT: number = 10000;
    public LONG_WAIT: number = 30000;

    private isClickable(element) {
        return EC.and(
            EC.visibilityOf(element),
            EC.elementToBeClickable(element));
    };

    static getTimeStamp(){
        return (Math.floor(Date.now() / 1000));
    };

    async selectDropDownNumber(element,number){

        let options = element.all(by.tagName("option"))
            .then(function (options) {
                 options[number].click()
            });

    }

    async isDisplayed(element) {
        return browser.wait(
            EC.presenceOf(element),
            this.LONG_WAIT,
            "Element did not show up - " + element.locator().toString());
    };

    async addTimeStamp(value:string){
        return value + Helper.getTimeStamp().toString()
    };

    async click(element) {
        return browser.wait(
            this.isClickable(element),
            this.LONG_WAIT,
            "Following element did not show up " + element.locator().toString())
            .then(() => element.click());
    }

    async sendKeys(element, value) {
        await this.isClickable(element),
        await element.clear();
        await element.sendKeys(value);



    };

    async scrollIntoScreenCenter(element) {
        return element.getLocation()
            .then(function (location) {
                return browser.executeScript("return window.outerHeight")
                    .then(function (height) {
                        const offset = Number(location.y) - Number(height) / 2 + 100;
                        return browser.executeScript("window.scrollTo(0," + offset + ")");
                    });
            });
    };

    async nonButtonClick(element) {
        await browser.wait(
            element.isDisplayed(),
            this.NORMAL_WAIT,
            "Following element did not show up " + element.locator().toString())
            await element.click();
    }




}

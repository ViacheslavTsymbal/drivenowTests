import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import { Helper } from "../../helpers/helper";
let helper = new Helper();

export class Lisbon {

     licenceNumberField = element(by.id("drivingLicence.number"));
     lCountry = element(by.id("drivingLicence.country"));
     lDay = element(by.name("validFrom-day"));
     lMonth = element(by.name("validFrom-month"));
     lYear = element(by.name("validFrom-year"));
     expLDay = element(by.name("validTo-day"));
     expLMonth = element(by.name("validTo-month"));
     expLYear = element(by.name("validTo-year"));
     pin_0 = element(by.css("label[class*='no-wrap-clip'][for='drivingLicence.pin']"));
     pin_1 = element(by.id("drivingLicence.pin"));

     day = element(by.id("dateOfBirth-day"));
     month = element(by.id("dateOfBirth-month"));
     year = element(by.id("dateOfBirth-year"));

     vvButton = element(by.css("a[href*='https://sitetestes.viaverde.pt/drivenow']"))
     vvLoginEmail = element(by.id("txtUsername"));
     vvLoginPassword = element(by.id("txtPassword"));
     vvDNloginButton = element(by.id("btnDriveNowLogin"));
     street = element(by.id("primaryDetails.street"));




    async licenceValidFromLisbon(day,month,year){
        await helper.selectDropDownNumber(this.lDay,day);
        await helper.selectDropDownNumber(this.lMonth,month);
        await helper.selectDropDownNumber(this.lYear,year);
    };
    async licenceValidToLisbon(day,month,year){
        await helper.selectDropDownNumber(this.expLDay,day);
        await browser.sleep(300);
        await helper.selectDropDownNumber(this.expLMonth,month);
        await browser.sleep(300);
        await helper.selectDropDownNumber(this.expLYear,year);
        await browser.sleep(300);

    };
    async enterDrivingLicenceLisabon(licence){
        await helper.sendKeys(this.licenceNumberField,licence)
    };
    async enterDrivingLicenceCountry(country){
        await helper.selectDropDownNumber(this.lCountry,country)
    };

    async enterPinLisbon (pin){
        await helper.click(this.pin_0);
        await helper.sendKeys(this.pin_1,pin);
        await browser.sleep(300)
    };

    async selectDateOfBirth(date){
        await helper.selectDropDownNumber(this.day,date);
        await browser.sleep(300)
    };
    async selectMonthOfBirth(month){
        await helper.selectDropDownNumber(this.month,month);
        await browser.sleep(300);

    };
    async selectYearOfBirth(year){
        await helper.selectDropDownNumber(this.year,year);
        await browser.sleep(300)

    };

    async vvButtonLogin(){
        await helper.click(this.vvButton)

    };

    async  enterCredentialsForVV(mail,password){
        await helper.sendKeys(this.vvLoginEmail,mail);
        await helper.sendKeys(this.vvLoginPassword,password);
        await helper.click(this.vvDNloginButton);

    };








}


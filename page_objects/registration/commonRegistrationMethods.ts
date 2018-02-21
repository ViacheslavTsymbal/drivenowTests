import { browser,protractor, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import { Helper } from "../../helpers/helper";
import { registrationElements } from "./regSelectors";

let el = new registrationElements();
let helper = new Helper();

export class RegistrationPageMethods {

    async selectCountry(country) {
        await helper.selectDropDownNumber(el.countrySelect, country);
        await helper.isDisplayed(el.email_field);
    };

    async enterUniqueEmail() {
        let uniqueEmail = await helper.addTimeStamp("meetjoeb11ack+") + "@gmail.com";
        await console.log("new email used " + uniqueEmail)
        await helper.click(el.email_field);
        await helper.sendKeys(el.email_1, uniqueEmail);
        await el.email_1.sendKeys(protractor.Key.TAB)
        await browser.sleep(300);
    };

    async enterInvalidEmail() {
            let emails = ["plainaddress","@domain.com","email@111.222.333.44444","#@%^%#$@#$@#.com",
                "email@domain..com","email.@domain.com",".email@domain.com(Joe Smith)"]
            for(let item of emails){
                await helper.click(el.email_field)
                await helper.sendKeys(el.email_1, item);
                await el.email_1.sendKeys(protractor.Key.TAB)
                await browser.sleep(300);
                await expect<any>(helper.isDisplayed(el.email_error)).toEqual(true)

            }
    };

    async enterInvalidPassword() {
        let passwords = ["12345678","qazwsxqw",""]
        for (let item of passwords){
            await helper.click(el.password_0);
            await helper.sendKeys(el.password_1, item);
            await el.password_1.sendKeys(protractor.Key.TAB)
            await browser.sleep(300);
            await expect<any>(helper.isDisplayed(el.password_error)).toEqual(true)

        }

    };

    async enterPassword(password) {
            await helper.click(el.password_0);
            await helper.sendKeys(el.password_1, password);
            await el.password_1.sendKeys(protractor.Key.TAB)
            await browser.sleep(300);
    };

    async enterInvalidPin(){
        let pins = ["qazws","","123"]

        for (let item of pins){
            await helper.click(el.pin_0);
            await helper.sendKeys(el.pin_1, item);
            await el.pin_1.sendKeys(protractor.Key.TAB);
            await browser.sleep(300);
            await expect<any>(helper.isDisplayed(el.pin_error)).toEqual(true)

        }

    };

    async enterPin(pin){
        await helper.click(el.pin_0);
        await helper.sendKeys(el.pin_1, pin);
        await el.pin_1.sendKeys(protractor.Key.TAB);
        await browser.sleep(300);
    };

    async selectSecurityQuestion(question){
        await helper.selectDropDownNumber(el.securityQuestion,question)
        await browser.sleep(300)
    };

    async enterSecurityAnswer(answer){
        await helper.sendKeys(el.securityAnswer,answer)
        await browser.sleep(300);

    };

    async clickNext(){
        await helper.scrollIntoScreenCenter(el.nextButton);
        await helper.click(el.nextButton);
        await browser.sleep(300);

    };

    async verifyErrorsCount(num){
        await helper.scrollIntoScreenCenter(el.nextButton);
        await helper.click(el.nextButton);
        await browser.sleep(300);
        await expect(el.errorMessage.count()).toEqual(num)

    };

    async selectGender(){
        await helper.scrollIntoScreenCenter(el.selectGenderCheckbox);
        await helper.nonButtonClick(el.selectGenderCheckbox);
        await browser.sleep(300);

    };

    async enterFirstName(firstName){
        await helper.sendKeys(el.firstName,firstName)
        await browser.sleep(300);


    };

    async enterLastName(lastName){
        await helper.sendKeys(el.lastName,lastName);
        await browser.sleep(300);

    };

    async enterStreet(street) {
        await helper.sendKeys(el.street,street);
        await browser.sleep(300);

    };

    async enterStreetNumber(streetNumber){
        await helper.sendKeys(el.streetNumber_1,streetNumber);
        await browser.sleep(300);

    };

    async enterOptionalStreet(additionalStreet){
        await helper.sendKeys(el.optionalStreet_1,additionalStreet);
        await browser.sleep(300);
    };

    async enterPostalCode(postalCode){
        await helper.sendKeys(el.postalCode,postalCode);
        await browser.sleep(300);
    };

    async enterInvalidMobileCode(){

        let codes = ["sad but true",""]
        for (let item of codes){
            await helper.sendKeys(el.mobileCode,item);
            await el.mobileNumber.sendKeys(protractor.Key.TAB);
            await browser.sleep(300);
            await expect<any>(helper.isDisplayed(el.mobile_error)).toEqual(true);
        }


    };

    async enterInvalidMobilePhoneNumber(){
        let numbers = ["","sad"]
        for (let item of numbers){
            await helper.sendKeys(el.mobileNumber,item);
            await el.mobileNumber.sendKeys(protractor.Key.TAB);
            await browser.sleep(300);
            await expect<any>(helper.isDisplayed(el.mobile_error)).toEqual(true);
        };


    };

    async enterPhone(codeSelector,phoneSelector,mobileCode,mobileNumber){
        await helper.sendKeys(codeSelector,mobileCode);
        await helper.sendKeys(phoneSelector,mobileNumber);
        await helper.click(el.postalCode);
        await browser.sleep(300);
    };

    async cityField(city){
        await helper.click(el.city_0)
        await helper.click(el.city_1);
        await helper.sendKeys(el.city_1,city)
        await browser.sleep(300);
    };

    async selectDateOfBirth(selector,date){
        await helper.selectDropDownNumber(selector,date);
        await browser.sleep(300);
    };

    async selectMonthOfBirth(selector,month){
        await helper.selectDropDownNumber(selector,month)
        await browser.sleep(300);
    };

    async selectYearOfBirth(selector,year){
        await helper.selectDropDownNumber(selector,year)
        await browser.sleep(300);
    };

    async clickaAtivateDNforBusinessCheckbox(){
        await helper.scrollIntoScreenCenter(el.businessActivatorCheckbox)
        await helper.click(el.businessActivatorCheckbox);
        await browser.sleep(300);
    };

    async clickAddBusinessAddressCheckbox(element){
        await helper.click(element)
        await browser.sleep(300);
    };

    async addCompanyName(selector,company){
        await helper.sendKeys(selector,company);
        await browser.sleep(300);
    };

    async addCompanyStreetDetails(streetSelector,numberSelector,street,number){
        await helper.sendKeys(streetSelector,street);
        await helper.sendKeys(numberSelector,number);
        await browser.sleep(300);
    };

    async addCompanyPostalCode(selector,code){
        await helper.sendKeys(selector,code);
        await browser.sleep(300);
    };

    async addCompanyCity(selector,city){
      await helper.sendKeys(selector,city);
      await browser.sleep(300);
    };

    async selectCompanyCountry(selector,country){
      await helper.selectDropDownNumber(selector,country);
      await browser.sleep(300);
    };

    async enterDrivingLicence(selector,licence) {
        await helper.sendKeys(selector, licence);
        await browser.sleep(300);
    };

    async selectLicenceCountry(selector,lcountry){
        await helper.selectDropDownNumber(selector,lcountry)
        await browser.sleep(300);
    };

    async licenceValidFrom(daySelector,monthSelector,yearSelector,day,month,year) {
        await helper.selectDropDownNumber(daySelector, day);
        await helper.selectDropDownNumber(monthSelector, month);
        await helper.selectDropDownNumber(yearSelector, year);
        await browser.sleep(600);
    };

    async licenceValidTO(day,month,year){
       await helper.selectDropDownNumber(el.expLDay,day);
       await helper.selectDropDownNumber(el.expLMonth,month);
       await helper.selectDropDownNumber(el.expLYear,year);
       await browser.sleep(300);
    };

    async addCreditCardIframe(number,expDate,cvv){
        await browser.sleep(2000);
        await browser.switchTo().frame(0);
        await helper.slowType(el.cardNumberIframe,number,100);
        await browser.sleep(500);
        await helper.slowType(el.cardValidToIframe,expDate,100);
        await browser.sleep(500);
        await helper.slowType(el.cvvIframe,cvv,100);
        await browser.sleep(1000);
        await helper.click(el.okButtonIframe);
        await browser.switchTo().defaultContent()
        await browser.sleep(2000)
    };

    async chooseCreditCard(card){
        await helper.selectDropDownNumber(el.payment_dropdown,card)
        await browser.sleep(300)

    };

    async addCreditCard(number){
        await helper.sendKeys(el.payment_number_field,number);
        await browser.sleep(300)

    }

    async addCCexpirationDate(year,month){
        await helper.selectDropDownNumber(el.payment_year_dropdown,year)
        await helper.selectDropDownNumber(el.payment_month_dropdown,month)
        await browser.sleep(500)

    }

    async addPaymentCVV(cvv){
        await helper.sendKeys(el.payment_CVV,cvv)
        await browser.sleep(300)
    };

    async validatePromoCodeLogic(code){
        await helper.sendKeys(el.promocode,code);
        await helper.click(el.redeemButton);
        await browser.sleep(1000);
    };
    async selectCheckBoxes(){
        await helper.scrollIntoScreenCenter(el.agreeCheckbox);
        await helper.click(el.agreeCheckbox)
        await browser.sleep(300)



    };

    async displayConfirmationText(){
        await helper.isDisplayed(el.sms1);
        await browser.sleep(300)

    };








}
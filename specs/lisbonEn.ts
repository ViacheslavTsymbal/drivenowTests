import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import {RegistrationPageMethods} from "../page_objects/registration/commonRegistrationMethods";
import {registrationElements} from "../page_objects/registration/regSelectors";
import {Lisbon} from "../page_objects/registration/pt_schema";

import {Helper} from "../helpers/helper";
let pt = new Lisbon();
let helper = new Helper();
let regElm = new registrationElements();
let regPage = new RegistrationPageMethods();
declare let expect:any;


describe('Registration: /en/lisbon/ with VISA, business account', function () {

    beforeAll(async function () {
        await browser.get("/en/lisbon/registration/1");
        await console.log("Lisbon PT registration, visa, with business account")
    });

    it("Should select Portugal from country picker", async function () {
        await regPage.selectCountry(0);
        await expect(helper.isDisplayed(regElm.email_field)).toEqual(true);
    });

    it("EMAIL negative", async function () {
        await regPage.enterInvalidEmail();
        await expect(regElm.email_error.getText()).toEqual("Your e-mail address serves as login into the Customer Area.")
    });

    it("EMAIL positive", async function () {
        await regPage.enterUniqueEmail();
        await expect(browser.isElementPresent(regElm.email_error)).toEqual(false)
    });

    it("PASSWORD negative", async function () {
        await regPage.enterInvalidPassword();
        await expect(regElm.password_error.getText()).toEqual("Please enter a valid password")
    });

    it("PASSWORD positive", async function () {
        await regPage.enterPassword("Qazwsx123");
        await expect(browser.isElementPresent(regElm.password_error)).toEqual(false);
    });

    it("NEXT BUTTON ", async function () {
        await regPage.clickNext();
        await expect(browser.isElementPresent(regElm.firstName)).toEqual(true);
    });

    //Second page
    it("Enter GENDER",async function () {
        // await regPage.verifyErrorsCount(15);
        await regPage.selectGender();
        await expect(regElm.gender.getAttribute("value")).toEqual("M")
    });

    it("Enter FIRST / LAST names", async function () {
        await regPage.enterFirstName("Automation");
        await regPage.enterLastName("Bot");
        await expect(regElm.firstName.getAttribute('value')).toEqual("Automation");
        await expect(regElm.lastName.getAttribute('value')).toEqual("Bot");
    });

    it("Enter Street Details", async function () {
        await regPage.enterStreet("RUA DE SANTA MARTA 16E 2 ANDAR")
    });

    it("Enter Postal Code", async function () {
        await regPage.enterPostalCode("1234-567");
    });

    it("City field", async function () {
        await regPage.cityField("Lisboa");
        await expect(regElm.city_1.getAttribute("value")).toEqual("Lisboa")
    });

    it("Enter Invalid Mobile Code", async function () {
        await expect(regElm.mobileCode.getAttribute("value")).toEqual("+351");
        await regPage.enterInvalidMobileCode();
        await expect(regElm.mobile_error.getText()).toEqual("Please enter mobile phone number")
    });

    it("Enter Invalid Mobile Phone Number", async function () {
        await regPage.enterInvalidMobilePhoneNumber();
        await expect(regElm.mobile_error.getText()).toEqual("Please enter mobile phone number")
    });

    it("Enter Code / Mobile Number valid", async function () {
        await regPage.enterPhone(regElm.mobileCode,regElm.mobileNumber,"00380","9177068");
        await expect(browser.isElementPresent(regElm.mobile_error)).toEqual(false);
    });

    it("Country /Preferred city fields", async function () {
        await expect(regElm.country_text_PT.getText()).toEqual("Portugal");
        await expect(regElm.city_text_PT.getText()).toEqual("Lisbon")

    });

    it("Date of Birth", async function () {
        await pt.selectDateOfBirth(9);
        await expect(pt.day.getAttribute("value")).toEqual('9');
        await pt.selectMonthOfBirth(12);
        await expect(pt.month.getAttribute("value")).toEqual('12');
        await pt.selectYearOfBirth(28);
        await expect(pt.year.getAttribute("value")).toEqual('1990');
    });

    it("DN for business checkbox", async function () {
        await regPage.clickaAtivateDNforBusinessCheckbox();
        await expect(helper.isDisplayed(regElm.businessAdressField)).toEqual(true)
    });

    it("NEXT BUTTON", async function () {
        await regPage.clickNext();
    });

    //Third Page

    it("Add driver License", async function () {
        await pt.enterDrivingLicenceLisabon("123456789");
        await expect(pt.licenceNumberField.getAttribute("value")).toEqual("123456789")
    });

    it("Add driver License Country", async function () {
        await pt.enterDrivingLicenceCountry("0");
        await expect(pt.lCountry.getAttribute("value")).toEqual("PT")
    });

    it("Add driver License valid from", async function () {
        await pt.licenceValidFromLisbon(5,5,3);
    });

    it("Add driver License valid to", async function () {
        await pt.licenceValidToLisbon(12,11,13);
    });

    it("Add Pin Number ", async function () {
        await pt.enterPinLisbon(1234);
        await expect(pt.pin_1.getAttribute("value")).toEqual("1234")
    });

    it("NEXT BUTTON", async function () {
        await regPage.clickNext();
    });

    it("Should select a credit card type from dropdown", async function () {
        await regPage.chooseCreditCard(1);
        await expect(regElm.payment_dropdown.getAttribute("value")).toEqual("VISA")
    });

    it("Should enter a credit card number", async function () {
        await regPage.addCreditCard(4153013999701105);
        await expect(regElm.payment_number_field.getAttribute("value")).toEqual("4153013999701105")
    });

    it("Should enter a credit card expiration date", async function () {
        await regPage.addCCexpirationDate(6,8);
        await expect(regElm.payment_year_dropdown.getAttribute("value")).toEqual("22");
        await expect(regElm.payment_month_dropdown.getAttribute("value")).toEqual("08");
    });

    it("Should enter a credit card CVV", async function () {
        await regPage.addPaymentCVV(105);
        await expect(regElm.payment_CVV.getAttribute("value")).toEqual("105")
    });

    it("should enter promocode", async function () {
        await regPage.validatePromoCodeLogic("DEFAULT");
        await expect(regElm.regText.getText()).toEqual("Thank you! The registration fee has been changed to €10 incl. 30 bonus minutes.")
    });

    it("Should select GTC checkboxes",async function () {
        await regPage.selectCheckBoxes();
    });

    it("Should display confirmation message",async function () {
        await regPage.clickNext();
        await regPage.displayConfirmationText();
        await expect(regElm.sms1.getText()).toEqual("Welcome to DriveNow")
    });


});
import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import {RegistrationPageMethods} from "../page_objects/registration/commonRegistrationMethods";
import {registrationElements} from "../page_objects/registration/regSelectors";
import {Helper} from "../helpers/helper";
let helper = new Helper();
let regElm = new registrationElements();
let regPage = new RegistrationPageMethods();
declare let expect:any;

describe('New schema - Registration: /en/helsinki/ with MasterCard, with business account', function () {
    beforeAll(async function () {
        await browser.get("/en/helsinki/registration/1");

    });

    it("Should select Suomi from country picker",async function () {
        //await regPage.selectCountry(3);
        await expect(helper.isDisplayed(regElm.email_field)).toEqual(true);
    });

    it("EMAIL negative", async function (){
        await regPage.enterInvalidEmail();
        await expect(regElm.email_error.getText()).toEqual("Please enter a valid e-mail address")

    });

    it("EMAIL positive", async function (){
        await regPage.enterUniqueEmail();
        await expect(browser.isElementPresent(regElm.email_error)).toEqual(false)
    });

    it("PASSWORD negative", async function () {
        await regPage.enterInvalidPassword();
        await expect(regElm.password_error.getText()).toEqual("Please enter a valid password");
    });

    it("PASSWORD positive", async function () {
        await regPage.enterPassword("Qazwsx123");
        await expect(browser.isElementPresent(regElm.password_error)).toEqual(false);
    });

    it("PIN negative", async function () {
        await regPage.enterInvalidPin();
        await expect(regElm.pin_error.getText()).toEqual("Enter PIN consisting of 4 digits");
    });

    it("PIN positive", async function () {
        await regPage.enterPin("1234");
        await expect(browser.isElementPresent(regElm.pin_error)).toEqual(false)

    });

    it("SQUESTION positive", async function () {
        await regPage.selectSecurityQuestion(2);
        await expect(regElm.securityQuestion.getAttribute("value")).toEqual("favorite-movie")
    });

    it("SANSWER positive", async function () {
        await regPage.enterSecurityAnswer("joeBlack");
        await expect(regElm.securityAnswer.getAttribute('value')).toEqual("joeBlack")

    });

    it("NEXT BUTTON ", async function () {
        await regPage.clickNext();
        await expect(browser.isElementPresent(regElm.firstName)).toEqual(true);

    });

    //>>>>>>SECOND REG PAGE <<<<<<<
    it("Enter GENDER",async function () {
        // await regPage.verifyErrorsCount(15);
        await regPage.selectGender();
        await expect(regElm.gender.getAttribute("value")).toEqual("M")
    });

    it("Enter FIRST / LAST names", async function () {
        await regPage.enterFirstName("Automation");
        await regPage.enterLastName("Bot");
        await expect(regElm.firstName.getAttribute('value')).toEqual("Automation");
        await expect(regElm.lastName.getAttribute('value')).toEqual("Bot")


    });

    it("Enter Street Details", async function () {
        await regPage.enterStreet("someStreet")
    });

    it("Enter Street Number", async function () {
        await regPage.enterStreetNumber("22")
    });

    it("Enter Optional Street", async function () {
        await regPage.enterOptionalStreet("optional")
    });



    it("Enter Postal Code", async function () {
        await regPage.enterPostalCode("01100");
    });

    it("Enter Code / Mobile Number negative", async function () {
        await regPage.enterPhone(regElm.mobileCode,regElm.mobileNumber,"invalid","invalid");
        await expect(regElm.mobile_error.getText()).toEqual("Please enter mobile phone number");
    });

    it("Enter Code / Mobile Number positive", async function () {
        await regPage.enterPhone(regElm.mobileCode,regElm.mobileNumber,"00380","9177068");
        await expect(browser.isElementPresent(regElm.mobile_error)).toEqual(false);
    });

    it("City field", async function () {
        await regPage.cityField("Helsinki");
        await expect(regElm.city_1.getAttribute("value")).toEqual("Helsinki")
    });

    it("Country /Preferred city fields", async function () {
        await expect(regElm.country_text_FI.getText()).toEqual("Finland");
        await expect(regElm.city_text_FI.getText()).toEqual("Helsinki")
    });

    it("Date of Birth", async function () {
        await regPage.selectDateOfBirth(regElm.dayFi,9);
        await expect(regElm.dayFi.getAttribute("value")).toEqual('9');
        await regPage.selectMonthOfBirth(regElm.monthFi,12);
        await expect(regElm.monthFi.getAttribute("value")).toEqual('12');
        await regPage.selectYearOfBirth(regElm.yearFi,28);
        await expect(regElm.yearFi.getAttribute("value")).toEqual('1991');

    });

    it("DN for business checkbox", async function () {
        await regPage.clickaAtivateDNforBusinessCheckbox();
        await expect(helper.isDisplayed(regElm.businessAdressField)).toEqual(true)
    });

    it("Add business address checkbox", async function () {
        await regPage.clickAddBusinessAddressCheckbox(regElm.businessAdressCheckboxFi);
        await expect(helper.isDisplayed(regElm.business_companyNameFieldFi)).toEqual(true);
        await expect(regElm.business_info_text.getText()).toEqual("If you also like to enter a business credit card, please go to your customer area after the registration.")
    });

    it("Company Name Field", async function () {
        await regPage.addCompanyName(regElm.business_companyNameFieldFi,"SpaceX");
        await expect(regElm.business_companyNameFieldFi.getAttribute("value")).toEqual("SpaceX");
    });

    it("Company Street / Number", async function () {
        await regPage.addCompanyStreetDetails(regElm.business_street_fieldFi,regElm.business_streetNumber_fieldFi,"business street","22");
        await expect(regElm.business_street_fieldFi.getAttribute("value")).toEqual("business street");
        await expect(regElm.business_streetNumber_fieldFi.getAttribute("value")).toEqual("22");
    });

    it("Company PostalCode",async function () {
        await regPage.addCompanyPostalCode(regElm.business_postalCode_fieldFi,"01100");
        await expect(regElm.business_postalCode_fieldFi.getAttribute("value")).toEqual("01100")
    });

    it("Company City", async function () {
        await regPage.addCompanyCity(regElm.business_City_fieldFi,"Houston");
        await expect(regElm.business_City_fieldFi.getAttribute("value")).toEqual("Houston")
    });

    it("Select Company Country from dropdown", async function () {
        await regPage.selectCompanyCountry(regElm.business_country_dropdownFi,0);
        await expect(regElm.business_country_dropdownFi.getAttribute("value")).toEqual("FI")
    });

    it("NEXT BUTTON", async function () {
        await regPage.clickNext();
        await expect(browser.isElementPresent(regElm.licence_0Fi)).toEqual(true);
        await expect(regElm.dl_info_textFi.getText()).toEqual("*Your driving license number is next to point 5 on the EU driving licence. In case you have an older driving licence, please enter your social security number.");
    });

    //>>>THIRD REG PAGE<<<<

    it("Driving Licence field", async function () {
        await regPage.enterDrivingLicence(regElm.licence_1Fi,"123456qwe89");
        await expect(regElm.licence_1Fi.getAttribute("value")).toEqual("123456qwe89");
    });

    it("Select DriverLicence Country from drop-down picker", async function () {
        await regPage.selectLicenceCountry(regElm.lCountryFi,0);
        await expect(regElm.lCountryFi.getAttribute("value")).toEqual("FI")

    });

    it("DL expirience should be not less than 1 year",async function () {
        await regPage.licenceValidFrom(regElm.lDayFi,regElm.lMonthFi,regElm.lYearFi,4,9,1);
        await regPage.clickNext();
        await expect(regElm.dl_validFrom_errorFi.getText()).toEqual("Please select issuing date")
    });

    it("DL Valid From field positive",async function () {
        await regPage.licenceValidFrom(regElm.lDayFi,regElm.lMonthFi,regElm.lYearFi,4,9,15);
        await expect(browser.isElementPresent(regElm.dl_validFrom_errorFi)).toEqual(false);
    });

    it("Should add credit card to Iframe", async function () {
        await regPage.clickNext();
        await regPage.addCreditCardIframe('5506900140100107',"1225","048");
       // await expect(regElm.payment_highwayFi.getAttribute('value')).toEqual("************0107")
        await expect(regElm.payment_highwayYearFi.getAttribute('value')).toEqual("25")

    });

    it("should enter promocode", async function () {
        await regPage.validatePromoCodeLogic("DEFAULT");
        await expect(regElm.regText.getText()).toEqual("Register now for €30.")
    });

    it("Should select GTC checkboxes",async function () {
        await regPage.selectCheckBoxes();
    });

    it("Should display confirmation message",async function () {
        await regPage.clickNext();
        await regPage.displayConfirmationText();
        await expect(regElm.sms1.getText()).toEqual("Welcome to DriveNow");
    });




















});
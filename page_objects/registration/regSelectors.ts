import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'

export class registrationElements  {
     city_text_FI = element(by.xpath("//*[@id=\"primaryDetails\"]/div/div[11]/span"));
     country_text_FI = element(by.xpath("//*[@id=\"primaryDetails\"]/div/div[9]/span"));
     country_text_PT = element(by.xpath("//*[@id=\"primaryDetails\"]/div/div[7]/span"));
     city_text_PT = element(by.xpath("//*[@id=\"primaryDetails\"]/div/div[9]/span"));

     email_error = element(by.id('email-container')).element(by.css(".content-message .error"));
     password_error = element(by.id('password-container')).element(by.css(".content-message .error"));
     pin_error = element(by.id('pin-container')).element(by.css(".content-message .error"));
     mobile_error = element(by.css("#primaryDetails\\.mobileNumber > .content-message .error"));
     dl_info_text = element(by.xpath("//*[@id=\"dlicNumberExplanation-container\"]/span"));
     dl_info_textFi = element(by.xpath(" //*[@id=\"dlicNumberExplanation-container\"]/span"));

     dl_validFrom_error = element(by.css("#dlicCdate-container > .content-message .error"));
     dl_validFrom_errorFi = element(by.css("#validFrom-container > .content-message .error"));


    //*[@id="dlicNumberExplanation-container"]/span
     cardNumberIframe = element(by.id("cardNumber"));
     cardValidToIframe = element(by.name("expiry"));
     cvvIframe = element(by.name("cvv"));
     okButtonIframe = element(by.css(".submit-button-text"));


     email_1 = element(by.name("email"));
     countrySelect = element(by.id("loginDetails.tenantSelector"));
     email_field = element(by.css("label[class*='no-wrap-clip'][for='loginDetails.email']"));
     pin_0 = element(by.css("label[class*='no-wrap-clip'][for='loginDetails.pin']"));
     pin_1 = element(by.name("pin"));
     securityQuestion = element(by.name("securityQuestion"));
     securityAnswer = element(by.name("securityAnswer"));
     nextButton = element(by.css("button[class*='button blue']"));
     selectGenderCheckbox = element(by.css("label[for='primaryDetails-gender-M']"));
     gender = element(by.id("primaryDetails-gender-M"));
     firstName = element(by.name("firstName"));
     lastName = element(by.name("lastName"));
     password_0 = element(by.css("label[class*='no-wrap-clip'][for='loginDetails.password']"));
     password_1 = element(by.name("password"));
     streetNumber_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.streetNumber']"));
     streetNumber_1 = element(by.id("primaryDetails.streetNumber"));
     mobileCode = element(by.id("primaryDetails.primaryDetails.mobileNumber-country-code"));

     mobileCodeFi= element(by.id("primaryDetails.primaryDetails.phoneNumber-country-code"));
     mobileNumberFi = element(by.id("primaryDetails.primaryDetails.phoneNumber-number"));
     mobileNumber = element(by.id("primaryDetails.primaryDetails.mobileNumber-number"));

     street = element(by.id("primaryDetails.street"));
     optionalStreet_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.streetAddition']"));
     optionalStreet_1 = element(by.id("primaryDetails.streetAddition"));
     postalCode = element(by.name("areaCode"));
     city_0 = element(by.css("label[class*='no-wrap-clip'][for='primaryDetails.city']"));
     city_1 = element(by.id("primaryDetails.city"));
     day = element(by.id("age-day"));
     month = element(by.id("age-month"));
     year = element(by.id("age-year"));

     dayFi = element(by.id("dateOfBirth-day"));
     monthFi = element(by.id("dateOfBirth-month"));
     yearFi = element(by.id("dateOfBirth-year"));

     licence_0 = element(by.css("label[class*='no-wrap-clip'][for='driversLicense.dlicNumberWithExplanation']"));
     licence_1 = element(by.id("drivingLicense.number"));

     licence_0Fi = element(by.css("label[class*='no-wrap-clip'][for='drivingLicence.number']"));
     licence_1Fi = element(by.id("drivingLicence.number"));


    lCountry = element(by.name("dlicCountry"));
    lCountryFi = element(by.name("country"));

     lDay = element(by.name("dlicCdate-day"));
     lMonth = element(by.name("dlicCdate-month"));
     lYear = element(by.name("dlicCdate-year"));

    lDayFi = element(by.name("validFrom-day"));
    lMonthFi = element(by.name("validFrom-month"));
    lYearFi = element(by.name("validFrom-year"));





     expLDay = element(by.name("dlicExpDate-day"));
     expLMonth = element(by.name("dlicExpDate-month"));
     expLYear = element(by.name("dlicExpDate-year"));
     creditCardDropdown = element(by.name("payment-CC-payment-method-card-provider"));
     creditCardField = element(by.name("payment-CC-payment-method-card-number"));
     dLiCountryDay = element(by.name("dlicCdate-day"));
     dLiCountryMonth = element(by.name("dlicCdate-month"));
     dLiCountryYear = element(by.name("dlicCdate-year"));
     creditCardYear = element(by.name("payment-CC-payment-method-valid-until-year"));
     creditCardMonth = element(by.name("payment-CC-payment-method-valid-until-month"));
     creditCardCvv_0 = element(by.css("label[class*='no-wrap-clip'][for='paymentDetails.payment-CC-payment-method-security-code']"));
     creditCardCvv_1 = element(by.name("payment-CC-payment-method-security-code"));
     promocode = element(by.name("promocode"));
     regText = element(by.css("[class='registration-header hidden-md hidden-sm hidden-xs']"));
     redeemButton = element.all(by.css("button[class*='button blue']")).get(0);
     agreeCheckbox = element(by.id("approveTos-container"));
     errorMessage = element.all(by.css("[class*='content-message']"));
     message = element.all(by.css("[class*='cms-injected']")).get(0);
     sms1 = element(by.css("[class='registration-header']"));

     businessActivatorCheckbox = element(by.css("[class='label-wrapper'][for='primaryDetails.businessTripsActivator']"));
     businessAdressCheckbox = element(by.css("[class='label-wrapper'][for='businessTripDetails.tenantBillingAddress']"));
     businessAdressCheckboxFi = element(by.css("[class='label-wrapper'][for='businessTripDetails.usingBusinessAddress']"));



     businessAdressField = element(by.id("businessTripDetails.tenantBusinessEmail"));
     business_companyNameField = element(by.id("secondaryDetails.invoiceCompanyName"));

    business_companyNameFieldFi = element(by.id("invoiceAddress.companyName"));
    business_companyNameFieldFI = element(by.id("invoiceAddress.companyName"));
    business_street_fieldFi = element(by.id("invoiceAddress.street"));
    business_streetNumber_fieldFi = element(by.id("invoiceAddress.streetNumber"));
    business_postalCode_fieldFi = element(by.id("invoiceAddress.areaCode"));
    business_City_fieldFi = element(by.id("invoiceAddress.city"));
    business_country_dropdownFi = element(by.id("invoiceAddress.country"));



    business_info_text = element(by.xpath("//*[@id=\"businessCreditCardAdvice-container\"]/span"));
     business_street_field = element(by.id("secondaryDetails.invoiceStreet"));
     business_streetNumber_field = element(by.id("secondaryDetails.invoiceStreetNumber"));
     business_postalCode_field = element(by.id("secondaryDetails.invoiceAreaCode"));
     business_City_field = element(by.id("secondaryDetails.invoiceCity"));
     business_country_dropdown = element(by.id("secondaryDetails.invoiceCountry"));
     payment_highway = element(by.id("paymentDetails.paymentHighway-card-number"));
     payment_highwayFi = element(by.id("payment.paymentHighway-card-number"));
     payment_highwayYearFi = element(by.id("payment.paymentHighway-valid-until-year"));


     payment_dropdown = element(by.name("CCProvider"));
     payment_number_field = element(by.name("number"));
     payment_year_dropdown = element(by.name("expirationYear"))
     payment_month_dropdown = element(by.name("expirationMonth"))
     payment_CVV = element(by.name("cvv2"))

}
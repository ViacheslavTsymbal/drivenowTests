import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import {RegistrationPageMethods} from "../page_objects/registration/commonRegistrationMethods";
import {registrationElements} from "../page_objects/registration/regSelectors";
import {Helper} from "../helpers/helper";
let helper = new Helper();
let regElm = new registrationElements();
let regPage = new RegistrationPageMethods();
declare let expect:any;
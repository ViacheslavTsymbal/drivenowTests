import { browser, ExpectedConditions as EC, $, $$,by,element } from 'protractor'
import {Helper} from "../helpers/helper";
import {registrationElements} from "./registration/regSelectors";

export class HomePage{
    registerNow = element(by.class("btn btn-registration"))



}
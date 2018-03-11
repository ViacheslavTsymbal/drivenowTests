import { Config, browser } from 'protractor'

// Full protractor configuration file reference could be found here:
// https://github.com/angular/protractor/blob/master/lib/config.ts

let conf: Config = {
  // Connecting directly to ChromeDriverServer
  directConnect: true,
  specs: [



      '../specs/helsinkiFi.js',
      '../specs/helsinkiEn.js',

      //'../specs/lisbonPt.js',
      //'../specs/lisbonEn.js'

  ],
  baseUrl: 'https://www.beta.drive-now.com/',
  capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            // Get rid of --ignore-certificate yellow warning
            args: ["--no-sandbox", "--test-type=browser", "disable-infobars"],
            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness`
            prefs: {
                'credentials_enable_service': false,
                "download": {
                    "prompt_for_download": false,
                    // "default_directory": "/e2e/downloads/",
                },
                "profile":{
                    'password_manager_enabled': false
                },
            },
        },
    },

  onPrepare: async () => {
      browser.ignoreSynchronization = true;
      browser.driver.manage().window().maximize();
      await browser.get('https://drvnw:drivenow13@www.beta.drive-now.com/').then(function(){
          console.log("Proxy login, basic authorizaiton:\nusername:drvnw\npassword:drivenow13");
      });




      // Adding nice console output.
    // Provided by: https://github.com/razvanz/jasmine2-reporter
    let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
    let console_reporter_options = {
      startingSpec: true
    }
    jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options))

    // Adding reporting that is applicable for Jenkins or other CI tool
    // Provided by: https://github.com/larrymyers/jasmine-reporters
    let JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter
    let junit_reporter_options = {
      savePath: '../test_results/',
      consolidateAll: true
    }
    jasmine.getEnv().addReporter(new JUnitXmlReporter(junit_reporter_options))

    // Specifying global beforeEach and afterEach jasmine2 hooks.
    beforeEach(() => {
      // Adding .toAppear() and .toDisappear() into available matchers.
      // https://github.com/Xotabu4/jasmine-protractor-matchers
      let matchers = require('jasmine-protractor-matchers')
      jasmine.addMatchers(matchers);
    });

    afterEach(async () => {
      // Clearing browser data after each test
      //await browser.manage().deleteAllCookies();
     // await browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
    });
  },

  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;
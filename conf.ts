import { Config, browser } from 'protractor';
//var screenreporter = require('util/screenreporter.js');
import { Reporter } from './config/Reporter';

let path = require('path');
var outputDir = path.join(process.cwd(),'/reports/json');

export let config: Config = {

    //setting framework
    //framework : "jasmine2",
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,

    // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
    ignoreUncaughtExceptions: true,

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 36000,
        print: function () { }
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: { 'args': ['disable-infobars'] },
        //browserName : 'firefox',
        //marionette : true,
        acceptSslCerts: true
    },

    suites: {
        calc: './specs/calculator.js',
        bank: './testspec/banktest.js',
        bothtest: ['./specs/calculator.js',
            './testspec/banktest.js']
        //to run each suite
        //protractor conf.js calc
        //protractor conf.js bank
        //protractor conf.js calc,bank
        //protractor conf.js bothtest
    },

    //specs:['./stepDef/CustSpec.js'],
    specs: [ '../Features/*.feature' ],

    //Define which tests should be excluded from execution.
    exclude: [
        // 'features/search.feature'
    ],

    // Set log level and enables colors for log output
    coloredLogs: true,

    // arguments to cucumber.js
    cucumberOpts: {
        require: [
            '../outputjs/stepDef/*.js' ,
            '../outputjs/config/*.js'
        ],
        format:"json:./reports/json/cucumber_report.json",
        tags: false,
        profile: false,
        'no-source': true
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: () => {
        var os = require('os');
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(20000);
        Reporter.createDirectory(outputDir);
        // doing a browser.get will lead to a transpile error. 
        // undefined does not have a get method
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,

    onComplete: () => { Reporter.createHTMLReport(); },
}


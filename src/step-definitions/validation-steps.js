const { Then } = require('@wdio/cucumber-framework');
const compareText = require('./utils/compare-text');
const HeaderComponent = require('../po/components/header.component');
const errorComponent = require('../po/components/Error.component');

Then(/^page error should "(.*)" "(.*)"$/, async function(shouldBeParam, titleText) {
    const pageTitle = await errorComponent.getText();
    return compareText(pageTitle, titleText, shouldBeParam);
});

Then(/^page title should "(.*)" "(.*)"$/, async function(shouldBeParam, titleText) {
    const pageTitle = await HeaderComponent.getText();
    return compareText(pageTitle, titleText, shouldBeParam);
});

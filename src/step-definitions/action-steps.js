const { Given, When } = require('@wdio/cucumber-framework');
const LoginPage = require('../po/pages/login.page');

const pages = {
    login: LoginPage
}

Given('I am on the {string} page', async (page) => {
    await pages[page].open()
});

When('I type credentials into {string} and {string} fields.', async (username, password) => {
    await LoginPage.login(username, password);
});

When('I clear the inputs.', async function(){
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
});

When('I clear the Password input.', async function(){
    await LoginPage.clearPassword();
});

When('I clear the Username input.', async function(){
    await LoginPage.clearUsername();
});

When('I hit the "Login" button.', async function(){
    await LoginPage.clickOnbtnSubmit();
}); 

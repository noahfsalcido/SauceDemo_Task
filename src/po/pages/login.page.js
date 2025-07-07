const Page = require('./base.page');
const LoginComponent = require('../components/login.component');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor(){
        super('');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await LoginComponent.inputUsername.addValue(username);
        await LoginComponent.inputPassword.addValue(password);
    }

    async clickOnbtnSubmit(){
        await LoginComponent.btnSubmit.click();
    }

    async clearUsername() {
        await LoginComponent.inputUsername.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await browser.waitUntil(async()=>(await LoginComponent.inputUsername.getValue())==='',
            {
                timeout: 3000,
                timeoutMsg: 'Input was not cleared'
            });
    }

    async clearPassword(){
        await LoginComponent.inputPassword.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await browser.waitUntil(async()=>(await LoginComponent.inputPassword.getValue())==='',
            {
                timeout: 3000,
                timeoutMsg: 'Input was not cleared'
            });
    }

}

module.exports = new LoginPage();

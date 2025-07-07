const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    constructor(url){
        this.url = url;
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(this.url)
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}

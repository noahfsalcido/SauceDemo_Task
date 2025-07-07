const Page = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    constructor(){
        super('/inventory.html');
    }
}

module.exports = new DashboardPage();

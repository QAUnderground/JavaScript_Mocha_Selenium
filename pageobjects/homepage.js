const {Key} = require('selenium-webdriver');
var BasePage = require ('../pageobjects/basepage');

class HomePage extends BasePage{

    searchField = 'input[name=q]';

    enter_search(searchText){
        //This will enter text into the search field
        this.enterTextByCss(this.searchField, searchText);
        //this will send the enter key to the element
        this.enterTextByCss(this.searchField, Key.RETURN);
    }
}
module.exports = new HomePage();
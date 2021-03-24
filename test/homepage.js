const homepage = require('../pageobjects/homepage');

describe('This is the describe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        //Enter actions performed before test
    });

    afterEach(function(){
        //Enter actions to be performed after test
    });

    it('POM Test Check', function(){
        //Enter test steps
        var baseurl = 'https://www.google.com/';
        homepage.go_to_url(baseurl);
        homepage.enter_search('QA Underground Tutorial for beginners');
    })
})
'use strict';

module.exports = Basic;

require('mocha-generators').install();
const chai = require('chai');
      chai.config.includeStack = false; // turn off stack trace
      chai.config.showDiff = false; // turn off reporter diff display
const should = chai.should(); // Using Chai assertion module
const expect = chai.expect;
const assert = chai.assert;

function Basic(Config, Nightmare) {
  const Basic = this;

  /**
  * Test a url for a 200 response
  * @param  String page relative url of the page to test
  * @return Mocha assertion test.
  **/
  Basic.testPageLoad = function(page=''){
    const url = Config.URL+page;
    describe('Test the '+url+' loads', function(){
      it('Status code should be 200', function*(){
        this.timeout('10s');
        const statusCode = yield Nightmare
          .goto(url)
          .then((page) => {
            return page.code
          });
        expect(statusCode).to.equal(200, 'Status code '+statusCode);
      });
    });
  }
}

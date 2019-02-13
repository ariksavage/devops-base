'use strict';

module.exports = Example;

require('mocha-generators').install();
const chai = require('chai');
      chai.config.includeStack = false; // turn off stack trace
      chai.config.showDiff = false; // turn off reporter diff display
const should = chai.should(); // Using Chai assertion module
const expect = chai.expect;
const assert = chai.assert;

function Example(Config, Nightmare) {
  const Example = this;

  Example.test = function(){
    describe('test Nightmare', function(){
      this.timeout('20s');
      it('go to yahoo, get top result', function*(){
        var result = yield Nightmare
          .goto('http://yahoo.com')
          .type('form[action*="/search"] [name=p]', 'github nightmare')
          .click('form[action*="/search"] [type=submit]')
          .wait('#main')
          .evaluate(function() {
            return document.querySelector('#main .searchCenterMiddle li a').href
          });
        console.log('    result is: '+result);
        expect(result).to.be.a('string');
      });
    });
  }
}

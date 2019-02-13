const nightmareModules = process.cwd()+'/tests/nightmare/';
// Config
const DotEnv = require('dotenv').config({path: './.env.test'});
if (DotEnv.error) {
  throw DotEnv.error;
}
const Config = process.env; // env variables from DotEnv

// Set up Nightmare
const nightmare = require('nightmare');
const Nightmare = nightmare({
  show: Config.SHOWNIGHTMARE,
  width: parseInt(Config.NINGHTMAREWIDTH),
  height: parseInt(Config.NIGHTMAREHEIGHT)
});

// Import modules
const basic = require(nightmareModules+'basic.module');
const Basic = new basic(Config, Nightmare);

const drupal7 = require(nightmareModules+'drupal7.module');
const Drupal7 = new drupal7(Config, Nightmare);

// Run tests
Basic.testPageLoad('');
Drupal7.testLogin();
var end = function() {
  describe('-----------------------------------------------------', function(){
    it('End Nightmare Tests', function*(){
      yield Nightmare.end();
    })
  })
}
end();

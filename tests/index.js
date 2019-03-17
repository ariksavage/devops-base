const nightmareModules = process.cwd()+'/tests/nightmare/';
// Config
const DotEnv = require('dotenv').config({path: './.env.test'});
if (DotEnv.error) {
  throw DotEnv.error;
}
const Config = process.env; // env variables from DotEnv

// Set up Nightmare
const nightmare = require('nightmare');

nightmare.action('getDrupalMessages', function(done) {
  //`this` is the Nightmare instance
  this.evaluate_now(() => {
    const messages = [];
    const msgEl = Array.from(document.querySelectorAll('.messages'));
    msgEl.forEach( el => {
      const text =  el.textContent
                      .replace('Status message', '')
                      .replace('Error message', '')
                      .trim();
      const type =  el.className
                      .replace('messages', '')
                      .trim();
      const msg = {
        'text': text,
        'type': type
      };
      messages.push(msg);
    });
    return messages;
  }, done)
  .then((messages) => {
    let error = false;
    messages.forEach(msg =>{
      if (msg.type = 'error'){
        console.log(colors.red(msg.text));
        error = true;
      } else {
        console.log(msg.text);
      }
    });
    expect(error).to.be.false;
  })
});

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
// Basic.testPageLoad('');
Drupal7.testLogin();
Drupal7.testLogout();
var end = function() {
  describe('-----------------------------------------------------', function(){
    it('End Nightmare Tests', function*(){
      Nightmare.end().then();
    })
  })
}
end();

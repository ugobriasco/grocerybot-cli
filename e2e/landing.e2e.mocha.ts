import { browser } from 'protractor';
import { LandingPage } from './landing.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const isUrlChanged = function() {
  return function () {
    return browser.getCurrentUrl().then(function(actualUrl) {
      return actualUrl;
    });
  };
};

describe('/landing', function(){
	let page: LandingPage;

	beforeEach(() => {
		page = new LandingPage();
	});

	afterEach(() => {
		browser.ignoreSynchronization=false;
	});

	it('should display the heading message', () => {
		page.navigateTo();
		expect(page.getHeadingTitle().getText()).to.eventually.equal('Welcome in Grocerybot');
		

	});

	it('should link to the github repo', () => {
		
		page.navigateTo();
		page.getGitHubLink().click();
		browser.ignoreSynchronization=true; //required for chrome
		browser.wait(isUrlChanged(), 5000); //required for safari
		expect(browser.getCurrentUrl()).to.eventually.equal("https://github.com/ugobriasco/grocerybot-cli");
	
	});

});

import { browser, by, element } from 'protractor';

export class LandingPage {
  navigateTo() {
    return browser.get('/landing');
  }

  getHeadingTitle() {
    return element(by.css('div.page-header[_ngcontent-c3] h1[_ngcontent-c3]'));
  }

  getGitHubLink(){
  	return element(by.css('div.page-header[_ngcontent-c3] p[_ngcontent-c3] a[_ngcontent-c3]'));

  }
}
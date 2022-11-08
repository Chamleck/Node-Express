/// <reference types="cypress" />

 import homePage from '../support/pages/HomePage';
 import user from '../fixtures/user.json';
 import {login, loginViaAPI} from '../support/helper';

  beforeEach('Login', () => {
    //login();
    loginViaAPI(user);
  })

  it('Verify login helper', {retries: 2}, () => {
    homePage.visit();

    homePage.getProfileButton().should('be.visible');
  })

/// <reference types="cypress" />

 import homePage from '../support/pages/HomePage';
 import user from '../fixtures/user.json';
 import {loginViaAPI} from '../support/helper';
 import tagsArray from '../fixtures/tagsMock.json';
 import {faker} from '@faker-js/faker';


  beforeEach('Login', () => {
    tagsArray.tags = [faker.animal.bear.name, faker.animal.cow.name]

    cy.intercept('GET', '**/tags', tagsArray)
    loginViaAPI(user);
  })

  it('Verify login helper', {retries: 2}, () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
    homePage.getTagsList().should('contain', tagsArray.tags[0]);
    homePage.getTagsList().should('contain', tagsArray.tags[1]);
  })

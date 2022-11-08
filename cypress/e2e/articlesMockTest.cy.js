/// <reference types="cypress" />

import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import {loginViaAPI} from '../support/helper';
import article from '../fixtures/articlesMock.json'
import {faker} from '@faker-js/faker';


for(let i = 0; i < 10; i++){


beforeEach('Login', () => {

  article.articles[0].favoritesCount++

  cy.log(article.articles[0].favoritesCount)
 
     

   cy.intercept('GET', '**/articles?limit=10&offset=0', article)
   loginViaAPI(user);
  
 
 })

  it('verify likes quantity', () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
   
    homePage.clickGlobalFeed()

    homePage.getArticlePreview().should('contain', article.articles[0].title);
    homePage.getLikesBtn().should('contain', article.articles[0].favoritesCount)
  })

 

 
}
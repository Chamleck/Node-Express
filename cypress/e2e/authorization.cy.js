 import authorizationPage from '../support/pages/AuthorizationPage' 
 import user from '../fixtures/user.json'

  it('Authorization', {retries: 2}, () => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.email, user.password);
  })


  it('Verify login helper', {retries: 2}, () => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.email, user.password);
  })

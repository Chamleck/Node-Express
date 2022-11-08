
class HomePage{
    visit(){
        cy.visit('/');
    }

    getLoginButton(){
        return cy.get('[href="/user/login"]')
    }

    clickLoginButton(){
        this.getLoginButton().click();
    } 
// звездочка для того чтоб указать что ищется конкретно профайл и не важно что до него или после
    getProfileButton(){
        return cy.get('[href*="/profile/"]')
    }

    clickProfileButton(){
        this.getProfileButton().click();
    } 

    getTagsList(){
        return cy.get('.tag-list');
    }

    getTagChip(){
        return cy.get('.link.tag-default.tag-pill');
    }

    clickTagChip(){
        this.getTagChip().click();
    } 

    getGlobalFeedBtn(){
        return cy.get('a:contains("Global Feed")');
    }

    clickGlobalFeed(){
        this.getGlobalFeedBtn().click()
    }

    getArticlePreview(){
        return cy.get('.article-preview')
    }

    getLikesBtn(){
        return cy.get('.btn.btn-sm')
    }

} export default new HomePage();
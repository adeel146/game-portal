class login {
// locators
homeTab = 'ul >li:nth-child(1) a'
productsTab = 'ul >li:nth-child(2) a'
loginButton = '.navbar__logout'
getStartedButton = '.button--primary'
pageTitle = 'div h1'
pageDescription = 'div p'
logo = '[alt="Brand Logo"]'

loginForm = '.absolute.inset-0'
loginFormTitle = 'div h1'
userNameInputField = '#username'
passwordInputField = '#password'
submitButton = '[type="submit"]'

// Funtions
verifyHomePageIsLoaded(){
    cy.get(this.logo).should('be.visible')
    cy.get(this.loginButton).should('be.visible')
    cy.get(this.homeTab).should('be.visible')
    cy.get(this.productsTab).should('be.visible')
    cy.get(this.getStartedButton).should('be.visible')
    cy.get(this.pageTitle).should('be.visible').invoke('text').then((title)=>{
        expect(title).to.eq('Welcome to Our Portal!')
    })
    y.get(this.pageDescription).should('be.visible').invoke('text').then((description)=>{
        expect(description).to.eq("We're excited to have you here. Explore our features and enjoy your experience.")
    })
}
clickOnProductTab(){
    cy.get(this.productsTab).should('be.visible').click()
}
clickOnGetStartedButton(){
    cy.get(this.getStartedButton).should('be.visible').click()
}

verifyLoginFormIsDisplayed() {
    cy.get(this.loginForm).should('be.visible');
    cy.get(this.loginFormTitle).should('be.visible').invoke('text').then((title)=>{
        expect(title).to.eq('Login')
    })
    cy.get(this.userNameInputField).should('be.visible');
    cy.get(this.passwordInputField).should('be.visible');
    cy.get(this.submitButton).should('be.visible');
}

typeInUsernameInputField(username) {
    cy.get(this.userNameInputField).should('be.visible').clear().type(username).should('have.value',username)

}

typePassword(password) {
    cy.get(this.passwordInputField).should('be.visible').clear().type(password).should('have.value',password)
}

clickSubmitButton() {
    cy.get(this.submitButton).should('be.visible').click();
}
verifyDashboardIsDisplayedSuccessfully() {
    cy.get(this.logoutButton).should('be.visible').invoke('text').then((buttonName)=>{
        expect(buttonName).to.eq('LogOut')
    })
    cy.get(this.top10ProductsText).should('be.visible').invoke('text').then((listTitle)=>{
        expect(listTitle).to.eq('Top 10 Products')
    })
    cy.get(this.cards).should('have.length',10);
}
clickOnProduct() {
    cy.get(this.firstProduct).should('be.visible').click();
}
verifyProductDetail() {
    cy.get(this.logoutButton).should('be.visible').invoke('text').then((buttonName) => {
        if (buttonName.trim() === 'LogOut') {
            cy.get(this.shippingAndWarrantySection).should('be.visible');
            cy.get(this.shippingAndWarrantySectionTitle)
              .should('have.text', 'Shipping & Warranty');
            cy.get(this.shippingDetailText)
              .should('have.text', 'Ships in 2 weeks');
            cy.get(this.warrantyDetailText)
              .should('have.text', '1 year warranty');
        } else if (buttonName.trim() === 'LogIn') {
            cy.get(this.shippingAndWarrantySection).should('not.exist');
        }
    });
}
clickOnLogoutButton() {
    cy.get(this.logoutButton).should('be.visible').click();
}

}
module.exports = new login
import { getGreeting } from '../support/app.po';
import login from '../pages/login.js'
import dashboard from '../pages/dashboard.js'
import {users} from "@game-portal/constants"

const username = users[0].username
const password = users[0].password
describe('project-a-e2e', () => {

  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.login('my-email@something.com', 'myPassword');
    getGreeting().contains(/Welcome/);
  });
  it('Verify user is able to login and navigate on the dashboard succesfully', () => {
    login.verifyHomePageIsLoaded()
    login.clickOnGetStartedButton()
    login.verifyLoginFormIsDisplayed()
    login.typeInUsernameInputField(username)
    login.typePassword(password)
    login.clickSubmitButton()
    dashboard.verifyDashboardIsDisplayedSuccessfully()
  });
  it('Verify product detail after login', () => {
    login.verifyHomePageIsLoaded()
    login.clickOnGetStartedButton()
    login.verifyLoginFormIsDisplayed()
    login.typeInUsernameInputField(userName)
    login.typePassword(password)
    login.clickSubmitButton()
    dashboard.verifyDashboardIsDisplayedSuccessfully()
    dashboard.clickOnProduct()
    dashboard.verifyProductDetail()
  });
  it('Verify product detail before login', () => {
    login.verifyHomePageIsLoaded()
    dashboard.clickOnProductTab()
    dashboard.clickOnProduct()
    dashboard.verifyProductDetail()
  });
  it('Verify user is able to logout and navigate on the home page', () => {
    login.verifyHomePageIsLoaded()
    login.clickOnGetStartedButton()
    login.verifyLoginFormIsDisplayed()
    login.typeInUsernameInputField(userName)
    login.typePassword(password)
    login.clickSubmitButton()
    dashboard.verifyDashboardIsDisplayedSuccessfully()
    dashboard.clickOnLogoutButton()
    dashboard.verifyHomePageIsLoaded()
  });
});


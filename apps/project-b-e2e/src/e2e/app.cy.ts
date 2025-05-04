import login from '../pages/login.js';
import dashboard from '../pages/dashboard.js';
import { users } from '@game-portal/constants';

const username = users[0].username;
const password = users[0].password;
describe('project-b-e2e test suit', () => {

  beforeEach(()=>{
    cy.visit('/')
    login.verifyHomePageIsLoaded();
  })

  it('Verify user is able to login and navigate on the dashboard page succesfully', () => {
    login.clickOnLoginButton();
    login.verifyLoginFormIsDisplayed();
    login.typeInUsernameInputField(username);
    login.typePassword(password);
    login.clickSubmitButton();
    dashboard.verifyDashboardIsDisplayedSuccessfully();
  });
  it('Verify product detail after login', () => {
    login.clickOnLoginButton();
    login.verifyLoginFormIsDisplayed();
    login.typeInUsernameInputField(username);
    login.typePassword(password);
    login.clickSubmitButton();
    dashboard.verifyDashboardIsDisplayedSuccessfully();
    dashboard.clickOnProduct();
    dashboard.verifyProductDetail();
  });
  it('Verify product detail before login', () => {
    login.clickOnProductTab();
    dashboard.clickOnProduct();
    dashboard.verifyProductDetail();
  });
  it('Verify user is able to logout and navigate on the home page', () => {
    login.clickOnLoginButton();
    login.verifyLoginFormIsDisplayed();
    login.typeInUsernameInputField(username);
    login.typePassword(password);
    login.clickSubmitButton();
    dashboard.verifyDashboardIsDisplayedSuccessfully();
    dashboard.clickOnLogoutButton();
  });
});

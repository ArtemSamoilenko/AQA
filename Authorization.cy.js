///<reference types = "cypress"/>
import user from '../fixtures/user.json'
import product from '../fixtures/product.json'

describe('template spec', () => {
  it('Authorization, Product Search, Cart, and Checkout', () => {
    cy.log('Authorization of the customer');
    cy.visit('https://automationteststore.com/');
    cy.contains('Login or register').click();
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.log('Search "e"');
    cy.get('#filter_keyword').type('e{enter}');
cy.log('1 page');
    cy.get('.prdocutname').then(selectors => {
      if (selectors && selectors.length > 0) {
        selectors.each((index, element) => {
          const text = Cypress.$(element).text();
          if (text.includes(product.productName)) {
            cy.get(element).click();
}})}})
cy.log('2 page');
    cy.get('div:nth-child(7) > div:nth-child(2) > ul > li:nth-child(5) > a').then(nextButton => {
    if (nextButton) {
    cy.get(nextButton).click().then(() => {
cy.log('3 page');
    cy.get('div:nth-child(7) > div:nth-child(2) > ul > li:nth-child(7) > a').then(secondNextButton => {
    if (secondNextButton) {
    cy.get(secondNextButton).click().then(() => {
    cy.get('[title="Men+Care Active Clean Shower Tool"]').click();

cy.get('[class="cart"]').click();
cy.get('#cart_checkout1').click();
// cy.get('[title="Confirm Order"]').click();
// cy.contains('YOUR ORDER HAS BEEN PROCESSED!').should('be.visible');
})}})})}})})});
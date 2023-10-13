import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../support/selectors.js";
import { users } from "../../support/users.js";

// Background Log-in function
Given("User opens {string}", (url) => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    const pageUrl = Cypress.env(url);
    cy.visit(pageUrl);
});

// Log-in process using account credentials from users.js file
And("User login as {string}", (userName) => {
    cy.get(selectors.login_input).type(users[userName].login);
    cy.get(selectors.password_input).type(users[userName].password);
    cy.get(selectors.login_button).click();
});

// Click on selector (provide variable name of a button in repository)
When("User clicks on {string}", (selectorName) => {
    cy.get(selectors[selectorName]).click();
});

// Clicks on element with provided text value
When("User clicks on {string} item", (itemNameText) => {
    cy.contains(itemNameText).click();
});

// Type text value inside input field with passed selector name in repository
And("User types {string} in {string} field", (text, selectorName) => {
    cy.get(selectors[selectorName]).type(text);
});

// Check how many "add" buttons are available, click each of them and assert value of cart capacity (number of "add" buttons should be displayed as shopping cart badge)
When("User adds all of the items to the cart", () => {
    cy.get(selectors.addItemToCart).its('length').then(($len) => {
        cy.get(selectors.addItemToCart).each(($button) => {
            cy.wrap($button).click();
        });

        cy.get(selectors.cartCapacity).should('have.text', $len.toString());
    });
});
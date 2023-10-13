import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../../support/selectors";

When("User adds {int} to the cart", (numberOfItems) => {
    for(let i = 0; i<numberOfItems; i++){
        cy.get(selectors.addItemToCart).eq(0).click();
    }
});

Then("Cart badge should display {string} items inside cart", (numberOfItems) => {
    cy.get(selectors.cartCapacity).should('have.text', numberOfItems);
});

And("User removes all of the added items", () => {
    cy.get(selectors.removeItemFromCart).each(($button) => {
        cy.wrap($button).click();
    });
});

Then("Cart should be empty", () => {
    cy.get(selectors.cartCapacity).should('not.exist');
});
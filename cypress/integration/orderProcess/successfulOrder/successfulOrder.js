import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../../support/selectors";

And("User adds item to the cart in inventory item view", () => {
    cy.get(selectors.inventoryItemDetails).find(selectors.addItemToCart).click();
});

Then("Complete order page should be displayed", () => {
    cy.get(selectors.checkoutCompleteContainer).should('be.visible').within(() => {
        cy.get("h2")
          .should('have.text', 'Thank you for your order!')
          .and('be.visible')
          .and('have.length', 1);

        cy.contains('div', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
          .and('be.visible')
          .and('have.length', 1);
    })
});


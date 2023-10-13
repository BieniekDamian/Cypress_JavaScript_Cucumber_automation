import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../../support/selectors";
import { testStore } from "../../../support/commands";

// Summary of all items price
let priceSummary = 0;

When("User stores price of the item number {int}", (itemNumber) => {
    cy.get(selectors.inventoryItem)
      .eq(itemNumber-1)
      .find(selectors.inventoryItemPrice)
      .invoke('text')
      .saveAs('price');
});

And("User adds item number {int} to the cart", (itemNumber) => {
    cy.get(selectors.inventoryItem)
      .eq(itemNumber-1)
      .find(selectors.addItemToCart)
      .click();
});

Then("Subtotal price of added single item should be displayed", () => {
    cy.get(selectors.summarySubtotalPrice)
      .invoke('text')
      .then(($text) => {
        let subtotal_price = $text.split('$')[1];
        let subtotal_float_price = parseFloat(subtotal_price);

        let stored_item_value = testStore.price;
        let stored_item_split_price = stored_item_value.split('$')[1];
        let stored_parse_price = parseFloat(stored_item_split_price);

        expect(subtotal_float_price).to.be.eq(stored_parse_price);
      })
});


When("User stores price of all products", () => {
    cy.get(selectors.inventoryItemPrice).each(($priceContainer) => {
        cy.wrap($priceContainer).invoke('text').then(($text) => {
            let itemPrice = $text.split('$')[1];
            let itemPrice_float = parseFloat(itemPrice);
            priceSummary += itemPrice_float;
        })
        return priceSummary;
    })
});

Then("Subtotal price of added items should be displayed", () => {
    cy.get(selectors.summarySubtotalPrice)
      .invoke('text')
      .then(($text) => {
        let subtotal_price = $text.split('$')[1];
        let subtotal_float_price = parseFloat(subtotal_price);

        expect(subtotal_float_price).to.be.eq(priceSummary);
      })
});
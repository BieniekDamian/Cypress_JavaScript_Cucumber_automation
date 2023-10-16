import { And, Then } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../../support/selectors";

And("User fills user information data", () => {
    cy.get(selectors.firstName).type("Automation");
    cy.get(selectors.lastName).type("Testing");
    cy.get(selectors.postalCode).type("00-404");
});

And("User clears {string} input field", (selectorName) => {
    cy.get(selectors[selectorName]).clear();
});

Then("{string} should be displayed", (errorText) => {
    cy.get(selectors.errorMissingUserInformation).should('have.text', errorText);
});
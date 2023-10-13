import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { selectors } from "../../../support/selectors";

When("User expands menu", () => {
    cy.get(selectors.menuOpen_button).click();
})

Then("User should be redirected to {string} page", (redirectedUrl) => {
    cy.url().should('eq', redirectedUrl);
});


import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("Visit page {string}", (url) => {
    cy.visit(url);
})
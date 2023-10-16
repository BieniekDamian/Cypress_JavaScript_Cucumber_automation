Feature: Check if price is correct in Overview

    Narrative
    As a User
    I want to add item to a cart
    So that I will be able to check if price has correct value

    Background: Login to the shop
        Given User opens "login_page"
        When User login as "standard_user"

    Scenario: Price check (single item)
        When User stores price of the item number 1
        And User adds item number 1 to the cart
        And User clicks on "shoppingCart"
        And User clicks on "checkout"
        And User types "Automation" in "firstName" field
        And User types "Testing" in "lastName" field
        And User types "00-404" in "postalCode" field
        And User clicks on "continue"
        Then Subtotal price of added single item should be displayed

    Scenario: Price check (multiple items)
        When User stores price of all products
        And User adds all of the items to the cart
        And User clicks on "shoppingCart"
        And User clicks on "checkout"
        And User types "Automation" in "firstName" field
        And User types "Testing" in "lastName" field
        And User types "00-404" in "postalCode" field
        And User clicks on "continue"
        Then Subtotal price of added items should be displayed
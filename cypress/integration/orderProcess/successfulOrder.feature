Feature: Create an order successfully

    Narrative
    As a User
    I want to place an order
    So that I will be informed that order has been placed


    Background: Login to the shop
        Given User opens "login_page"
        When User login as "standard_user"

    Scenario: Placing order successfully on inventory page (single item)
        When User clicks on "Sauce Labs Backpack" item
        And User adds item to the cart in inventory item view
        And User clicks on "shoppingCart"
        And User clicks on "checkout"
        And User types "Automation" in "firstName" field
        And User types "Testing" in "lastName" field
        And User types "00-404" in "postalCode" field
        And User clicks on "continue"
        And User clicks on "finish"
        Then Complete order page should be displayed

    Scenario: Placing order successfully on inventory page (multiple items)
        When User adds all of the items to the cart
        And User clicks on "shoppingCart"
        And User clicks on "checkout"
        And User types "Automation" in "firstName" field
        And User types "Testing" in "lastName" field
        And User types "00-404" in "postalCode" field
        And User clicks on "continue"
        And User clicks on "finish"
        Then Complete order page should be displayed

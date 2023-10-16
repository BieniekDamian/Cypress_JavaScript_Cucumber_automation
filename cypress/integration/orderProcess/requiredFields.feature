Feature: Checkout of required fields within order form

    Narrative
    As a User
    I want to pass incorrect or empty data inside input field
    So that validation will not let me continue the order process

    Background: Login to the shop
        Given User opens "login_page"
        When User login as "standard_user"

    Scenario Outline: Empty input field validation
        And User adds item number 1 to the cart
        And User clicks on "shoppingCart"
        And User clicks on "checkout"
        And User fills user information data
        And User clears "<selectorName>" input field
        And User clicks on "continue"
        Then "<errorText>" should be displayed
        Examples:
            | selectorName | errorText                      |
            | firstName    | Error: First Name is required  |
            | lastName     | Error: Last Name is required   |
            | postalCode   | Error: Postal Code is required |
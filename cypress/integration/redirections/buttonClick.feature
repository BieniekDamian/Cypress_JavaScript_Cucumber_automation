Feature: Clicking on crucial buttons

    Narrative
    As a User
    I want to click on button
    So that I will be redirected to different part of application 

    Background: Login to the shop
        Given User opens "login_page"
        When User login as "standard_user"

    Scenario Outline: Validate meun buttons redirection
        When User expands menu
        And User clicks on "<buttonName>"
        Then User should be redirected to "<redirectionUrl>" page
        Examples:
            | buttonName           | redirectionUrl                           |
            | allItems_anchor      | https://www.saucedemo.com/inventory.html |
            # | about_anchor         | https://saucelabs.com/                   |
            | logout_anchor        | https://www.saucedemo.com/               |
            | resetAppState_anchor | https://www.saucedemo.com/inventory.html |

    Scenario Outline: Item detail page redirection
        When User clicks on "<itemName>" item
        Then User should be redirected to "<redirectionUrl>" page
        Examples:
            | itemName                          | redirectionUrl |
            | Sauce Labs Backpack               | https://www.saucedemo.com/inventory-item.html?id=4 |
            | Sauce Labs Bike Light             | https://www.saucedemo.com/inventory-item.html?id=0 |
            | Sauce Labs Bolt T-Shirt           | https://www.saucedemo.com/inventory-item.html?id=1 |
            | Sauce Labs Fleece Jacket          | https://www.saucedemo.com/inventory-item.html?id=5 |
            | Sauce Labs Onesie                 | https://www.saucedemo.com/inventory-item.html?id=2 |
            | Test.allTheThings() T-Shirt (Red) | https://www.saucedemo.com/inventory-item.html?id=3 |
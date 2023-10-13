Feature: Feature name

    Narrative
    As a User
    I want to modify cart content
    So that cart status will be changed

    Background: Login to the shop
        Given User opens "login_page"
        When User login as "standard_user"

    # Scenario Outline: Adding specified number of items to the cart
    #     When User adds <numberOfItems> to the cart
    #     Then Cart badge should display "<numberOfItems>" items inside cart
    #     Examples:
    #         | numberOfItems |
    #         | 1             |
    #         | 2             |
    #         | 3             |
    #         | 4             |
    #         | 5             |
    #         | 6             |

    Scenario Outline: Removing specified number of items to the cart
        When User adds <numberOfItems> to the cart
        And Cart badge should display "<numberOfItems>" items inside cart
        And User removes all of the added items
        Then Cart should be empty
        Examples:
            | numberOfItems |
            | 1             |
            | 2             |
            | 3             |
            | 4             |
            | 5             |
            | 6             |
    
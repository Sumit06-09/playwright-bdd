@smoke
Feature: Product Purchase Workflow

  Scenario: Successful purchase of Sauce Labs Backpack
    Given I use test data for "standard_user"
    And I am on the SauceDemo login page
    When I login with valid credentials
    And I add "Sauce Labs Backpack" to the cart
    And I navigate to the cart and click checkout
    And I complete the checkout process
    Then I should see the "Thank you for your order!" header
    And the order status should be correct in the database
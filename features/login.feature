Feature: User Authentication

  Background:
    Given I am on the SauceDemo login page

  Scenario: Successful login with standard user
    When I login with "standard_user"
    Then I should be redirected to the inventory page

  Scenario: Show error for locked out user
    When I login with "locked_out_user"
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."
    And I should remain on the login page
Feature: To check the signup and login functionality of Shoptool

    Shoptool login functionality

    Scenario: Register user to a SHOPTOOL website
        Given I open the SHOPTOOL website
        When I enter the username
        When I enter the email address
        When I enter the password
        When I click on unmasking password
        When I click on register button
        Then I should be in signed up page
        When I click on logout button
        Then I should be logout of my account

    Scenario: Login and Placing Orders
        Given I open the SHOPTOOL
        When I enter the username and the password
        When I click on the login button
        Then I should be in the homepage
        When I go to the products page
        When I select a product
        When I select size and colour of the product
        When I select the quantity of the product
        When I click to Add To CART
        Then I go to my cart
        When I  click on proceed to checkout
        When I enter the billing details
        When I click on the place order button
        Then I verify the place order page
        Then I logout of my account




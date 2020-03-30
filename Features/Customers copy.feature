Feature: As a user I should be able to add a customer

    Scenario Outline: Add Customer:
        Given I am on XYZ Bank home page
        Then I open Add Customer screen
        Then I should create a customer with <firstName>, <lastName>, <postCode>

        Examples:
            | firstName | lastName | postCode |
            | Cust_fn   | Cust_ln  | 1234     |
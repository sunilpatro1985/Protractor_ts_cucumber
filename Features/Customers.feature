Feature: As a user I should be able to add a customer

    Scenario Outline: Add Customer:
        Given I am on XYZ Bank home page
        Then I go to Add Customer screen
        Then I should create a customer with <firstName>, <lastName>, <postCode>

    Scenario Outline: Open Account:
        Given I am on XYZ Bank home page
        Then I go to Open Account page
        Then I should select the <firstName> <lastName> as customer
        Then I should select the currency as "Rupee"
        Then I should click on Process to create an account

    # Scenario Outline: Search & delete Customer:
    #     Given I am on Customers screen
    #     And I should search with <firstName>
    #     Then I should see <firstName>,<lastName>,<postCode> on the grid
    #     Then I should be able to delete the customer

        Examples:
            | firstName | lastName | postCode |
            | Cust_fn   | Cust_ln  | 1234     |
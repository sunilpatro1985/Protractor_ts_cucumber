Feature: As a user I should be able to add a customer

    Scenario Outline: Add Customer
        Given I am on XYZ Bank home page
        Then I go to Add Customer screen
        Then I enter <firstName>, <lastName>, <postCode> to create a customer

        Examples:
            | firstName | lastName | postCode |
            | Cust_fn   | Cust_ln  | 1234     |

    Scenario Outline: Open Account
        Given I am on Open Account Page
        When I select <customerName> as customer
        And I select currency as "Rupee"
        Then I should click on Process to create an account

        Examples:
            | customerName | 
            | Cust_fn Cust_ln  | 

# Scenario Outline: Search & delete Customer:
#     Given I am on Customers screen
#     And I should search with <firstName>
#     Then I should see <firstName>,<lastName>,<postCode> on the grid
#     Then I should be able to delete the customer


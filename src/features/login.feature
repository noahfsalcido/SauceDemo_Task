Feature: Login Page

  @UC-1
  Scenario Outline: UC-1 Test Login form with empty credentials

    Given I am on the "login" page
    When I type credentials into "<username>" and "<password>" fields.
    When I clear the inputs.
    When I hit the "Login" button.
    Then page error should "be equal to" "Epic sadface: Username is required"

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce | 
      | locked_out_user         | secret_sauce | 
      | problem_user            | secret_sauce | 
      | performance_glitch_user | secret_sauce | 
      | error_user              | secret_sauce | 
      | visual_user             | secret_sauce | 

  @UC-2
  Scenario Outline: UC-2 Test Login form with credentials by passing Username

    Given I am on the "login" page
    When I type credentials into "<username>" and "<password>" fields.
    When I clear the Password input.
    When I hit the "Login" button.
    Then page error should "contain" "Epic sadface: Password is required"

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce | 
      | locked_out_user         | secret_sauce | 
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  @UC-3
  Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password

    Given I am on the "login" page
    When I type credentials into "<username>" and "<password>" fields.
    When I hit the "Login" button.
    Then page title should "be equal to" "Swag Labs"

    Examples:
      | username                | password     | 
      | standard_user           | secret_sauce | 
      | problem_user            | secret_sauce | 
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |
      #| locked_out_user         | secret_sauce | user don't get to dashboard
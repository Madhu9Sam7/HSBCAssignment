@regressionRates
Feature: Rates API test

@LatestExchange
Scenario Outline: To validate the status code for Rates API for Latest Foriegn Exchange rate
    Given Rates API for <URL>
    When The API is available for GET call
    Then I validate the <success> status

    Examples: 
      |success   |URL                                  |
      |200       |https://api.ratesapi.io/api/latest   |
      
@LatestExchange    
Scenario Outline: To validate the status code for Rates API for specific currency
		Given Rates API validate success status of the response for specific currency for <URL>
    When The API is available for GET call for <currency> against <currencyCompare> for <URL>
    Then I validate the <success> status

    Examples: 
      |success   |currency|currencyCompare|URL                                         |
      |200       |USD     |GBP            |https://api.ratesapi.io/api/latest?symbols= |

 @LatestExchange     
Scenario Outline: To validate the error message when incorrect url is provided as input
    Given Rates API for <URL>
    When The API is available for GET call
    Then I validate the <error> message
    
    Examples:
    |error|URL                                |
    |error|https://api.ratesapi.io/api        |
     
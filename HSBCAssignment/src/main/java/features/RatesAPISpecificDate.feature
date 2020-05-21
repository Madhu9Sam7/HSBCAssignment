@regressionRates
Feature: Rates API test for specific date

@SpecificDate
Scenario Outline: To validate the status code for Rates API for specific date
    Given Rates API for <URL>
    When The API is available for GET call
    Then I validate the <success> status

    Examples: 
      |success   |URL                                      |
      |200       |https://api.ratesapi.io/api/2010-01-12   |

@SpecificDate      
Scenario Outline: To validate the status code for Rates API for specific currency for specific date
		Given Rates API validate success status of the response for specific currency for <URL>
    When The API is available for GET call for <currency> against <currencyCompare> for <URL>
    Then I validate the <success> status

    Examples: 
      |success   |currency|currencyCompare|URL                                             |
      |200       |USD     |GBP            |https://api.ratesapi.io/api/2010-01-12?symbols= |

 
@SpecificDate     
Scenario Outline: To validate Rates API returns the data for current date even if Future Date is passed
    Given Rates API for <URL>
    When The API is available for GET call
    Then I validate the response received
    
    Examples:
    |error|URL                                           |
    |error|https://api.ratesapi.io/api/2020-08-12        |
     
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RatesAPILates.feature");
formatter.feature({
  "line": 2,
  "name": "Rates API test",
  "description": "",
  "id": "rates-api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressionRates"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To validate the status code for Rates API for Latest Foriegn Exchange rate",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-latest-foriegn-exchange-rate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Rates API for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the \u003csuccess\u003e status",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-latest-foriegn-exchange-rate;",
  "rows": [
    {
      "cells": [
        "success",
        "URL"
      ],
      "line": 11,
      "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-latest-foriegn-exchange-rate;;1"
    },
    {
      "cells": [
        "200",
        "https://api.ratesapi.io/api/latest"
      ],
      "line": 12,
      "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-latest-foriegn-exchange-rate;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "To validate the status code for Rates API for Latest Foriegn Exchange rate",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-latest-foriegn-exchange-rate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionRates"
    },
    {
      "line": 4,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Rates API for https://api.ratesapi.io/api/latest",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the 200 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest",
      "offset": 14
    }
  ],
  "location": "RatesAPIStepDefination.setupURI(String)"
});
formatter.result({
  "duration": 957051500,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPIStepDefination.setRequestMethodType()"
});
formatter.result({
  "duration": 2424131600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "RatesAPIStepDefination.validateStatusCode(int)"
});
formatter.result({
  "duration": 3737800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "To validate the status code for Rates API for specific currency",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-specific-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Rates API validate success status of the response for specific currency for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The API is available for GET call for \u003ccurrency\u003e against \u003ccurrencyCompare\u003e for \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate the \u003csuccess\u003e status",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-specific-currency;",
  "rows": [
    {
      "cells": [
        "success",
        "currency",
        "currencyCompare",
        "URL"
      ],
      "line": 21,
      "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-specific-currency;;1"
    },
    {
      "cells": [
        "200",
        "USD",
        "GBP",
        "https://api.ratesapi.io/api/latest?symbols\u003d"
      ],
      "line": 22,
      "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-specific-currency;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "To validate the status code for Rates API for specific currency",
  "description": "",
  "id": "rates-api-test;to-validate-the-status-code-for-rates-api-for-specific-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionRates"
    },
    {
      "line": 14,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Rates API validate success status of the response for specific currency for https://api.ratesapi.io/api/latest?symbols\u003d",
  "matchedColumns": [
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The API is available for GET call for USD against GBP for https://api.ratesapi.io/api/latest?symbols\u003d",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate the 200 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest?symbols\u003d",
      "offset": 76
    }
  ],
  "location": "RatesAPIStepDefination.validateResponseForSpecificCurrency(String)"
});
formatter.result({
  "duration": 1157200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 38
    },
    {
      "val": "GBP",
      "offset": 50
    },
    {
      "val": "https://api.ratesapi.io/api/latest?symbols\u003d",
      "offset": 58
    }
  ],
  "location": "RatesAPIStepDefination.verifyStatusCodeForSpecificCurrency(String,String,String)"
});
formatter.result({
  "duration": 471681200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "RatesAPIStepDefination.validateStatusCode(int)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "To validate the error message when incorrect url is provided as input",
  "description": "",
  "id": "rates-api-test;to-validate-the-error-message-when-incorrect-url-is-provided-as-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Rates API for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate the \u003cerror\u003e message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "rates-api-test;to-validate-the-error-message-when-incorrect-url-is-provided-as-input;",
  "rows": [
    {
      "cells": [
        "error",
        "URL"
      ],
      "line": 31,
      "id": "rates-api-test;to-validate-the-error-message-when-incorrect-url-is-provided-as-input;;1"
    },
    {
      "cells": [
        "error",
        "https://api.ratesapi.io/api"
      ],
      "line": 32,
      "id": "rates-api-test;to-validate-the-error-message-when-incorrect-url-is-provided-as-input;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "To validate the error message when incorrect url is provided as input",
  "description": "",
  "id": "rates-api-test;to-validate-the-error-message-when-incorrect-url-is-provided-as-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionRates"
    },
    {
      "line": 24,
      "name": "@LatestExchange"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Rates API for https://api.ratesapi.io/api",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate the error message",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api",
      "offset": 14
    }
  ],
  "location": "RatesAPIStepDefination.setupURI(String)"
});
formatter.result({
  "duration": 1079100,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPIStepDefination.setRequestMethodType()"
});
formatter.result({
  "duration": 1806371800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 15
    }
  ],
  "location": "RatesAPIStepDefination.i_validate_the_error_message(String)"
});
formatter.result({
  "duration": 45355800,
  "status": "passed"
});
formatter.uri("RatesAPISpecificDate.feature");
formatter.feature({
  "line": 2,
  "name": "Rates API test for specific date",
  "description": "",
  "id": "rates-api-test-for-specific-date",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressionRates"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To validate the status code for Rates API for specific date",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SpecificDate"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Rates API for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the \u003csuccess\u003e status",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-date;",
  "rows": [
    {
      "cells": [
        "success",
        "URL"
      ],
      "line": 11,
      "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-date;;1"
    },
    {
      "cells": [
        "200",
        "https://api.ratesapi.io/api/2010-01-12"
      ],
      "line": 12,
      "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-date;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "To validate the status code for Rates API for specific date",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SpecificDate"
    },
    {
      "line": 1,
      "name": "@regressionRates"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Rates API for https://api.ratesapi.io/api/2010-01-12",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the 200 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/2010-01-12",
      "offset": 14
    }
  ],
  "location": "RatesAPIStepDefination.setupURI(String)"
});
formatter.result({
  "duration": 6890900,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPIStepDefination.setRequestMethodType()"
});
formatter.result({
  "duration": 1445076500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "RatesAPIStepDefination.validateStatusCode(int)"
});
formatter.result({
  "duration": 208100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "To validate the status code for Rates API for specific currency for specific date",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-currency-for-specific-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SpecificDate"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Rates API validate success status of the response for specific currency for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The API is available for GET call for \u003ccurrency\u003e against \u003ccurrencyCompare\u003e for \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate the \u003csuccess\u003e status",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-currency-for-specific-date;",
  "rows": [
    {
      "cells": [
        "success",
        "currency",
        "currencyCompare",
        "URL"
      ],
      "line": 21,
      "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-currency-for-specific-date;;1"
    },
    {
      "cells": [
        "200",
        "USD",
        "GBP",
        "https://api.ratesapi.io/api/2010-01-12?symbols\u003d"
      ],
      "line": 22,
      "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-currency-for-specific-date;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "To validate the status code for Rates API for specific currency for specific date",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-the-status-code-for-rates-api-for-specific-currency-for-specific-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SpecificDate"
    },
    {
      "line": 1,
      "name": "@regressionRates"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Rates API validate success status of the response for specific currency for https://api.ratesapi.io/api/2010-01-12?symbols\u003d",
  "matchedColumns": [
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The API is available for GET call for USD against GBP for https://api.ratesapi.io/api/2010-01-12?symbols\u003d",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I validate the 200 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/2010-01-12?symbols\u003d",
      "offset": 76
    }
  ],
  "location": "RatesAPIStepDefination.validateResponseForSpecificCurrency(String)"
});
formatter.result({
  "duration": 594800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 38
    },
    {
      "val": "GBP",
      "offset": 50
    },
    {
      "val": "https://api.ratesapi.io/api/2010-01-12?symbols\u003d",
      "offset": 58
    }
  ],
  "location": "RatesAPIStepDefination.verifyStatusCodeForSpecificCurrency(String,String,String)"
});
formatter.result({
  "duration": 575963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "RatesAPIStepDefination.validateStatusCode(int)"
});
formatter.result({
  "duration": 268300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "To validate Rates API returns the data for current date even if Future Date is passed",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-rates-api-returns-the-data-for-current-date-even-if-future-date-is-passed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SpecificDate"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Rates API for \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I validate the response received",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-rates-api-returns-the-data-for-current-date-even-if-future-date-is-passed;",
  "rows": [
    {
      "cells": [
        "error",
        "URL"
      ],
      "line": 32,
      "id": "rates-api-test-for-specific-date;to-validate-rates-api-returns-the-data-for-current-date-even-if-future-date-is-passed;;1"
    },
    {
      "cells": [
        "error",
        "https://api.ratesapi.io/api/2020-08-12"
      ],
      "line": 33,
      "id": "rates-api-test-for-specific-date;to-validate-rates-api-returns-the-data-for-current-date-even-if-future-date-is-passed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "To validate Rates API returns the data for current date even if Future Date is passed",
  "description": "",
  "id": "rates-api-test-for-specific-date;to-validate-rates-api-returns-the-data-for-current-date-even-if-future-date-is-passed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SpecificDate"
    },
    {
      "line": 1,
      "name": "@regressionRates"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Rates API for https://api.ratesapi.io/api/2020-08-12",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "The API is available for GET call",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I validate the response received",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/2020-08-12",
      "offset": 14
    }
  ],
  "location": "RatesAPIStepDefination.setupURI(String)"
});
formatter.result({
  "duration": 1020000,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPIStepDefination.setRequestMethodType()"
});
formatter.result({
  "duration": 472381300,
  "status": "passed"
});
formatter.match({
  "location": "RatesAPIStepDefination.validateResponse()"
});
formatter.result({
  "duration": 653539500,
  "error_message": "junit.framework.ComparisonFailure: Data is not displayed for current date only expected:\u003c2020[/05/21]\u003e but was:\u003c2020[-05-20]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat stepDefinations.RatesAPIStepDefination.validateResponse(RatesAPIStepDefination.java:99)\r\n\tat ✽.Then I validate the response received(RatesAPISpecificDate.feature:29)\r\n",
  "status": "failed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Verify RestAPI",
  "description": "",
  "id": "verify-restapi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"\u003ccountryName\u003e\" details",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"\u003ccapital\u003e\" \"\u003ccurrencies\u003e\" \"\u003cregion\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;",
  "rows": [
    {
      "cells": [
        "countryName",
        "capital",
        "currencies",
        "region"
      ],
      "line": 9,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;1"
    },
    {
      "cells": [
        "Afghanistan",
        "Kabul",
        "AFN",
        "Asia"
      ],
      "line": 11,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;2"
    },
    {
      "cells": [
        "Åland Islands",
        "Mariehamn",
        "EUR",
        "Europe"
      ],
      "line": 13,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;3"
    },
    {
      "cells": [
        "Albania",
        "Tirana",
        "ALL",
        "Europe"
      ],
      "line": 15,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;4"
    },
    {
      "cells": [
        "Algeria",
        "Algiers",
        "DZD",
        "Africa"
      ],
      "line": 17,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;5"
    },
    {
      "cells": [
        "American Samoa",
        "Pago Pago",
        "USD",
        "Oceania"
      ],
      "line": 19,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;6"
    },
    {
      "cells": [
        "USA",
        "Washington, D.C.",
        "USD",
        "Americas"
      ],
      "line": 21,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;7"
    },
    {
      "cells": [
        "Taiwan",
        "Taipei",
        "TWD",
        "Asia"
      ],
      "line": 23,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;8"
    },
    {
      "cells": [
        "Kenya",
        "Nairobi",
        "KES",
        "Africa"
      ],
      "line": 25,
      "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Afghanistan\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Kabul\" \"AFN\" \"Asia\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 776088433,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 2296516765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kabul",
      "offset": 67
    },
    {
      "val": "AFN",
      "offset": 75
    },
    {
      "val": "Asia",
      "offset": 81
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 19982765,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Åland Islands\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Mariehamn\" \"EUR\" \"Europe\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Åland Islands",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 145674,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 225713110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariehamn",
      "offset": 67
    },
    {
      "val": "EUR",
      "offset": 79
    },
    {
      "val": "Europe",
      "offset": 85
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 2578584,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Albania\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Tirana\" \"ALL\" \"Europe\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Albania",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 117922,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 234750764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tirana",
      "offset": 67
    },
    {
      "val": "ALL",
      "offset": 76
    },
    {
      "val": "Europe",
      "offset": 82
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 5468157,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Algeria\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Algiers\" \"DZD\" \"Africa\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Algeria",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 116506,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 203356714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algiers",
      "offset": 67
    },
    {
      "val": "DZD",
      "offset": 77
    },
    {
      "val": "Africa",
      "offset": 83
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 1669069,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"American Samoa\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Pago Pago\" \"USD\" \"Oceania\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "American Samoa",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 134476,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 205128417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pago Pago",
      "offset": 67
    },
    {
      "val": "USD",
      "offset": 79
    },
    {
      "val": "Oceania",
      "offset": 85
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 5374711,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"USA\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Washington, D.C.\" \"USD\" \"Americas\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 173815,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 208151748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Washington, D.C.",
      "offset": 67
    },
    {
      "val": "USD",
      "offset": 86
    },
    {
      "val": "Americas",
      "offset": 92
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 2620777,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Taiwan\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Taipei\" \"TWD\" \"Asia\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Taiwan",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 133205,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 212032571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taipei",
      "offset": 67
    },
    {
      "val": "TWD",
      "offset": 76
    },
    {
      "val": "Asia",
      "offset": 82
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 2776641,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verify-restapi;verify-each-country-capital-region-and-currencies;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have rest api web service url which will return each country \"Kenya\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get all the details for the requested country \"Nairobi\" \"KES\" \"Africa\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Kenya",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 169146,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 230960181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nairobi",
      "offset": 67
    },
    {
      "val": "KES",
      "offset": 77
    },
    {
      "val": "Africa",
      "offset": 83
    }
  ],
  "location": "RestSteps.getFullDetailsOfEachCountry(String,String,String)"
});
formatter.result({
  "duration": 2296793,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "",
  "description": "",
  "id": "verify-restapi;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I have rest api web service url which will return each country \"\u003ccountryName\u003e\" details",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should be able to get the details of each country translations \"\u003ctranslations\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "verify-restapi;;",
  "rows": [
    {
      "cells": [
        "countryName",
        "translations"
      ],
      "line": 34,
      "id": "verify-restapi;;;1"
    },
    {
      "cells": [
        "USA",
        "de:Vereinigte Staaten von Amerika,es:Estados Unidos,fr:États-Unis,ja:アメリカ合衆国,it:Stati Uniti D\u0027America"
      ],
      "line": 35,
      "id": "verify-restapi;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "",
  "description": "",
  "id": "verify-restapi;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I have rest api web service url which will return each country \"USA\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I  call the rest api url",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should be able to get the details of each country translations \"de:Vereinigte Staaten von Amerika,es:Estados Unidos,fr:États-Unis,ja:アメリカ合衆国,it:Stati Uniti D\u0027America\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 64
    }
  ],
  "location": "RestSteps.getUrlforEachCountry(String)"
});
formatter.result({
  "duration": 647884,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 818658622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de:Vereinigte Staaten von Amerika,es:Estados Unidos,fr:États-Unis,ja:アメリカ合衆国,it:Stati Uniti D\u0027America",
      "offset": 66
    }
  ],
  "location": "RestSteps.getTranslationsForEachCountry(String)"
});
formatter.result({
  "duration": 1991925,
  "status": "passed"
});
});
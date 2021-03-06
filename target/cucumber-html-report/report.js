$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying each Countries details through RestApi WebService",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies",
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
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;",
  "rows": [
    {
      "cells": [
        "countryName",
        "capital",
        "currencies",
        "region"
      ],
      "line": 9,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;1"
    },
    {
      "cells": [
        "Afghanistan",
        "Kabul",
        "AFN",
        "Asia"
      ],
      "line": 11,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;2"
    },
    {
      "cells": [
        "Åland Islands",
        "Mariehamn",
        "EUR",
        "Europe"
      ],
      "line": 13,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;3"
    },
    {
      "cells": [
        "Albania",
        "Tirana",
        "ALL",
        "Europe"
      ],
      "line": 15,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;4"
    },
    {
      "cells": [
        "Algeria",
        "Algiers",
        "DZD",
        "Africa"
      ],
      "line": 17,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;5"
    },
    {
      "cells": [
        "American Samoa",
        "Pago Pago",
        "USD",
        "Oceania"
      ],
      "line": 19,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;6"
    },
    {
      "cells": [
        "USA",
        "Washington, D.C.",
        "USD",
        "Americas"
      ],
      "line": 21,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;7"
    },
    {
      "cells": [
        "Taiwan",
        "Taipei",
        "TWD",
        "Asia"
      ],
      "line": 23,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;8"
    },
    {
      "cells": [
        "Kenya",
        "Nairobi",
        "KES",
        "Africa"
      ],
      "line": 25,
      "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;2",
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
  "duration": 788890419,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 1548628499,
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
  "duration": 16287557,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;3",
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
  "duration": 137083,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 269525269,
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
  "duration": 3412737,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;4",
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
  "duration": 113764,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 237181278,
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
  "duration": 2583710,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;5",
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
  "duration": 133672,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 238251679,
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
  "duration": 2315967,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;6",
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
  "duration": 114453,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 237450012,
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
  "duration": 2477870,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;7",
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
  "duration": 123044,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 202270242,
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
  "duration": 2115114,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;8",
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
  "duration": 132521,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 203652848,
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
  "duration": 2083120,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify each country capital region and currencies",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;verify-each-country-capital-region-and-currencies;;9",
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
  "duration": 121929,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 199940146,
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
  "duration": 2356280,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;",
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
  "id": "verifying-each-countries-details-through-restapi-webservice;;",
  "rows": [
    {
      "cells": [
        "countryName",
        "translations"
      ],
      "line": 34,
      "id": "verifying-each-countries-details-through-restapi-webservice;;;1"
    },
    {
      "cells": [
        "USA",
        "de:Vereinigte Staaten von Amerika,es:Estados Unidos,fr:États-Unis,ja:アメリカ合衆国,it:Stati Uniti D\u0027America"
      ],
      "line": 35,
      "id": "verifying-each-countries-details-through-restapi-webservice;;;2"
    },
    {
      "cells": [
        "Afghanistan",
        "de:Afghanistan,es:Afganistán,fr:Afghanistan,ja:アフガニスタン,it:Afghanistan"
      ],
      "line": 36,
      "id": "verifying-each-countries-details-through-restapi-webservice;;;3"
    },
    {
      "cells": [
        "Kenya",
        "de:Kenia,es:Kenia,fr:Kenya,ja:ケニア,it:Kenya"
      ],
      "line": 37,
      "id": "verifying-each-countries-details-through-restapi-webservice;;;4"
    },
    {
      "cells": [
        "Taiwan",
        "de:Taiwan,es:Taiwán,fr:Taïwan,ja:台湾（台湾省/中華民国）,it:Taiwan"
      ],
      "line": 38,
      "id": "verifying-each-countries-details-through-restapi-webservice;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;;;2",
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
  "duration": 136680,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 203900097,
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
  "duration": 2441782,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I have rest api web service url which will return each country \"Afghanistan\" details",
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
  "name": "I should be able to get the details of each country translations \"de:Afghanistan,es:Afganistán,fr:Afghanistan,ja:アフガニスタン,it:Afghanistan\"",
  "matchedColumns": [
    1
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
  "duration": 128750,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 256438239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de:Afghanistan,es:Afganistán,fr:Afghanistan,ja:アフガニスタン,it:Afghanistan",
      "offset": 66
    }
  ],
  "location": "RestSteps.getTranslationsForEachCountry(String)"
});
formatter.result({
  "duration": 3605142,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I have rest api web service url which will return each country \"Kenya\" details",
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
  "name": "I should be able to get the details of each country translations \"de:Kenia,es:Kenia,fr:Kenya,ja:ケニア,it:Kenya\"",
  "matchedColumns": [
    1
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
  "duration": 122073,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 205858121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de:Kenia,es:Kenia,fr:Kenya,ja:ケニア,it:Kenya",
      "offset": 66
    }
  ],
  "location": "RestSteps.getTranslationsForEachCountry(String)"
});
formatter.result({
  "duration": 3155967,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "",
  "id": "verifying-each-countries-details-through-restapi-webservice;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I have rest api web service url which will return each country \"Taiwan\" details",
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
  "name": "I should be able to get the details of each country translations \"de:Taiwan,es:Taiwán,fr:Taïwan,ja:台湾（台湾省/中華民国）,it:Taiwan\"",
  "matchedColumns": [
    1
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
  "duration": 144870,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.getRestApiUrl()"
});
formatter.result({
  "duration": 215007896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de:Taiwan,es:Taiwán,fr:Taïwan,ja:台湾（台湾省/中華民国）,it:Taiwan",
      "offset": 66
    }
  ],
  "location": "RestSteps.getTranslationsForEachCountry(String)"
});
formatter.result({
  "duration": 1670889,
  "status": "passed"
});
});
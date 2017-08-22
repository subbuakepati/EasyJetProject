Feature: Verifying each Countries details through RestApi WebService


  Scenario Outline: Verify each country capital region and currencies
    Given I have rest api web service url which will return each country "<countryName>" details
    When I  call the rest api url
    Then I should be able to get all the details for the requested country "<capital>" "<currencies>" "<region>"
    Examples:
      |countryName           |capital             |currencies     |region       |

      |Afghanistan           |Kabul               | AFN           |Asia          |

      |Åland Islands         |Mariehamn           |  EUR          |Europe        |

      |Albania               |Tirana              |ALL            |Europe        |

      | Algeria              |Algiers             |DZD            |Africa        |

      | American Samoa       |Pago Pago           |USD            |Oceania       |

      | USA                  |Washington, D.C.    |USD            |Americas      |

      | Taiwan               |Taipei              |  TWD          | Asia         |

      |Kenya                 | Nairobi            |KES            |Africa        |


    Scenario Outline:

      Given I have rest api web service url which will return each country "<countryName>" details
      When I  call the rest api url
      Then I should be able to get the details of each country translations "<translations>"
      Examples:
      |countryName     |     translations|
      |USA             |     de:Vereinigte Staaten von Amerika,es:Estados Unidos,fr:États-Unis,ja:アメリカ合衆国,it:Stati Uniti D'America      |
      |Afghanistan     |     de:Afghanistan,es:Afganistán,fr:Afghanistan,ja:アフガニスタン,it:Afghanistan                                      |
      |Kenya           |     de:Kenia,es:Kenia,fr:Kenya,ja:ケニア,it:Kenya                                                                    |
      |Taiwan          |     de:Taiwan,es:Taiwán,fr:Taïwan,ja:台湾（台湾省/中華民国）,it:Taiwan                                                                                                             |














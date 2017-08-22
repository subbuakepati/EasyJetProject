package com.restapi.test.stepDefs;

import com.google.gson.Gson;
import com.restapi.test.common.EndPoint;
import com.restapi.test.common.RestAssuredConfiguration;
import com.restapi.test.models.ListOfCountryDetails;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static org.junit.Assert.*;


public class RestSteps extends RestAssuredConfiguration {

    private  String url = null;
    private  Response rs = null;
    private ListOfCountryDetails eachCountryDetails;
    private List<ListOfCountryDetails> allCountryDetails ;
    private Map<String,String> translations = new HashMap<String,String>();
    private JSONArray ja;
    Gson gson = new Gson();
    String countryName;

    @Given("^I have rest api web service url which will return each country \"([^\"]*)\" details$")
    public void getUrlforEachCountry(String countryName)  {
        url = EndPoint.GET_EACH_COUNTRY_DETAILS.replace("{countryName}",countryName);
    }

    @When("^I  call the rest api url$")
    public void getRestApiUrl()  {
        rs =  givenConfig().log().all().when().get(url).then().log().all()
                .spec(getResponseSpecBuilder()).extract().response();
    }

    @Then("^I should be able to get all the details for the requested country \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void getFullDetailsOfEachCountry(String capital, String currencies, String region) throws Exception {

        ja = new JSONArray(rs.getBody().asString());
        for(int i=0;i<ja.length();i++) {
            System.out.print("extracted length ..." + ja.length());
            JSONObject ob = ja.getJSONObject(i);
            System.out.println("extracted json ..." + ob.toString());
            eachCountryDetails = gson.fromJson(ob.toString(), ListOfCountryDetails.class);
            assertEquals("Capital of "+eachCountryDetails.getName()+ "should be equal", capital, eachCountryDetails.getCapital());
            assertEquals("Currencies of "+eachCountryDetails.getName()+ "should be equal",currencies, eachCountryDetails.getCurrencies().get(0));
            assertEquals("Region of "+eachCountryDetails.getName()+ "should be equal",region, eachCountryDetails.getRegion());
        }
    }

    @Then("^I should be able to get the details of each country translations \"([^\"]*)\"$")
    public void getTranslationsForEachCountry(String translationsExpected) throws Exception{

        ja = new JSONArray(rs.getBody().asString());

        String[] div = translationsExpected.split(",");
        Map<String, String> expected = new HashMap<String, String>();
        for (int i = 0; i < div.length; i++) {
            String[] colonseparated = div[i].split(":");
            expected.put(colonseparated[0], colonseparated[1]);
        }

        for(int i=0;i<ja.length();i++) {
            System.out.print("extracted length ..." + ja.length());
            JSONObject ob = ja.getJSONObject(i);
            System.out.println("extracted json ..." + ob.toString());
            eachCountryDetails = gson.fromJson(ob.toString(), ListOfCountryDetails.class);
            this.translations = eachCountryDetails.getTranslations();
            assertTrue("translations of "+eachCountryDetails.getName()+ "should be equal",expected.equals(translations));
        }
    }

}


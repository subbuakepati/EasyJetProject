package com.restapi.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions( features = "src/test/resources/features/Sample.feature",plugin = { "html:target/cucumber-html-report",
        "junit:build/cucumber-junit.xml",
        "json:build/cucumber.json",
        "pretty:build/cucumber-pretty.txt",
        "usage:build/cucumber-usage.json"
})
public class RunnerTest {
}

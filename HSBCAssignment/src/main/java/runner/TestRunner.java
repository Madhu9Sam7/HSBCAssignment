package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="C:\\Users\\Sameer\\AppiumTest\\HSBCAssignment\\src\\main\\java\\features"
	,glue={"stepDefinations"}
	,tags={"@regressionRates"}
	,plugin={"html:target/cucumber-html-report"}
	)



public class TestRunner extends AbstractTestNGCucumberTests{

}

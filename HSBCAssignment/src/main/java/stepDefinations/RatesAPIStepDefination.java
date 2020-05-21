package stepDefinations;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.testng.log4testng.Logger;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;




public class RatesAPIStepDefination {
	static Logger logger = Logger. getLogger(RatesAPIStepDefination.class);
	private RequestSpecification httpRequest;
	private Response response;

	
	/**
	 * @author Sameer
	 * Below method will instantiate baseURI
	 *
	 */
	@Given("^Rates API for ([^\"]*)$")
	public void setupURI(String uri) throws Throwable {
		// specify base URI
		RestAssured.baseURI = uri;
		logger.info("URI accessed is "+uri);
		// specify request object
		this.httpRequest = RestAssured.given();
	}

	/**
	 * @author Sameer
	 * This method will give call to GET method 
	 *
	 */
	
	@When("^The API is available for GET call$")
	public void setRequestMethodType() throws Throwable {
		// specify response object
		this.response = this.httpRequest.request(Method.GET);

	}
	
	/**
	 * @author Sameer
	 * This method will verify status code with expected status code 
	 *
	 */

	@Then("^I validate the (\\d+) status$")
	public void validateStatusCode(int statusCode) throws Throwable {
		Assert.assertEquals("Status code is not matching", statusCode, this.response.getStatusCode());

	}
	
	

	@Given("^Rates API validate success status of the response for specific currency for ([^\"]*)$")
	public void validateResponseForSpecificCurrency(String url) throws Throwable {
		RestAssured.baseURI = url+"USD,GBP";
		this.httpRequest = RestAssured.given();

	}
	
	/**
	 * @author Sameer
	 * This method will provide call based on specific country 
	 *
	 */

	@When("^The API is available for GET call for ([^\"]*) against ([^\"]*) for ([^\"]*)$")
	public void verifyStatusCodeForSpecificCurrency(String curr1, String curr2, String url) throws Throwable {
		logger.info("Currencies passed are "+curr1 + " and "+curr2);
		RestAssured.baseURI = url + curr1 + "," + curr2 + "";
		this.httpRequest = RestAssured.given();
		setRequestMethodType();
	}
	
	/**
	 * @author Sameer
	 * This method will validate the response received for future date 
	 *
	 */
	
	@Then("^I validate the response received$")
	public void validateResponse() throws Throwable {
      DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");  
      LocalDateTime now = LocalDateTime.now();     
      logger.info("Current system date is "+dtf.format(now));
      Assert.assertEquals("Data is not displayed for current date only", dtf.format(now), this.response.jsonPath().getString("date"));
		
	}

	/**
	 * @author Sameer
	 * This method will validate error message thrown by incorret url 
	 *
	 */

	@Then("^I validate the ([^\"]*) message$")
	public void i_validate_the_error_message(String message) throws Throwable {
		Assert.assertTrue("Error message is not getting displayed",
				this.response.getBody().asString().contains(message));
		//Assert.assertEquals("Message is not matching", message, this.response.getBody().asString());

	}

}

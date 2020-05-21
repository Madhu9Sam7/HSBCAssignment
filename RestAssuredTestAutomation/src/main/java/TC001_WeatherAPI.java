import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class TC001_WeatherAPI {

	@Test
	void getWeatherDetails() {

		// specify base URI
		RestAssured.baseURI = "https://api.ratesapi.io/api/latest";

		// specify request object
		
		RequestSpecification httpRequest = RestAssured.given();

		// specify response object

		Response response = httpRequest.request(Method.GET);

		// print response

		String responseBody = response.getBody().asString();

		System.out.println("Response Body id " + responseBody);

		System.out.println(response.getStatusCode());
		System.out.println(response.getStatusLine());
	}

}

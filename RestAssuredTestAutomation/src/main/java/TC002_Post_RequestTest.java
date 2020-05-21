import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class TC002_Post_RequestTest {
	
	@Test
	void getPostMessage(){
		
		// specify base URI
				RestAssured.baseURI = "https://restapi.demoqa.com/customer";

				// specify request object
				
				RequestSpecification httpRequest = RestAssured.given();
				
				JSONObject jasonObject=new JSONObject();
				
				jasonObject.put("FirstName", "TestFirstName43434");
				jasonObject.put("LastName", "TestLastName");
				jasonObject.put("UserName", "TestUserName");
				jasonObject.put("Password", "TestPassword");
				jasonObject.put("Email", "TestFirstNametrt545454@gmail.com");
				
				httpRequest.header("content-Type", "application/json");
				
				httpRequest.body(jasonObject.toJSONString());

				// specify response object

				Response response = httpRequest.request(Method.POST, "/register");

				// print response

				String responseBody = response.getBody().asString();

				System.out.println("Response Body id " + responseBody);

				System.out.println(response.getStatusCode());
				//System.out.println(response.getStatusLine());

	}
	
	

}

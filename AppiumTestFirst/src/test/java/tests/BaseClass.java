package tests;

import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import io.appium.java_client.remote.MobileCapabilityType;

public class BaseClass {

	@BeforeTest
	public void setup() {
		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(CapabilityType.PLATFORM_NAME, "IOS");
		caps.setCapability(MobileCapabilityType.PLATFORM_VERSION, "");
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "");
		caps.setCapability(MobileCapabilityType.UDID, "");
		caps.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, "60");
		caps.setCapability(MobileCapabilityType.BROWSER_NAME, "Chrome");
	}

	@AfterTest
	public void teardown() {

	}

}

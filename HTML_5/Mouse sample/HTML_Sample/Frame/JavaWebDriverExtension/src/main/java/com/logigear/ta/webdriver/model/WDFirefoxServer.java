package com.logigear.ta.webdriver.model;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.WDUtilities;

public class WDFirefoxServer {

	public static List<WebElement> findElementsBy(RemoteWebDriver remote, String propName, String propValue) {
		List<WebElement> wdElements = null;
		propValue = (String) remote.executeScript("return CSS.escape(arguments[0]);", propValue);
		try {
			By bProp = WDUtilities.convertToBy(propName, propValue);
			if (bProp != null) {
				wdElements = remote.findElements(bProp);
			}
		} catch(Exception ex) {
			Problems.handleException("findElementsBy", ex);
		}
		return wdElements;
	}
}

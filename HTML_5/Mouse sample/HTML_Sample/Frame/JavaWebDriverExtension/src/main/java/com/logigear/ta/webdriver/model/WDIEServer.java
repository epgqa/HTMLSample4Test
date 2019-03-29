package com.logigear.ta.webdriver.model;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.WDUtilities;
import com.logigear.ta.webdriver.support.PropName;

public class WDIEServer {

	public static List<WebElement> findElementsBy(RemoteWebDriver remote, String propName, String propValue) {
		List<WebElement> wdElements = null;
		// 9/27/2018 binh nguyen : #16895
		if (propName.equalsIgnoreCase(PropName.TAPROPERTY_NAME)) {
			propValue = propValue.replace("\\", "\\\\");
			propValue = propValue.replace("'", "\\'");
			propValue = propValue.replace("\"", "\\");
		}
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

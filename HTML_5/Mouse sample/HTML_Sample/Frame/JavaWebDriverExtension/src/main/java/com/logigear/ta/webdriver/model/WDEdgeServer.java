package com.logigear.ta.webdriver.model;

import org.openqa.selenium.NoSuchWindowException;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.webdriver.common.TAConst;

public class WDEdgeServer {
	
	public static int switchToDefault(RemoteWebDriver remote) {
		int taRes = TAConst.TA_FALSE;
		try {
			remote.switchTo().defaultContent();
			taRes = TAConst.TA_OK;
		}catch (NoSuchWindowException ex) {
			// 10/10/2018 binh nguyen : #17020
			String handle = remote.getWindowHandle();
			remote.switchTo().window(handle);
		}
		return taRes;
	}
}

package com.logigear.ta.webdriver.model;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.common.WDUtilities;
import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.JavaScriptSupport;

public class WDSafariServer {

	public static String getTopWindow(RemoteWebDriver remote) {
		String result = "";
		try {
			String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_TOP_WINDOW);
			result = String.valueOf(WDUtilities.convert(remote.executeScript(script), TAConst.TA_FALSE));
		} catch (Exception ex) {
			Problems.handleException("getTopWindow", ex);
		}
		return result;
	}
	
	public static String getLeftWindow(RemoteWebDriver remote) {
		String result = "";
		try {
			String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_LEFT_WINDOW);
			result = String.valueOf(WDUtilities.convert(remote.executeScript(script), TAConst.TA_FALSE));
		} catch (Exception ex) {
			Problems.handleException("getLeftWindow", ex);
		}
		return result;
	}
}
package com.logigear.ta.webdriver.model;

import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriverService;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.GeckoDriverService;
import org.openqa.selenium.ie.InternetExplorerDriverService;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.opera.OperaDriverService;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.safari.SafariDriverService;
import org.openqa.selenium.safari.SafariOptions;

public class WDRemoteService {

	private static SafariDriverService safari = null;
	private static ChromeDriverService chrome = null;
	private static GeckoDriverService firefox = null;
	private static InternetExplorerDriverService ie = null;
	private static EdgeDriverService edge = null;
	private static OperaDriverService opera = null;
	
	public static SafariDriverService getSafariService(SafariOptions options) {
		if(safari == null) {
			safari = SafariDriverService.createDefaultService(options);
		}
		return safari;
	}
	
	public static ChromeDriverService getChromeService(ChromeOptions options) {
		if(chrome == null) {
			chrome = ChromeDriverService.createDefaultService();
		}
		return chrome;
	}
	
	public static GeckoDriverService getFirefoxService(FirefoxOptions options) {
		if(firefox == null) {
			firefox = GeckoDriverService.createDefaultService();
		}
		return firefox;
	}
	
	public static InternetExplorerDriverService getIEService(InternetExplorerOptions options) {
		if(ie == null) {
			ie = InternetExplorerDriverService.createDefaultService();
		}
		return ie;
	}
	
	public static EdgeDriverService getEdgeService(EdgeOptions options) {
		if(edge == null) {
			edge = EdgeDriverService.createDefaultService();
		}
		return edge;
	}
	
	public static OperaDriverService getOperaService(OperaOptions options) {
		if(opera == null) {
			opera = OperaDriverService.createDefaultService();
		}
		return opera;
	}
}

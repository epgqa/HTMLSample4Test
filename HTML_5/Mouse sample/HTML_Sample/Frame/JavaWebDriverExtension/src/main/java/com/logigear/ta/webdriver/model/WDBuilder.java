package com.logigear.ta.webdriver.model;

import java.util.ArrayList;
import java.util.Map;
import java.util.Map.Entry;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeDriverService;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.GeckoDriverService;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerDriverService;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaDriverService;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.service.DriverService;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariDriverService;
import org.openqa.selenium.safari.SafariOptions;

import com.logigear.ta.webdriver.common.TAConst;

public class WDBuilder {

	private String browser = null;
	private String browserSetting = null;
	private String serverPath = null;
	private DriverService service = null;
	private RemoteWebDriver driver = null;
	private Capabilities optionCaps = null;
	
	public void setBrowser(String b) {
		browser = b;
	}
	
	public void setBrowserSetting(String s) {
		browserSetting = s;
	}
	
	public void setServerPath(String p) {
		serverPath = p;
	}
	
	public int build() {
		int taRes = TAConst.TA_FALSE;
		WDConfigure config = new WDConfigure();
		taRes = config.parse(browser,browserSetting);
		
		if (taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.CHROME_BROWSER)) {
			buildChrome(config);
		}else if(taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.FIREFOX_BROWSER)) {
			buildFirefox(config);
		}else if(taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.IE_BROWSER)) {
			buildIE(config);
		}else if(taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.EDGE_BROWSER)) {
			buildEdge(config);
		}else if(taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.OPERA_BROWSER)) {
			buildOpera(config);
		}else if(taRes == TAConst.TA_OK && browser.equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
			buildSafari(config);
		}else if(taRes == TAConst.TA_OK) {
			Capabilities options = config.getDefaultOptions();
			driver = new RemoteWebDriver(options);
			optionCaps = options;
		}
		
		return taRes;
	}

	public String getInfos()
	{
		Capabilities showCapabilities = optionCaps;
		showCapabilities.merge(driver.getCapabilities());
		Map<String, ?> showCapMap = showCapabilities.asMap();
		
		ArrayList<String> res = new ArrayList<String>();
		for(Entry<String, ?> it : showCapMap.entrySet())
		{
			res.add(it.getKey() + ":" + it.getValue());
		}
		return String.join(",", res);
	}
	
	public RemoteWebDriver getWebDriver() {
		return driver;
	}
	
	public DriverService getService() {
		return service;
	}
	
	protected void buildChrome(WDConfigure config) {
		System.setProperty(TAConst.WD_CHROME_PATH, serverPath);
		ChromeOptions options = config.getChromeOptions();
		ChromeDriverService srv = WDRemoteService.getChromeService(options);
		service = srv;
		driver = new ChromeDriver(srv, options);
		optionCaps = options;
	}
	
	protected void buildFirefox(WDConfigure config) {
		System.setProperty(TAConst.WD_GECKO_PATH, serverPath);
		FirefoxOptions options = config.getFireFoxOptions();
		GeckoDriverService srv = WDRemoteService.getFirefoxService(options);
		service = srv;
		driver = new FirefoxDriver(srv, options);
		optionCaps = options;
	}
	
	protected void buildIE(WDConfigure config) {
		System.setProperty(TAConst.WD_IE_PATH, serverPath);
		InternetExplorerOptions options = config.getIEOptions();
		InternetExplorerDriverService srv = WDRemoteService.getIEService(options);
		service = srv;
		driver = new InternetExplorerDriver(srv, options);
		optionCaps = options;
	}
	
	protected void buildEdge(WDConfigure config) {
		System.setProperty(TAConst.WD_EDGE_PATH, serverPath);
		EdgeOptions options = config.getEdgeOptions();
		EdgeDriverService srv = WDRemoteService.getEdgeService(options);
		service = srv;
		driver = new EdgeDriver(srv, options);
		optionCaps = options;
	}
	
	protected void buildOpera(WDConfigure config) {
		System.setProperty(TAConst.WD_OPERA_PATH, serverPath);
		OperaOptions options = config.getOperaOptions();
		OperaDriverService srv = WDRemoteService.getOperaService(options);
		service = srv;
		driver = new OperaDriver(srv, options);
		optionCaps = options;
	}
	
	protected void buildSafari(WDConfigure config) {
		SafariOptions options = config.getSafariOptions();
		SafariDriverService srv = WDRemoteService.getSafariService(options);
		service = srv;
		driver = new SafariDriver(srv, options);
		optionCaps = options;
	}
}

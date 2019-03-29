package com.logigear.ta.webdriver.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.openqa.selenium.firefox.FirefoxOptions;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.logigear.ta.webdriver.common.TAConst;

public class WDFirefoxConfigure {

	private WDConfigure wdConfig;
	
	// https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#firefox-specific
	public static final String[] SUPPORT_OPTIONS = new String[] {
		"firefox_profile",
		"loggingPrefs",
		"firefox_binary",
		"pageLoadingStrategy",
		"mode",
		"captureNetworkTraffic",
		"addCustomRequestHeaders",
		"trustAllSSLCertificates",
		"changeMaxConnections",
		"firefoxProfileTemplate",
		"profile"
	};
	
	public WDFirefoxConfigure(WDConfigure config)
	{
		wdConfig = config;
	}
	
	public int parse(JsonObject jObject) throws Exception
	{
		FirefoxOptions firefoxOptions = wdConfig.getFireFoxOptions();
		
		ArrayList<String> argItems = wdConfig.parseArgOptions(jObject);
		if(argItems != null){
			firefoxOptions.addArguments(argItems);
		}
		
		Map<String, Object> supportedOptions = parseSupportedOptions(jObject);
		for(Entry<String, Object> entry : supportedOptions.entrySet()) {
			firefoxOptions.setCapability(entry.getKey(), entry.getValue());
		}
		
		return TAConst.TA_OK;
	}
	
	private Map<String, Object> parseSupportedOptions(JsonObject jObject) throws Exception {
		Map<String, Object> res = new HashMap<String, Object>();
		JsonElement options = jObject.get(WDConfigure.OPTIONS);
		if(options != null){
			for(String option : SUPPORT_OPTIONS) {
				JsonElement value = options.getAsJsonObject().get(option);
				if(value != null) {
					res.put(option, value.toString());
				}
			}
		}
		return res;
	}
}
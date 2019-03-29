package com.logigear.ta.webdriver.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.openqa.selenium.chrome.ChromeOptions;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.logigear.ta.webdriver.common.TAConst;

public class WDChromeConfigure {

	private WDConfigure wdConfig;
	
	public WDChromeConfigure(WDConfigure config)
	{
		wdConfig = config;
	}
	
	/*
	 * The Chrome browser specified capabilities are grouped into "goog:chromeOptions" capability
	 * According to it, TA support 'options' capability for browser specified capabilities,
	 * so we need to parse the TA 'options' and add into "goog:chromeOptions" accordingly.
	 * As referred by Selenium at the link : https://sites.google.com/a/chromium.org/chromedriver/capabilities
	 * We should try using ChromeOptions object instead of raw value when adding capability
	 */
	public int parse(JsonObject jObject) throws Exception
	{
		int taRes = TAConst.TA_FALSE;
		ArrayList<String> argItems = wdConfig.parseArgOptions(jObject);
		String binary = wdConfig.parseBinaryOptions(jObject);
		List<String> encodedExtensions = parseExtensions(jObject);
		Map<String, Object> supportedOptions = parseSupportedOptions(jObject);
		
		ChromeOptions chromeOptions = wdConfig.getChromeOptions();
		if(argItems != null){
			chromeOptions.addArguments(argItems);
		}
		if(binary != null) {
			chromeOptions.setBinary(binary);
		}
		if(encodedExtensions != null) {
			chromeOptions.addEncodedExtensions(encodedExtensions);
		}
		if(supportedOptions != null) {
			for(Entry<String, Object> entry : supportedOptions.entrySet()) {
				chromeOptions.setExperimentalOption(entry.getKey(), entry.getValue());
			}
		}
		taRes = TAConst.TA_OK;
		return taRes;
	}
	
	public static final String EXTENSIONS = "extensions";
	public static final String LOCALSTATE = "localState";
	public static final String PREFS = "prefs";
	public static final String DETACH = "detach";
	public static final String DEBUGGER_ADDRESS = "debuggerAddress";
	public static final String EXCLUDE_SWITCHES = "excludeSwitches";
	public static final String MINIDUNP_PATH = "minidumpPath";
	public static final String MOBILE_EMULATION = "mobileEmulation";
	public static final String PERF_LOGGING_PREFS = "perfLoggingPrefs";
	public static final String WINDOW_TYPES = "windowTypes";
	
	public static final String[] SUPPORT_OPTIONS = new String[] {
			LOCALSTATE, 
			PREFS, 
			DETACH, 
			DEBUGGER_ADDRESS, 
			EXCLUDE_SWITCHES,
			MINIDUNP_PATH,
			MOBILE_EMULATION,
			PERF_LOGGING_PREFS,
			WINDOW_TYPES
	};
	
	private List<String> parseExtensions(JsonObject jObject) throws Exception{
		JsonElement options = jObject.get(WDConfigure.OPTIONS);
		if(options != null){
			JsonElement extensions = options.getAsJsonObject().get(EXTENSIONS);
			if(extensions != null){
				JsonArray array = extensions.getAsJsonArray();
				if(array != null) {
					Iterator<JsonElement> iterator = array.iterator();
					List<String> res = new ArrayList<String>();
					while (iterator.hasNext()) {
						String value = iterator.next().getAsString();
						if(value != null) {
							res.add(value);
						}
					}
					return res;
				}
			}
		}
		return null;
	}
	
	private Map<String, Object> parseSupportedOptions(JsonObject jObject) throws Exception{
		Map<String, Object> res = null;
		JsonElement options = jObject.get(WDConfigure.OPTIONS);
		if(options != null){
			for(String option : SUPPORT_OPTIONS) {
				JsonElement value = options.getAsJsonObject().get(option);
				if(value != null){
					if(res == null) {
						res = new HashMap<String, Object>();
					}
					res.put(option, value.toString());
				}
			}
		}
		return res;
	}
}

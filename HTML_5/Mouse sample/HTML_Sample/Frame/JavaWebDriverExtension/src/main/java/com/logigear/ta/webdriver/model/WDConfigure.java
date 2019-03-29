package com.logigear.ta.webdriver.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariOptions;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;

public class WDConfigure {

	public static final String CAPABILITIES = "capabilities";
	public static final String ARGUMENTS = "args";
	public static final String BROWSER = "browserName";
	public static final String OPTIONS = "options";
	public static final String BINARY = "binary";

	private ChromeOptions chromeOptions = null;
	private FirefoxOptions firefoxOptions = null;
	private InternetExplorerOptions ieOptions = null;
	private EdgeOptions edgeOptions = null;
	private OperaOptions operaOptions = null;
	private SafariOptions safariOptions = null;
	private Capabilities defaultOptions = null;
	
	public ChromeOptions getChromeOptions() {
		if (chromeOptions == null) {
			chromeOptions = new ChromeOptions();
		}
		return chromeOptions;
	}
	
	public FirefoxOptions getFireFoxOptions() {
		if(firefoxOptions == null) {
			firefoxOptions = new FirefoxOptions();
		}
		return firefoxOptions;
	}
	
	public InternetExplorerOptions getIEOptions() {
		if(ieOptions == null) {
			ieOptions = new InternetExplorerOptions();
		}
		return ieOptions;
	}
	
	public EdgeOptions getEdgeOptions() {
		if(edgeOptions == null) {
			edgeOptions = new EdgeOptions();
		}
		return edgeOptions;
	}
	
	public OperaOptions getOperaOptions() {
		if(operaOptions == null) {
			operaOptions = new OperaOptions();
		}
		return operaOptions;
	}
	
	public SafariOptions getSafariOptions() {
		if(safariOptions == null) {
			safariOptions = new SafariOptions();
		}
		return safariOptions;
	}
	
	public Capabilities getDefaultOptions() {
		if(defaultOptions == null) {
			defaultOptions = new MutableCapabilities();
		}
		return defaultOptions;
	}

	public int parse(String browser, String configValues) {
		int taRes = TAConst.TA_FALSE;
		
		taRes = buildOptions(browser);
		if(configValues == null || configValues.isEmpty()) {
			// User doesn't define JSON config
			// We support add default config
			addDefaultConfig(browser);
			return TAConst.TA_OK;
		}
		
		JsonParser parser = new JsonParser();
		try {
			Object obj = parser.parse(configValues);
			JsonObject jObject = (JsonObject) obj;
			
			if (TAConst.CHROME_BROWSER.equalsIgnoreCase(browser)) {
				WDChromeConfigure chrome = new WDChromeConfigure(this);
				return chrome.parse(jObject);
			}
			else if(TAConst.FIREFOX_BROWSER.equalsIgnoreCase(browser)) {
				WDFirefoxConfigure firefox = new WDFirefoxConfigure(this);
				return firefox.parse(jObject);
			}
			else if(TAConst.SAFARI_BROWSER.equalsIgnoreCase(browser)) {
				WDSafariConfigure safari = new WDSafariConfigure(this);
				return safari.parse(jObject);
			}
			else if(TAConst.EDGE_BROWSER.equalsIgnoreCase(browser)) {
				WDEdgeConfigure edge = new WDEdgeConfigure(this);
				return edge.parse(jObject);
			}
			else if(TAConst.IE_BROWSER.equalsIgnoreCase(browser)) {
				WDIEConfigure ieConfig = new WDIEConfigure(this);
				return ieConfig.parse(jObject);
			}
			
			Capabilities capabilities = parseCapabilities(browser, jObject);
			//parse option
			ArrayList<String> argItems = parseArgOptions(jObject);
			
			String binary = parseBinaryOptions(jObject);
			// check browser and create setting based on type of browser
			taRes = addCapabilities(browser,capabilities,argItems, binary);
		} catch (Exception e) {
			Problems.handleException("createSettingWebDriver", e);
			AbtTrace.error("WDConfigure : createSettingWebDriver: \n" + e.toString());
		}
		return taRes;
	}
	
	public ArrayList<String> parseArgOptions(JsonObject jObject) throws Exception {
		ArrayList<String> argItems = null;
		JsonElement options = jObject.get(OPTIONS);
		if(options != null)
		{
			JsonElement arguments = options.getAsJsonObject().get(ARGUMENTS);
			if(arguments != null)
			{
				Iterator<JsonElement> iterator = arguments.getAsJsonArray().iterator();

				argItems = new ArrayList<String>();
				while (iterator.hasNext()) {
					String argOption = iterator.next().getAsString();
					argItems.add(argOption);
				}		
			}
		}
		return argItems;
	}
	
	public String parseBinaryOptions(JsonObject jObject) throws Exception {
		String binary = null;
		JsonElement options = jObject.get(OPTIONS);
		if(options != null)
		{
			JsonElement bin = options.getAsJsonObject().get(BINARY);
			if(bin != null)
			{
				binary = bin.getAsString();		
			}
		}
		return binary;
	}
	
	public Capabilities parseCapabilities(String browser, JsonObject jObject) throws Exception {
		// get browser name
		JsonObject capability = jObject.get(CAPABILITIES).getAsJsonObject();
		Set<Entry<String, JsonElement>> setCapabilities = capability.entrySet();
		
		Map<String,Object> capMap = new HashMap<String,Object>();
		capMap.put(BROWSER, browser);
		for(Entry<String, JsonElement> entry : setCapabilities){
			Object objValue = "";
			JsonElement jsonElement = entry.getValue();
			if(jsonElement.isJsonPrimitive()) {
				if(jsonElement.getAsJsonPrimitive().isBoolean()) {
					objValue = jsonElement.getAsBoolean();
				} else if(jsonElement.getAsJsonPrimitive().isNumber()) {
					objValue = jsonElement.getAsInt();
				} else {
					objValue = jsonElement.getAsString();
				}
			}
			capMap.put(entry.getKey(), objValue);
		}
		
		Capabilities capabilities = new DesiredCapabilities(capMap);
		return capabilities;
	}
	
	private int addCapabilities(String browserName, Capabilities extraCaps, ArrayList<String> argItems, String binary){
		
		int taRes = TAConst.TA_FALSE;
		// check browser and create setting based on type of browser
		if(TAConst.FIREFOX_BROWSER.equalsIgnoreCase(browserName)) {
			if(argItems != null){
				firefoxOptions.addArguments(argItems);
			}
			if(binary != null) {
				firefoxOptions.setBinary(binary);
			}
			firefoxOptions.merge(extraCaps);
			taRes = TAConst.TA_OK;
		}else if(TAConst.EDGE_BROWSER.equalsIgnoreCase(browserName)) {
			edgeOptions.merge(extraCaps);
			taRes = TAConst.TA_OK;
		}else if(TAConst.IE_BROWSER.equalsIgnoreCase(browserName)) {
			ieOptions.merge(extraCaps);
			taRes = TAConst.TA_OK;
		}else if(TAConst.OPERA_BROWSER.equalsIgnoreCase(browserName)) {
			if(argItems != null){
				operaOptions.addArguments(argItems);
			}
			if(binary != null) {
				operaOptions.setBinary(binary);
			}
			operaOptions.merge(extraCaps);
			taRes = TAConst.TA_OK;
		}else if(TAConst.SAFARI_BROWSER.equalsIgnoreCase(browserName)) {
			safariOptions.merge(extraCaps);
			taRes = TAConst.TA_OK;
		}else {
			defaultOptions = extraCaps;
			taRes = TAConst.TA_OK;
		}
		
		return taRes;
	}
	
	public int buildOptions(String browserName)
	{
		int taRes = TAConst.TA_FALSE;
		if (browserName.equalsIgnoreCase(TAConst.CHROME_BROWSER)) {
			chromeOptions = new ChromeOptions();
			taRes = TAConst.TA_OK;
		}else if(browserName.equalsIgnoreCase(TAConst.FIREFOX_BROWSER)) {
			firefoxOptions = new FirefoxOptions();
			taRes = TAConst.TA_OK;		
		}else if(browserName.equalsIgnoreCase(TAConst.EDGE_BROWSER)) {
			edgeOptions = new EdgeOptions();
			taRes = TAConst.TA_OK;
		}else if(browserName.equalsIgnoreCase(TAConst.IE_BROWSER)) {
			ieOptions = new InternetExplorerOptions();
			taRes = TAConst.TA_OK;
		}else if(browserName.equalsIgnoreCase(TAConst.OPERA_BROWSER)) {
			operaOptions = new OperaOptions();
			taRes = TAConst.TA_OK;
		}else if(browserName.equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
			safariOptions = new SafariOptions();
			taRes = TAConst.TA_OK;
		}else {
			defaultOptions = new MutableCapabilities();
			taRes = TAConst.TA_OK;
		}
		return taRes;
	}
	
	public void addDefaultConfig(String browserName)
	{
		if (browserName.equalsIgnoreCase(TAConst.CHROME_BROWSER)) {
			ChromeOptions options = getChromeOptions();
			// Fix bug: Bug 16745: [GWD] Action 'play' does not work property on Audio, Video control
			// Root cause: Google Chrome policy
			// Solution: add parameter --autoplay-policy=no-user-gesture-required to Chrome browser
			// https://stackoverflow.com/questions/49919156/google-chrome-66-autoplay-policy-change
			options.addArguments("--autoplay-policy=no-user-gesture-required");
		}
		else if(browserName.equalsIgnoreCase(TAConst.IE_BROWSER)) {
			InternetExplorerOptions options = getIEOptions();
			options.requireWindowFocus();
			// [11/06/2018 tam.thanh.tran] [BUG-17757] [GWD-IE,Firefox] Popup is automatically closed when using actions interact UI
			// Root cause: IE and Firefox is auto disable alert when have a exception
			// Solution: setCapability unhandledPromptBehavior is ignore to disable auto closing alert
			// https://github.com/SeleniumHQ/selenium/issues/4807
			// https://stackoverflow.com/questions/47410707/invalid-capabilities-in-alwaysmatch-unhandledpromptbehavior-is-type-boolean-ins?rq=1
			options.setCapability(CapabilityType.UNHANDLED_PROMPT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);
		}
		else if (browserName.equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
			System.setProperty("http.keepAlive", "true");
		}
		else if(browserName.equalsIgnoreCase(TAConst.FIREFOX_BROWSER)) {
			FirefoxOptions options = getFireFoxOptions();
			// [11/06/2018 tam.thanh.tran] [BUG-17757] [GWD-IE,Firefox] Popup is automatically closed when using actions interact UI
			options.setCapability(CapabilityType.UNHANDLED_PROMPT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);
		}
	}
}

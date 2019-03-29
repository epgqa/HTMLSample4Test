package com.logigear.ta.webdriver.model;

import java.util.Map.Entry;
import java.util.Set;

import org.openqa.selenium.ie.InternetExplorerOptions;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.logigear.ta.webdriver.common.TAConst;

public class WDIEConfigure {

	private WDConfigure wdConfig;
	
	public WDIEConfigure(WDConfigure config)
	{
		wdConfig = config;
	}
	
	/*
	 * The IE browser specified capabilities are grouped into "se:ieOptions" capability
	 * According to it, TA support 'options' capability for browser specified capabilities,
	 * so we need to parse the TA 'options' and add into "se:ieOptions" accordingly.
	 * As referred by Selenium at the link : https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
	 * We should try using InternetExplorerOptions object instead of raw value when adding capability
	 */
	public int parse(JsonObject jObject) throws Exception
	{
		int taRes = TAConst.TA_FALSE;
		
		InternetExplorerOptions ieOptions = wdConfig.getIEOptions();
		
		parseOptions(jObject, ieOptions);
		
		taRes = TAConst.TA_OK;
		return taRes;
	}
	
	private void parseOptions(JsonObject jObject, InternetExplorerOptions ieOptions) throws Exception{
		JsonElement options = jObject.get(WDConfigure.OPTIONS);
		if(options != null){
			Set<Entry<String, JsonElement>> entries = options.getAsJsonObject().entrySet();
			if(entries != null) {
				for(Entry<String, JsonElement> entry : entries) {
					String name = entry.getKey();
					JsonElement value = entry.getValue();
					if(name != null && value != null)
						ieOptions.setCapability(name, value.toString());
				}
			}
		}
	}
}

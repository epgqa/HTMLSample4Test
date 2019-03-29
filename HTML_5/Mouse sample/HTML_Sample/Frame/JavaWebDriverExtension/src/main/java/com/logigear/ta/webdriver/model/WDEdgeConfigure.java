package com.logigear.ta.webdriver.model;

import java.util.Set;
import java.util.Map.Entry;

import org.openqa.selenium.edge.EdgeOptions;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.logigear.ta.webdriver.common.TAConst;

public class WDEdgeConfigure {

	private WDConfigure wdConfig;
	
	public WDEdgeConfigure(WDConfigure config)
	{
		wdConfig = config;
	}
	
	public int parse(JsonObject jObject) throws Exception
	{
		EdgeOptions edgeOptions = wdConfig.getEdgeOptions();
		
		JsonElement options = jObject.get(WDConfigure.OPTIONS);
		if(options != null) {
			Set<Entry<String, JsonElement>> entries = options.getAsJsonObject().entrySet();
			if(entries != null) {
				for(Entry<String, JsonElement> entry : entries) {
					String name = entry.getKey();
					JsonElement value = entry.getValue();
					if(name != null && value != null) {
						edgeOptions.setCapability(name, value.toString());
					}
				}
			}
		}
		
		return TAConst.TA_OK;
	}
}
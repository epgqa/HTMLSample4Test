package com.logigear.ta.webdriver.support;

import java.util.HashMap;

public class WDSettingManager {
	
	private HashMap<String, String> mapSetting = new HashMap<String, String>();

	private static WDSettingManager instance = null;

	public static WDSettingManager getInstance() {
		if (instance == null) {
			instance = new WDSettingManager();
		}
		return instance;
	}

	public String getSetting(String settingName, String defaultValue) {
		return mapSetting.getOrDefault(settingName, defaultValue);
	}

	public void setSetting(String settingName, String settingValue) {
		mapSetting.put(settingName, settingValue);
	}
	
	public int getSetting(String settingName, int defaultValue)
	{
		int res = defaultValue;
		if(mapSetting.containsKey(settingName))
		{
			String value = mapSetting.get(settingName);
			res = Integer.valueOf(value);
		}
		return res;
	}
	
	public boolean getBooleanSetting(String setting, boolean defaultValue)
	{
		boolean res = defaultValue;
		if(mapSetting.containsKey(setting))
		{
			String value = mapSetting.get(setting);
			if(value.equals("yes") || value.equals("true") || value.equals("1") || value.equals("on") )
			{
				res = true;
			}
			else if(value.equals("no") || value.equals("false") || value.equals("0") || value.equals("off") )
			{
				res = false;
			}
		}
		return res;
	}
	
	public void updateSettings(String[] settings, String[] values)
	{
		for(int i = 0; i < settings.length; i++)
		{
			mapSetting.put(settings[i], values[i]);
		}
	}
}

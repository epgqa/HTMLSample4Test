package com.logigear.ta.webdriver.support;

import java.util.HashMap;
import java.util.Map;

public class Settings {

	public static final String TASETTING_IGNORE_HTML_INPUT_TYPES = "ignore html input types";
	public static final boolean TASETTING_IGNORE_HTML_INPUT_TYPES_DEFAULT = false;
	public static final String TASETTING_AUTO_SWITCH_WINDOWS = "auto switch windows";
	public static final boolean TASETTING_AUTO_SWITCH_WINDOWS_DEFAULT = false;
	public static final String TASETTING_WINDOW_WAIT = "window wait";
	public static final String TASETTING_OBJECT_WAIT = "object wait";
	public static final String TASETTING_TARGET_BROWSER_INSTANCE = "target browser instance";
	public static final String TASETTING_DEFAULT_TARGET_BROWSER_INSTANCE = "existing";
	public static final String TASETTING_TARGET_BROWSER_NEW_WINDOW = "new window";
	public static final String TASETTING_TARGET_BROWSER_NEW_TAB = "new tab";
	public static final int TASETTING_WINDOW_WAIT_DEFAULT = 20;
	public static final int TASETTING_DEFAULT_PAGE_WAIT = 30;
	public static final String TASETTING_PAGE_WAIT = "page wait";
	public static final String TASETTING_PAGE_WAIT_STATE = "page wait state";
	public static final String TASETTING_DEFAULT_PAGE_WAIT_STATE = "complete";
	public static final int TASETTING_OBJECT_WAIT_DEFAULT = 20;
	public static final String TASETTING_ESCAPE_SEQUENCE = "escape sequences";
	public static final boolean TASETTING_ESCAPE_SEQUENCE_DEFAULT = false;
	public static final Map<String, Integer> mapPageState = createPageStateMap();
	public static Map<String, Integer> createPageStateMap()
	{
		Map<String, Integer> myMap = new HashMap<String, Integer>();
		myMap.put("complete", 5);
		myMap.put("interactive", 4);
		myMap.put("loaded", 3);
		myMap.put("loading", 2);
		myMap.put("uninitialized", 1);
		return myMap;
	}
}


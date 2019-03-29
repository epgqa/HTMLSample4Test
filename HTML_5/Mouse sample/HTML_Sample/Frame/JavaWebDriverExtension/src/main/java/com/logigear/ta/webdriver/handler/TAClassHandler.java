package com.logigear.ta.webdriver.handler;

import java.util.HashMap;
import java.util.Map.Entry;

import com.logigear.ta.webdriver.support.Settings;
import com.logigear.ta.webdriver.support.WDSettingManager;

public class TAClassHandler {

	private static String TACLASS_DELIMITER = "-";
	private static TAClassHandler instance = null;
	
	@SuppressWarnings("serial")
	private static HashMap<String, String> mapSpecificTAClass = new HashMap<String, String>() {
		{
			// structure [real tagName, ta class]
			put("a","link");
			put("img","image");
			put("text","graphic text");
			put("p","paragraph");
			put("image","svg image");
		}
	};
	
	@SuppressWarnings("serial")
	private static HashMap<String, String> mapRefineTAClass = new HashMap<String, String>() {
		{
			// structure [encoded class, ta class]
			put("textarea-text","textarea");
			put("button-submit","button");
			put("button-reset","button");
		}
	};
	
	
	public static TAClassHandler getInstance() {
		if (instance == null) {
			instance = new TAClassHandler();
		}
		return instance;
	}

	public boolean isNeedType(String tagName) {
		if (tagName.equalsIgnoreCase("select") || tagName.equalsIgnoreCase("input")) {
			return true;
		}
		return false;
	}

	public String getTAClass(String tagName, String type) {
		return getClassMap(encodeTAClass(tagName, type));
	}

	private String getClassMap(String encodedTAClass) {
		
		String value = encodedTAClass;

		if (mapSpecificTAClass.containsKey(encodedTAClass)) {
			value = mapSpecificTAClass.get(encodedTAClass);
		} else if (mapRefineTAClass.containsKey(encodedTAClass)) {
			value = mapRefineTAClass.get(encodedTAClass);
		}			

		return value;
	}
	
	public void decodeTACLass(String taClass, StringBuilder tagName, StringBuilder tagType) {
		
		int index = taClass.indexOf(TACLASS_DELIMITER);
		
		// in case, ta class not contain character "-", ta class is tagName
		//		except some case defined in map specific ta class
		// else 
		//		ta class = tagName + "-" + type
		if (index == -1) {
			if (mapSpecificTAClass.containsValue(taClass)) {
				for (Entry<String, String> entry : mapSpecificTAClass.entrySet()) {
					if (entry.getValue().equalsIgnoreCase(taClass)) {
						tagName.append(entry.getKey());						
					}
				}
			} else {
				tagName.append(taClass);
			}
		} else {
			tagName.append(taClass.substring(0, index));
			
			// TODO: currently not use tag type. In future, need get correct type
			tagType.append(taClass.substring(index + 1));
		}		
	}
	
	private String encodeTAClass(String tagName, String typeValue) {

		String taClass = null;
		tagName = tagName.toLowerCase();

		if (typeValue == null || typeValue.isEmpty()) {
			taClass = tagName;
		} else {

			typeValue = typeValue.toLowerCase();

			if (tagName.equals(typeValue)) {
				taClass = tagName;
			} else {

				if (tagName.equals("select")) {

					taClass = tagName + "-" + typeValue;
					taClass = taClass.replace("select-select", "select");

				} else if (tagName.equals("input")) {

					taClass = tagName + "-";
					if (WDSettingManager.getInstance().getBooleanSetting(Settings.TASETTING_IGNORE_HTML_INPUT_TYPES, Settings.TASETTING_IGNORE_HTML_INPUT_TYPES_DEFAULT)
							&& isMapToInputText(typeValue)) {
						taClass = taClass + "text";
					} else {
						taClass = taClass + typeValue;
					}

				} else {
					taClass = tagName;
				}

			}
		}

		return taClass;
	}

	boolean isMapToInputText(String typeValue) {
		boolean bNeedMap = false;
		if (!(typeValue.equals("button") || typeValue.equals("checkbox") || typeValue.equals("file")
				|| typeValue.equals("hidden") || typeValue.equals("image") || typeValue.equals("password")
				|| typeValue.equals("radio") || typeValue.equals("reset") || typeValue.equals("submit")
				|| typeValue.equals("masked"))) {
			bNeedMap = true;
		}
		return bNeedMap;
	}
}

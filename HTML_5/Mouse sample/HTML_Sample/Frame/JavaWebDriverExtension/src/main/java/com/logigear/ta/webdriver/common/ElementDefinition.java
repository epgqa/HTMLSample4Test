package com.logigear.ta.webdriver.common;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.webdriver.support.PropName;

/**
 * this class use to save the element definition 
 * @author tuan.van.tran
 *
 */
public class ElementDefinition{
	private LinkedHashMap<String, String> properties = new LinkedHashMap<String,String>();
	
	private String elementDef = "";
	int parsingErr = TAConst.TA_OK;
	private String taClassVal = null;
	public ElementDefinition(String elementDef){
		setElementDef(elementDef);
	}
	
	public ElementDefinition(){
	}
	
	public boolean isEmpty() {
		return properties.isEmpty();
	}
	
	public void addProperty(String name, String value) {
		if(PropName.TAPROPERTY_TACLASS.equals(name)) {
			taClassVal = value;
		}else {
			properties.put(name.trim(), value.trim());
		}
	}
	
	public void addTAClass() {
		if(taClassVal != null) {
			properties.put(PropName.TAPROPERTY_TACLASS, taClassVal);
		}
	}
	
	public List<String> getPropertyNames(){
		return new ArrayList<String>(properties.keySet());
	}
	
	public List<String> getPropertyValues(){
		return new ArrayList<String>(properties.values());
	}
	
	public String getProperty(String prop) {
		return properties.get(prop);
	}

	public String getElementDef() {
		return elementDef;
	}

	public void setElementDef(String elementDef) {
		this.elementDef = elementDef;
	}
	
	public void printProp() {
		for(String key : properties.keySet()) {
			AbtTrace.info(String.format("	Name=%s - Value=%s", key,properties.get(key)));
		}
	}
	
	public int checkValid(StringBuilder info) {
		return checkMatchingProperty(getPropertyNames(), info);
	}
	
	private static int checkMatchingProperty(List<String> properties, StringBuilder info) {
		int taRes = TAConst.TA_OK;
		int count = 0;
		boolean hasXPath = false;
		boolean hasCssSelector = false;
		boolean hasSupported = false;
		for(String prop : properties) {
			hasSupported = false;
			if(prop.equalsIgnoreCase(PropName.TAPROPERTY_CSS_SELECTOR)) {
				hasCssSelector = true;
				hasSupported = true;
			}
			else if(prop.equalsIgnoreCase(PropName.TAPROPERTY_XPATH)) {
				hasXPath = true;
				hasSupported = true;
			}
			else if(prop.equalsIgnoreCase(PropName.TAPROPERTY_ID)
					|| prop.equalsIgnoreCase(PropName.TAPROPERTY_NAME)
					|| prop.equalsIgnoreCase(PropName.TAPROPERTY_TAGNAME)
					|| prop.equalsIgnoreCase(PropName.TAPROPERTY_CLASSNAME)
					|| prop.equalsIgnoreCase(PropName.TAPROPERTY_TACLASS)
					) {
				hasSupported = true;
				count++;
			}
			else {
				info.append(prop);
				break;
			}
		}
		if(hasSupported == false) {
			taRes = TAConst.TA_ERR_PROPERTY_NOT_SUPPORT_BY_WEB_DRIVER;
		}
		if(hasXPath && count > 1) {
			taRes = TAConst.TA_ERR_COMBINED_XPATH_AND_OTHER_PROP;
		}
		else if(hasCssSelector && count > 1) {
			taRes = TAConst.TA_ERR_COMBINED_CSS_SELECTOR_AND_OTHER_PROP;
		}
		return taRes;
	}
}

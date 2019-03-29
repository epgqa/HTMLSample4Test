package com.logigear.ta.webdriver.support;

import java.util.HashMap;

import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.PropName;

public class MapSupport {
	private HashMap<String, String> mapScriptFunction;
	private HashMap<String, String> mapProperty;

	private static MapSupport instance = null;

	public static MapSupport getInsance() {
		if (instance == null) {
			instance = new MapSupport();
		}
		return instance;
	}

	public MapSupport() {
		initMapScript();
		initMapProperty();
	}

	private void initMapScript() {
		mapScriptFunction = new HashMap<String, String>();
		mapScriptFunction.put(PropName.TAPROPERTY_CELLS, JSName.JS_GET_TABLE_PROPERTY);
		mapScriptFunction.put(PropName.TAPROPERTY_ROWS, JSName.JS_GET_TABLE_PROPERTY);
		mapScriptFunction.put(PropName.TAPROPERTY_XPATH, JSName.JS_GET_XPATH_WEBDRIVER);
		mapScriptFunction.put(PropName.TAPROPERTY_HREF, JSName.JS_GET_HREF);
		mapScriptFunction.put(PropName.TAPROPERTY_CAPTION, JSName.JS_GET_CAPTION);
		mapScriptFunction.put(PropName.TA_REAL_CURRENTTIME, JSName.JS_GET_CURRENT);
		mapScriptFunction.put(PropName.TAPROPERTY_DURATION, JSName.JS_GET_DURATION);
		mapScriptFunction.put(PropName.TAPROPERTY_SHORT_HREF, JSName.JS_GET_SHORTHREF);
		mapScriptFunction.put(PropName.TA_REAL_INNERTEXT, JSName.JS_GET_INNERTEXT);
		mapScriptFunction.put(PropName.TAPROPERTY_TEXT, JSName.JS_GET_INNERTEXT);
		mapScriptFunction.put(PropName.TAPROPERTY_BODIES, JSName.JS_GET_BODIES);
		mapScriptFunction.put(PropName.TAPROPERTY_SOURCE, JSName.JS_GET_SOURCE);
		mapScriptFunction.put(PropName.TAPROPERTY_SRC, JSName.JS_GET_SOURCE);
		mapScriptFunction.put(PropName.TAPROPERTY_INDEX, JSName.JS_GET_INDEX);
		mapScriptFunction.put(PropName.TAPROPERTY_NAME, JSName.JS_GET_NAME);
		mapScriptFunction.put(PropName.TAPROPERTY_VALUE, JSName.JS_GET_VALUE);
		mapScriptFunction.put(PropName.TAPROPERTY_IMAGEALT, JSName.JS_GET_IMAGEALT);
		mapScriptFunction.put(PropName.TAPROPERTY_FILL, JSName.JS_GET_FILL);
		mapScriptFunction.put(PropName.TAPROPERTY_FILLRULE, JSName.JS_GET_FILLRULE);
		mapScriptFunction.put(PropName.TAPROPERTY_STROKE, JSName.JS_GET_STROKE);
	}

	private void initMapProperty() {
		mapProperty = new HashMap<String, String>();
		mapProperty.put(PropName.TAPROPERTY_INNERTEXT, PropName.TA_REAL_INNERTEXT);
		mapProperty.put(PropName.TAPROPERTY_INNERHTML, PropName.TA_REAL_INNERHTML);
		mapProperty.put(PropName.TAPROPERTY_TAGNAME, PropName.TA_REAL_TAGNAME);
		mapProperty.put(PropName.TAPROPERTY_OUTERHTML, PropName.TA_REAL_OUTERHTML);
		mapProperty.put(PropName.TAPROPERTY_TEXTCONTENT, PropName.TA_REAL_TEXTCONTENT);
		mapProperty.put(PropName.TAPROPERTY_DEFAULTVALUE, PropName.TA_REAL_DEFAULTVALUE);
		mapProperty.put(PropName.TAPROPERTY_FORMACTION, PropName.TA_REAL_FORMACTION);
		mapProperty.put(PropName.TAPROPERTY_FORMENCTYPE, PropName.TA_REAL_FORMENCTYPE);
		mapProperty.put(PropName.TAPROPERTY_FORMMETHOD, PropName.TA_REAL_FORMMETHOD);
		mapProperty.put(PropName.TAPROPERTY_FORMNOVALIDATE, PropName.TA_REAL_FORMNOVALIDATE);
		mapProperty.put(PropName.TAPROPERTY_FORMTARGET, PropName.TA_REAL_FORMTARGET);
		mapProperty.put(PropName.TAPROPERTY_MAXLENGTH, PropName.TA_REAL_MAXLENGTH);
		mapProperty.put(PropName.TAPROPERTY_READONLY, PropName.TA_REAL_READONLY);
		mapProperty.put(PropName.TAPROPERTY_BGCOLOR, PropName.TA_REAL_BGCOLOR);
		mapProperty.put(PropName.TAPROPERTY_CELLPADDING, PropName.TA_REAL_CELLPADDING);
		mapProperty.put(PropName.TAPROPERTY_CELLSPACING, PropName.TA_REAL_CELLSPACING);
		mapProperty.put(PropName.TAPROPERTY_AUDIOTRACKS, PropName.TA_REAL_AUDIOTRACKS);
		mapProperty.put(PropName.TAPROPERTY_CROSSORIGIN, PropName.TA_REAL_CROSSORIGIN);
		mapProperty.put(PropName.TAPROPERTY_CURRENT, PropName.TA_REAL_CURRENTTIME);
		mapProperty.put(PropName.TAPROPERTY_CURRENTSRC, PropName.TA_REAL_CURRENTSRC);
		mapProperty.put(PropName.TAPROPERTY_CURRENTTIME, PropName.TA_REAL_CURRENTTIME);
		mapProperty.put(PropName.TAPROPERTY_DEFAULTMUTED, PropName.TA_REAL_DEFAULTMUTED);
		mapProperty.put(PropName.TAPROPERTY_DEFAULTPLAYBACKRATE, PropName.TA_REAL_DEFAULTPLAYBACKRATE);
		mapProperty.put(PropName.TAPROPERTY_MEDIAGROUP, PropName.TA_REAL_MEDIAGROUP);
		mapProperty.put(PropName.TAPROPERTY_NETWORKSTATE, PropName.TA_REAL_NETWORKSTATE);
		mapProperty.put(PropName.TAPROPERTY_PLAYBACKRATE, PropName.TA_REAL_PLAYBACKRATE);
		mapProperty.put(PropName.TAPROPERTY_READYSTATE, PropName.TA_REAL_READYSTATE);
		mapProperty.put(PropName.TAPROPERTY_STARTDATE, PropName.TA_REAL_STARTDATE);
		mapProperty.put(PropName.TAPROPERTY_TEXTTRACKS, PropName.TA_REAL_TEXTTRACKS);
		mapProperty.put(PropName.TAPROPERTY_VIDEOTRACKS, PropName.TA_REAL_VIDEOTRACKS);
		mapProperty.put(PropName.TAPROPERTY_ITEMS, PropName.TA_REAL_LENGTH); // support on combo box and listbox
		// [11/05/2018 tam.thanh.tran] [BUG-17771] [GWD]Playback cannot detect control when using more than 2 properties include class name property
		// Root cause: Real name of class name is 'class'
		// Solution: Put it to a map property and handle it.
		mapProperty.put(PropName.TAPROPERTY_CLASSNAME, PropName.TA_REAL_CLASSNAME);

	}

	public HashMap<String, String> getMapScriptFunction() {
		return mapScriptFunction;
	}

	public HashMap<String, String> getMapProperty() {
		return mapProperty;
	}
}

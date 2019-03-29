package com.logigear.ta.webdriver.common;

public class TAConst {

	public static final int TA_OK = 0;
	public static final int TA_FALSE = -1;
	public static final int TA_NOPROPERTY = -4;
	public static final int TA_ERR_LIST_ITEM_NOT_FOUND = ((int)0x80010402L);
	public static final int TA_ERR_LIST_INDEX_OUT_OF_RANGE = ((int)0x8001040AL);
	public static final int TA_ERR_LIST_IS_EMPTY		= ((int)0x80010406L);
	public static final int TA_ERR_TABLE_ROW_OR_COL_OUT_OF_RANGE = ((int)0x80010801L);
	public static final int TA_ERR_COMBINED_XPATH_AND_OTHER_PROP = ((int)0x80020004L);
	public static final int TA_ERR_COMBINED_CSS_SELECTOR_AND_OTHER_PROP = ((int)0x80020009L);
	public static final int TA_ERR_PROPERTY_NOT_SUPPORT_BY_WEB_DRIVER = ((int)0x80020008L);
	
	
	// Error codes belong to MEDIA ACTION (WEB)
	//////////////////////////////////////////////////////////////////////////
	public static final int TA_ERR_MEDIA_TIME_GREATER_THAN_ENDED_TIME =	((int)0x80011001L);
	public static final int TA_ERR_MEDIA_PROPERTY_ONLY_SUPPORT_VIDEO_TAG = ((int)0x80011002L);
	public static final int TA_ERR_MEDIA_NOT_SUPPORT_THIS_VERSION_BROWSER =	((int)0x80011003L);
	
	public static final int TA_ERR_ENTITY_NO_MATCHED = ((int)0x80010004L);
	public static final int TA_ERR_ENTITY_MOREONE_MATCHED = ((int)0x80010005L);
	
	public static final int TA_ERR_ENTITY_SWITCH_FRAME = ((int)0x80010006L);
	public static final int TA_ERR_ELEMENT_NOT_MATCH = ((int)0x80010007L);
	
	public static final String TITLE 	= "title";
	public static final String DOC_TITLE 	= "doc title";
	public static final String URL 	 	= "url";
	public static final String DOMAIN 	= "domain";
	public static final String SESSIONID 	= "sessionid";
	public static final String HANDLE 	= "handle";
	public static final String HANDLES 	= "handles";
	
	public static final int TA_STATE_INVISIBLE = ((int)0x00008000 );
	
	public static final int TA_ERR_NO_WEB_DRIVER = -26;
	public static final int TA_ERR_WEB_DRIVER_SESSION_NOT_CREATED = -27;
	
	public static final int TA_LEFT_CLICK = 1;
	public static final int TA_RIGHT_CLICK = 2;
	public static final int TA_DOUBLE_CLICK = 4;
	
	public static final String FIREFOX_BROWSER = "firefox";
	public static final String CHROME_BROWSER = "chrome";
	public static final String EDGE_BROWSER = "edge";
	public static final String IE_BROWSER = "internet explorer";
	public static final String MS_EDGE = "MicrosoftEdge";
	public static final String OPERA_BROWSER = "opera";
	public static final String SAFARI_BROWSER = "safari";
	public static final String TRUE = "true";
	public static final String READY = "ready";
	
	public static final String WD_CHROME_PATH = "webdriver.chrome.driver"; 
	public static final String WD_GECKO_PATH = "webdriver.gecko.driver";
	public static final String WD_IE_PATH = "webdriver.ie.driver";
	public static final String WD_EDGE_PATH = "webdriver.edge.driver";
	public static final String WD_OPERA_PATH = "webdriver.opera.driver";
	public static final String WD_SAFARI_PATH = "webdriver.safari.driver";
	public static final int CONNECTION_TIMEOUT = 3;
	
	public static final String SEPARATOR_CHAR = "=";
	public static final String FRAMEPATH_DELIMITER =">";
	public static final String OPEN_BRACKET_DELIMITER ="[";
	public static final String CLOSE_BRACKET_DELIMITER ="]";
	public static final String COMMA_DELIMITER =",";

	public static final String SLASH_DELIMITER ="|";
	
	public static final String TAG_OPTION = "option";
	
	public static final int TA_SLEEP = 500;
	
	public static final String CURRENT_CONTEXT = "current";
	public static final String PARENT_CONTEXT = "parent";
	public static final String MAIN_CONTEXT = "main";
	public static final String XPATH_PREFIX = "//";
	
	public static final long TAID_RADIOBUTTON = 0x00000B01;
	public static final long TAID_CHECKBOX = 0x00000C01;
}

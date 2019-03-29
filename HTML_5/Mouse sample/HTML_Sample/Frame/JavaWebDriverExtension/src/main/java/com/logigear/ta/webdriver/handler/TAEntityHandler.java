package com.logigear.ta.webdriver.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.common.AbtComparator;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.common.WDFramePath;
import com.logigear.ta.webdriver.common.WDUtilities;
import com.logigear.ta.webdriver.model.WDRemoteServer;
import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.JavaScriptSupport;
import com.logigear.ta.webdriver.support.PropName;
import com.logigear.ta.webdriver.support.Settings;
import com.logigear.ta.webdriver.support.WDSettingManager;

public class TAEntityHandler {
	private static TAEntityHandler instance = null;
	private static String m_strActionSessionID = "id-0";
	public static TAEntityHandler instance() {
		if (instance == null) {
			instance = new TAEntityHandler();
		}
		return instance;
	}
	
	private TAEntityHandler()
	{
		m_strActionSessionID = "id-1";
	}
	
	private void setActionSessionID(String id)
	{
		m_strActionSessionID = id;
	}
	
	private String getActionSessionID()
	{
		return m_strActionSessionID;
	}
	
	public int[] getMatched(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID)
	{
		boolean autoSwitch = WDSettingManager.getInstance().getBooleanSetting(Settings.TASETTING_AUTO_SWITCH_WINDOWS, Settings.TASETTING_AUTO_SWITCH_WINDOWS_DEFAULT);
		ArrayList<String> matchedHandles = new ArrayList<String>();
		return matchWindows(remote, props, values, compareFlag, actionSessionID, autoSwitch, matchedHandles);
	}
	
	private int[] matchWindows(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID, boolean autoSwitch, List<String> matchedHandles)
	{
		int taRes = TAConst.TA_OK;
		HashMap<String, String> mapProps = new HashMap<String, String>();
		for(int i = 0; i < props.length; i++)
		{
			mapProps.put(props[i], values[i]);
		}
		Set<String> currentHandles = null;
		
		// match 'sessionid' property
		if(mapProps.containsKey(PropName.TAPROPERTY_SESSION_ID))
		{
			String sessionid = mapProps.remove(PropName.TAPROPERTY_SESSION_ID);
			taRes = matchSessionIdProperty(remote, sessionid, compareFlag);
			if(taRes == TAConst.TA_OK)
				currentHandles = WDRemoteServer.getCurrentHandles(remote);
		}
		
		if(taRes == TAConst.TA_OK && !mapProps.isEmpty())
		{
			// match current active window
			if(!autoSwitch)
			{
				taRes = matchActiveWindow(remote, mapProps, compareFlag, actionSessionID, matchedHandles);
			}
			// match all windows
			else
			{
				if(currentHandles == null)
					currentHandles = WDRemoteServer.getCurrentHandles(remote);
				
				if(currentHandles != null)
					taRes = matchAllWindows(remote, mapProps, compareFlag, actionSessionID, currentHandles, matchedHandles);
				else
				{
					taRes = TAConst.TA_FALSE;
				}
			}
			
			if(currentHandles != null)
				currentHandles.clear();
		}
		
		if(currentHandles != null)
			matchedHandles.addAll(currentHandles);
		
		// convert error code
		if(matchedHandles.size() > 1)
		{
			taRes = TAConst.TA_ERR_ENTITY_MOREONE_MATCHED;
		}
		else if(matchedHandles.size() == 1)
		{
			taRes = TAConst.TA_OK;
		}
		else if(matchedHandles.size() == 0)
		{
			taRes = TAConst.TA_ERR_ENTITY_NO_MATCHED;
		}
		
		return new int[] { taRes, matchedHandles.size()};
	}
	
	private int matchNormalProperty(RemoteWebDriver remote, Map<String, String> props, int compareFlag)
	{
		int taRes = TAConst.TA_OK;
		for(Entry<String, String> it : props.entrySet())
		{
			taRes = TAConst.TA_FALSE;
			Object[] res = WDRemoteServer.getWindowProperty(remote, it.getKey());
			taRes = (Integer)res[0];
			if(taRes == TAConst.TA_OK)
			{
				taRes = AbtComparator.StringCompare((String)res[1], it.getValue(), compareFlag);
			}
			
			if(taRes != TAConst.TA_OK)
			{
				break;
			}
		}
		return taRes;
	}
	
	public String getMatchedHandles(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID)
	{
		ArrayList<String> matchedHandles = new ArrayList<String>();
		matchWindows(remote, props, values, compareFlag, actionSessionID, true, matchedHandles);
		return String.join(TAConst.SLASH_DELIMITER, matchedHandles);
	}
	
	public int[] switchWindow(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID) 
	{
		ArrayList<String> matchedHandles = new ArrayList<String>();
		int[] res = null;
		int windowWait = WDSettingManager.getInstance().getSetting(Settings.TASETTING_WINDOW_WAIT, Settings.TASETTING_WINDOW_WAIT_DEFAULT);
		long lTimeout = System.currentTimeMillis() + windowWait * 1000;
		do
		{
			matchedHandles.clear();
			res = matchWindows(remote, props, values, compareFlag, actionSessionID, true, matchedHandles);
			if(res[0] == TAConst.TA_OK || res[0] == TAConst.TA_ERR_ENTITY_MOREONE_MATCHED)
				break;
			WDUtilities.sleep(TAConst.TA_SLEEP);
		}
		while(System.currentTimeMillis() < lTimeout);
		
		if(matchedHandles.size() == 1) {
			String window = matchedHandles.get(0);
			WDFramePath.getInstance().setActiveWindow(window);
		}
		
		return res;
	}
	
	private int matchSessionIdProperty(RemoteWebDriver remote, String sessionidProp, int compareFlag){
		int taRes = TAConst.TA_FALSE;
		String sessionid = WDRemoteServer.getSessionId(remote);
		if(AbtComparator.StringCompare(sessionid, sessionidProp, compareFlag) == TAConst.TA_OK){
			taRes = TAConst.TA_OK;
		}
		return taRes;
	}
	
	private int matchActiveWindow(RemoteWebDriver remote, Map<String, String> mapProps, int compareFlag, String actionSessionID, List<String> matchedHandles){
		String currentHandle = null;
		int taRes = TAConst.TA_OK;
		// match 'handle' property
		if(mapProps.containsKey(PropName.TAPROPERTY_HANDLE)){
			String handle = mapProps.remove(PropName.TAPROPERTY_HANDLE);
			currentHandle = WDRemoteServer.getCurrentHandle(remote);
			if(AbtComparator.StringCompare(currentHandle, handle, compareFlag) != TAConst.TA_OK){
				taRes = TAConst.TA_FALSE;
			}
		}
		
		if(taRes == TAConst.TA_OK && !mapProps.isEmpty()){
			if(needWaitingForWebDone(actionSessionID)){
				waitforWebReady(remote);
			}
			taRes = matchNormalProperty(remote, mapProps, compareFlag);
		}
		
		if(taRes == TAConst.TA_OK){
			if(currentHandle == null) {
				currentHandle = WDRemoteServer.getCurrentHandle(remote);
			}
			matchedHandles.add(currentHandle);
		}
		
		return taRes;
	}
	
	private int matchAllWindows(RemoteWebDriver remote, Map<String, String> mapProps, int compareFlag, String actionSessionID, Set<String> currentHandles, List<String> matchedHandles){
		int taRes = TAConst.TA_OK;
		
		String currentHandle = null;
		if(taRes == TAConst.TA_OK && !mapProps.isEmpty()){
			currentHandle = WDRemoteServer.getCurrentHandle(remote);
			
			for(String handle : currentHandles){
				WDRemoteServer.switchToWindow(remote, handle);
				
				if(needWaitingForWebDone(actionSessionID)){
					waitforWebReady(remote);
				}
				taRes = matchNormalProperty(remote, mapProps, compareFlag);
				
				if(taRes == TAConst.TA_OK){
					matchedHandles.add(handle);
				}
			}
		}
		
		if(matchedHandles.size() == 1){
			WDRemoteServer.switchToWindow(remote, matchedHandles.get(0));
			WDFramePath.getInstance().setActiveWindow(matchedHandles.get(0));
		}
		else if(currentHandle != null){
			WDRemoteServer.switchToWindow(remote, currentHandle);
			WDFramePath.getInstance().setActiveWindow(currentHandle);
		}
		
		return taRes;
	}
	
	public boolean needWaitingForWebDone(String actionSessionID)
	{
		String strOldActionSessionID = getActionSessionID();
		boolean bSameSession = actionSessionID.equalsIgnoreCase(strOldActionSessionID);
		setActionSessionID(actionSessionID);
		return !bSameSession;
	}
	
	public void waitforWebReady(RemoteWebDriver remote)
	{
		int nPageLoadTimeout = WDSettingManager.getInstance().getSetting(Settings.TASETTING_PAGE_WAIT, Settings.TASETTING_DEFAULT_PAGE_WAIT);
		
		long lTimeout = System.currentTimeMillis() + nPageLoadTimeout*1000;
		do {
			if(checkWebDone(remote)){
				break;
			}
			WDUtilities.sleep(100);
		} while(System.currentTimeMillis() < lTimeout);
	}
	
	private boolean checkWebDone(RemoteWebDriver remote)
	{
		boolean taRes = false;
		
		String strExpectedState = WDSettingManager.getInstance().getSetting(Settings.TASETTING_PAGE_WAIT_STATE, Settings.TASETTING_DEFAULT_PAGE_WAIT_STATE);
		int nExpectedState = Settings.mapPageState.get(strExpectedState);
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_PAGE_PROPERTY);
		Object objResult = remote.executeScript(script, "readyState");
		if (objResult != null) {
			String strCurrentState = String.valueOf(objResult);
			int nCurrentState = Settings.mapPageState.get(strCurrentState);
			if(nCurrentState >= nExpectedState) {
				taRes = true;
			}
		}
		
		return taRes;
	}
}

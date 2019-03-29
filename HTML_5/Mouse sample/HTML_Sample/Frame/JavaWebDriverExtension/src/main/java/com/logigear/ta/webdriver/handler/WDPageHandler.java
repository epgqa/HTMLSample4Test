package com.logigear.ta.webdriver.handler;

import java.io.IOException;
import java.net.ConnectException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.Command;
import org.openqa.selenium.remote.DriverCommand;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.remote.UnreachableBrowserException;
import org.openqa.selenium.remote.service.DriverService;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.logigear.ta.common.AbtComparator;
import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.ElementDefinition;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.common.WDFramePath;
import com.logigear.ta.webdriver.common.WDUtilities;
import com.logigear.ta.webdriver.model.WDElement;
import com.logigear.ta.webdriver.model.WDRemoteServer;
import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.JavaScriptSupport;
import com.logigear.ta.webdriver.support.PropName;
import com.logigear.ta.webdriver.support.Settings;
import com.logigear.ta.webdriver.support.WDSettingManager;

public class WDPageHandler {

	private static WebElement matchElement(RemoteWebDriver remote, String propName, String propValue,
			List<String> propNameArr, List<String> propValArr, boolean isLoadInvisible, int compareFlag) {
		WebElement ele = matchElementInDoc(remote, propName, propValue, propNameArr, propValArr, isLoadInvisible, compareFlag);
		if (ele == null) {
			AbtTrace.info("Can not find element in document");
			ele = matchElementInFrames(remote, propName, propValue, propNameArr, propValArr, isLoadInvisible, compareFlag);
		}
		
		if(ele == null) {
			AbtTrace.info("Can not find element in matchElementInFrames");
		}
		
		return ele;
	}

	private static WebElement matchElementInDoc(RemoteWebDriver remote, String propName,
			String propValue, List<String> propNameArr, List<String> propValArr, 
			boolean isLoadInvisible, int compareFlag) {

		// temp not use parentContainer
		WebElement[] lstElement = WDRemoteServer.findElementsBy(remote, propName, propValue);
		if(lstElement != null && lstElement.length != 0){
			for (int i = 0; i < lstElement.length; i++) {

				WebElement ele = lstElement[i];
				
				//temp not use
				if (isLoadInvisible == false) {
					if(!isDisplay(remote, ele))
						continue;
				}

				if (isMatchElement(ele, propNameArr, propValArr, compareFlag)) {
					return ele;
				}
			}
		}else {
			AbtTrace.warning("Can not find element by " + propName + "|" + propValue);
		}

		return null;
	}

	private static boolean isDisplay(RemoteWebDriver remote, WebElement ele) {
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_IS_DISPLAYED);
		boolean value = WDElement.checkDisplayed(remote, script, ele);
		return value;
	}

	private static boolean isMatchElement(WebElement ele, List<String> propNameArr, List<String> propValArr, int compareFlag) {
		
		boolean isMatch = true;
		String tempPropName;
		String tempPropValue;
		
		if (propNameArr != null) {
			for (int i = 0; i < propNameArr.size(); i++) {
				tempPropName = propNameArr.get(i);
				tempPropValue = propValArr.get(i);
				
				if("".equals(tempPropName)) {
					continue;
				}
				
				String value = getElementProperty(ele, tempPropName);
				if (tempPropValue == null || value == null || tempPropValue.equals(value) == false) {
					isMatch = false;
					break;
				}
			}
		}

		return isMatch;
	}

	private static String getElementProperty(WebElement ele, String propName) {
		String value = WDElementHandler.getProperty(ele, propName);
		return value;
	}

	public static int navigate(RemoteWebDriver remote, String url,String targetInstance) {
		int result = WDRemoteServer.navigate(remote, url,targetInstance);
		return result;
	}

	public static int[] switchWindow(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID) {

		return TAEntityHandler.instance().switchWindow(remote, props, values, compareFlag, actionSessionID);
	}

	public static Object[] getWindowProperty(RemoteWebDriver remote, String propName) {
		Object[] result = WDRemoteServer.getWindowProperty(remote, propName);
		return new Object[]{result[0].toString(),result[1].toString()};
	}

	public static WebElement getMatchElementByXPath(RemoteWebDriver remote, String xPath,
			boolean loadInvisible) {

		List<String> xPathData = WDUtilities.parseFramepathData(xPath);

		// xPathElement is the last string
		// remove last index to get list parent Xpath
		int lastIndex = xPathData.size() - 1;
		String xPathElement = xPathData.remove(lastIndex);
		
		// find frame element and switch to frame which contain this element
		// if have no frame, method return TA_OK
		//it contains frames path
		
		WebElement frame = null;
		WebElement matchedElement = null;
		if(xPathData.size() > 0){
		
			frame = switchToFramePath(remote, xPathData);
			//the xpath contain frame and switch to frame path
			if(xPathData.size() > 0 && frame != null){
				// [Oct 31, 2018 hoang.pham][Bug 17682][GWD]Setting 'load invisible controls' work wrong when turn on setting webdriver to ON
				// + Root cause: not use setting "load invisible control" when matching by xpath
				// + Solution: implement this setting for matching by xpath
				matchedElement = getElementByXpath(remote, xPathElement, loadInvisible);
			}
		}else{
			//match in the current content
			matchedElement = getElementByXpath(remote, xPathElement, loadInvisible);
		}
		
		// find ele at the last frame
		if(matchedElement == null){
			AbtTrace.warning("Can not match element with xpath" + xPath);
		}
		
		return matchedElement;
	}

	// switch to the last frame in list frame xPath
	private static WebElement switchToFramePath(RemoteWebDriver remote, List<String> lstFrameXpath) {


		WebElement element = null;
		for (String xPathFrame : lstFrameXpath) {
			
			element = getElementByXpath(remote, xPathFrame, true);

			if (element != null) {
				WDRemoteServer.switchToFrame(remote, element);
			} else {
				break;
			}
		}
		return element;
	}

	// get element from Xpath
	private static WebElement getElementByXpath(RemoteWebDriver remote, String xPath, boolean isLoadInvisible) {

		xPath = WDUtilities.replaceXPath(xPath);
		WebElement ele = WDRemoteServer.findElementByXpath(remote, xPath);

		if (ele != null) {
			//temp not use
			if (isLoadInvisible == false) {
				if(!isDisplay(remote, ele))
					return null;
			}
			return ele;
		}else{
			AbtTrace.warning("Can not get element " + xPath);
		}
		
		return null;
	}
	
	private static String[] getPrimaryProp(List<String> lstProperties, List<String> lstValues) {
		
		int index = WDUtilities.findNonEmptyItem(lstValues);
		
		// no property contain value, no element will be returned
		if(index == -1) {
			return null;
		}			
		
		String nonEmptyProp = lstProperties.get(index);
		// 10/18/2018 binh nguyen : #17512
		
		// if nonEmptyProp is supported by WebDriver
		//		set it as primary property to find element
		// 		remove it from list remaining properties that use for verify matched element
		boolean bPropSupported = isPropertySupported(nonEmptyProp);
		if (bPropSupported == true) {
			String primaryPropName = lstProperties.remove(index);
			String primaryPropValue = lstValues.remove(index);
			return new String[] {primaryPropName,primaryPropValue};
		}
		
		// if no have any non-empty property except ta class (ta class always at the end of list properties due to we defined on plugin)
		//		decode ta class for get tag name and set tag name as primary property to find element
		if (nonEmptyProp.equalsIgnoreCase(PropName.TAPROPERTY_TACLASS)) {
			String sTAClass = lstValues.get(index);
			StringBuilder tagName = new StringBuilder();
			StringBuilder tagType = new StringBuilder();
			TAClassHandler.getInstance().decodeTACLass(sTAClass, tagName, tagType);
			
			return new String[] {PropName.TAPROPERTY_TAGNAME, tagName.toString()};
		}
		
		return null;
	}
	
	public static WebElement getElementByProperties(RemoteWebDriver remote, String[] lstProperties,
			String[] lstValues, boolean isLoadInvisible, int compareFlag, String actionSessionID) {
		
		String[] primaryProp = null;
		List<String> propNameArr = null;
		List<String> propValArr = null;
		try {
			propNameArr = new LinkedList<String>(Arrays.asList(lstProperties));
			propValArr = new LinkedList<String>(Arrays.asList(lstValues));
			primaryProp = getPrimaryProp(propNameArr,propValArr);
		}catch(Exception e) {
			Problems.handleException("getElementByProperties", e);
		}

		if(primaryProp == null) {
			AbtTrace.info("getElementByProperties - Can not get primary property");
			return null;
		}
		
		int taRes = TAConst.TA_FALSE;
		//switch to the current saved context
		taRes = switchToCurrentFrame(remote);
		if(taRes == TAConst.TA_FALSE) {
			AbtTrace.info("getElementByProperties - Can not switch frame");
			return null;
		}else if(taRes == TAConst.TA_ERR_ELEMENT_NOT_MATCH) {
			AbtTrace.info("getElementByProperties - not match the any current frame");
			String window = remote.getWindowHandle();
			WDFramePath.getInstance().goToMain(window);
			WDRemoteServer.switchToDefault(remote);
		}
		// should wait for page ready after switching
		if(TAEntityHandler.instance().needWaitingForWebDone(actionSessionID)){
			TAEntityHandler.instance().waitforWebReady(remote);
		}
		
		String primaryPropName = primaryProp[0];
		String primaryPropValue = primaryProp[1];
		
		WebElement matchedElement = null;
		// support backward compatible, using TA xPath
		if (primaryPropName.equalsIgnoreCase(PropName.TAPROPERTY_XPATH)) {
			matchedElement = matchElementByXPath(remote, primaryPropValue, propNameArr, propValArr, isLoadInvisible);
		} else {
			matchedElement = matchElement(remote, primaryPropName, primaryPropValue, propNameArr, propValArr,
				isLoadInvisible, compareFlag);
		}
		
		return matchedElement;
	}


	private static WebElement matchElementByXPath(RemoteWebDriver remote, String xPathValue, List<String> propNameArr,
			List<String> propValArr, boolean isLoadInvisible) {
		
		WebElement matchedElement = getMatchElementByXPath(remote, xPathValue, isLoadInvisible);
		// [Oct 31, 2018 hoang.pham][Bug 17707]TA Class is not validate when capture control having both ta class and xpath value
		// + Root cause: not validate "ta class" after found control defined by xpath
		// + Solution: in case "ta class" is defined in Element Definition, we should validate "ta class" for found control
		if (matchedElement == null) {
			return null;
		}
		
		// Due to we defined that xpath is not conbined with other property except "ta class"
		// we need check list remaining properties contain only one property "ta class"
		// Then, we validate it
		if(propNameArr.size() == 1 && propValArr.size() == 1) {
			String sDefPropName = propNameArr.get(0);
			if (sDefPropName.equalsIgnoreCase(PropName.TAPROPERTY_TACLASS)) {
				String sDefTAClass = propValArr.get(0);
				String sRealTAClass = WDElementHandler.getTAClass(matchedElement);
				
				if (sDefTAClass.equals(sRealTAClass) == false) {
					return null;
				}
			}
		}
		return matchedElement;
	}
	
	private static boolean isPropertySupported(String propName) {
		
		boolean bRes = WDUtilities.mapPropsSupported.contains(propName);
		
		return bRes;
	}
	
	private static WebElement matchElementInFrames(RemoteWebDriver remote, String propName,
			String propValue, List<String> propNameArr, List<String> propValArr,
			boolean isLoadInvisible, int compareFlag) {

		List<WebElement> listFrames = new ArrayList<WebElement>();

		List<WebElement> iframes = remote.findElementsByTagName("iframe");
		if(iframes != null) {
			listFrames.addAll(iframes);
		}
		
		List<WebElement> frames = remote.findElementsByTagName("frame");
		if(frames != null) {
			listFrames.addAll(frames);
		}

		for (WebElement frame : listFrames) {

			WDRemoteServer.switchToFrame(remote, frame);
			// find element. if element found, break and return
			WebElement ele = matchElement(remote, propName, propValue, propNameArr, propValArr, isLoadInvisible, compareFlag);
			if (ele != null) {
				return ele;
			} else {
				WDRemoteServer.switchToParentFrame(remote);
			}
		}

		return null;
	}

	public static int quitWebDriver(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			Set<String> handles = remote.getWindowHandles();
			for(String window : handles){
				taRes = closeWindow(remote, window);
			}
		} catch (Exception ex) {
			AbtTrace.info("Cannot close all browser before quit because " + ex.getMessage());
		}
		
		taRes = WDRemoteServer.quitWebDriver(remote);

		return taRes;
	}
	
	private static int closeWindow(RemoteWebDriver remote, String handle)
	{
		int taRes = TAConst.TA_FALSE;
		try {
			remote.switchTo().window(handle);
			remote.close();
			taRes = TAConst.TA_OK;
		}
		catch(Exception ex) {
			AbtTrace.info("Cannot close window " + handle + "because " + ex.getMessage());
		}
		return taRes;
	}
	
	public static String[] getElementsByXpath(RemoteWebDriver remote, String Xpath,
			boolean isLoadInvisible) {

		List<String> xPathData = WDUtilities.parseFramepathData(Xpath);

		// xPathElement is the last string
		// remove last index to get list parent Xpath
		int lastIndex = xPathData.size() - 1;
		String xPathElement = xPathData.remove(lastIndex);

		WDRemoteServer.switchToDefault(remote);

		// find frame element and switch to frame which contain this element
		// if have no frame, method return TA_OK
		WebElement frame = switchToFramePath(remote, xPathData);

		// find elements at the last frame
		String[] signatureArr = findElementsByXPath(remote, xPathElement, frame, true);

		return signatureArr;
	}

	private static String[] findElementsByXPath(RemoteWebDriver remote, String Xpath,
			WebElement parent, boolean isLoadInvisible) {

		String[] signatureArr = null;

		Xpath = WDUtilities.replaceXPath(Xpath);
		WebElement[] elements = WDRemoteServer.findElementsBy(remote, PropName.TAPROPERTY_XPATH, Xpath);

		if (elements != null) {

			signatureArr = new String[elements.length];

			for (int i = 0; i < elements.length; i++) {

				WebElement ele = elements[i];

				String signature = WDElementHandler.getSignature(ele);

				signatureArr[i] = signature;
			}
		}

		return signatureArr;
	}
	
	public static int typeText(RemoteWebDriver remote, String text) {
		
		int taRes = TAConst.TA_FALSE;
		
		taRes = WDRemoteServer.typeText(remote, text);
		
		return taRes;	
	}
	
	public static int setFocusToNextElement(RemoteWebDriver remote)
	{
		int taRes = TAConst.TA_FALSE;
		
		if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
			// .WebElement.sendKeys("{alt}{tab}") doesn't work
			// use Actions to sendKeys
			Actions actions = new Actions(remote);
			actions.keyDown(Keys.ALT).sendKeys(Keys.TAB).keyUp(Keys.ALT).perform();
			taRes = TAConst.TA_OK;
		}
		else {
			taRes = WDRemoteServer.typeText(remote, "{tab}");
		}
		
		return taRes;
	}
	
	public static int[] closeBrowser(RemoteWebDriver remote) {
		int nWindows = -1;
		try
		{
			nWindows = remote.getWindowHandles().size();
		}
		catch(Exception ex)
		{
			
		}
		int taRes = WDRemoteServer.closeBrowser(remote);
		if(nWindows > 0)
			nWindows --;
		
		return new int[] {taRes, nWindows};
	}
	
	public static int deleteAllCookies(RemoteWebDriver remote) {
		int taRes = WDRemoteServer.deleteAllCookies(remote);
		return taRes;
	}
	
	private static Alert getPopupHandle(RemoteWebDriver remote, int timeOut) {
		Alert alert = null;
		try {
			WebDriverWait wait = new WebDriverWait(remote, timeOut);
			wait.until(ExpectedConditions.alertIsPresent());
			alert = remote.switchTo().alert();
		} catch(Exception ex) {
			Problems.handleException(ex.getClass().getSimpleName(), ex);
		}
		return alert;
	}
	
	public static int clickPopup(RemoteWebDriver remote, String button, int timeOut) {
		int taRes = TAConst.TA_FALSE;
		
		Alert alert = getPopupHandle(remote, timeOut);
		if(alert != null) {
			if(button.equalsIgnoreCase("ok")) {
				alert.accept();
				taRes = TAConst.TA_OK;
			} 
			else if(button.equalsIgnoreCase("cancel")) {
				alert.dismiss();
				taRes = TAConst.TA_OK;
			}
		}
		
		return taRes;
	}
	
	public static Object[] copyPopupMessage(RemoteWebDriver remote, int timeOut) {
		String strRes = "" + TAConst.TA_FALSE;
		String message = "";
		
		Alert alert = getPopupHandle(remote, timeOut);
		if(alert != null) {
			message = alert.getText();
			strRes = "" + TAConst.TA_OK;
		}
		Object[] taRes = new Object[] {strRes, message};
		return taRes;
	}
	
	public static int enterValueInPopup(RemoteWebDriver remote, String value, int timeOut) {
		int taRes = TAConst.TA_FALSE;
		
		Alert alert = getPopupHandle(remote, timeOut);
		if(alert != null) {
			alert.sendKeys(value);
			alert.accept();
			taRes = TAConst.TA_OK;
		}
		
		return taRes;
	}
	
	public static int waitForPageProperty(RemoteWebDriver remote, String proName, String expectedValue, int timeOut, int compareFlag) {
		int taRes = TAConst.TA_FALSE;
		
		try {
			long lTimeout = System.currentTimeMillis() + timeOut*1000;
			do {
				String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_PAGE_PROPERTY);
				Object objResult = remote.executeScript(script, proName);
				if (objResult != null && AbtComparator.StringCompare(String.valueOf(objResult), expectedValue, compareFlag) == TAConst.TA_OK) 
				{
					taRes = TAConst.TA_OK;
					break;
				}
				WDUtilities.sleep(200);
			}
			while(System.currentTimeMillis() < lTimeout);
		} catch (Exception ex) {
			Problems.handleException("waitForPageProperty", ex);
		}
		
		return taRes;
	}
	
	public static int executeScript(RemoteWebDriver remote, String script, Object... paragrams) {
		int taRes = TAConst.TA_FALSE;

		try {
			if (paragrams == null) {
				remote.executeScript(script);
			} else {
				remote.executeScript(script, paragrams);
			}
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("executeScript", ex);
		}
		
		return taRes;
	}
	
	public static Object[] evaluateScript(RemoteWebDriver remote, String script, Object... paragrams) {

		//add evaluate into script java script 
		script = script.replace("\\", "\\\\");
		script = script.replace("\"", "\\\"");
		String newScript = "";
		
		newScript = newScript.concat("return window.eval(\"");
		newScript = newScript.concat(script);
		newScript = newScript.concat("\");");
		
		Object oRes = null;
		String errorJS = null;
		String value = null;
		String resultJS = "false";
		Object[] executeResult = null;
		try {
			if (paragrams == null) {
				oRes = remote.executeScript(newScript);
			} else {
				oRes = remote.executeScript(newScript, paragrams);
			}

			if (oRes != null) {
				value = oRes.toString();
			}
			resultJS = "true";
		} catch (Exception ex) {
			errorJS = ex.getMessage();
			String[] errStack = ex.getMessage().split("\n");
			if (errStack.length > 0) {
				errorJS = errStack[0];
			}

			Problems.handleException("executeScript", ex);
		}

		if (errorJS == null) {
			executeResult = new Object[] {resultJS,value};
		} else {
			executeResult = new Object[] {resultJS,errorJS.toString()};
		}

		return executeResult;
	}
	
	public static int refresh(RemoteWebDriver remote) {
		int taRes = WDRemoteServer.refresh(remote);
		return taRes;
	}
	
	public static int goBack(RemoteWebDriver remote) {
		int taRes = WDRemoteServer.goBack(remote);
		return taRes;
	}
	
	public static int goForward(RemoteWebDriver remote) {
		int taRes = WDRemoteServer.goForward(remote);
		return taRes;
	}
	
	public static int setSetting(String settingName,String settingValue) {
		WDSettingManager.getInstance().setSetting(settingName, settingValue);
		return TAConst.TA_OK;
	}
	
	public static int[] getMatched(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID)
	{
		return TAEntityHandler.instance().getMatched(remote, props, values, compareFlag, actionSessionID);
	}
	
	public static int updateSettings(String[] settings, String[] values)
	{
		WDSettingManager.getInstance().updateSettings(settings, values);
		return TAConst.TA_OK;
	}
	
	public static String getMatchedHandles(RemoteWebDriver remote, String[] props, String[] values, int compareFlag, String actionSessionID)
	{
		return TAEntityHandler.instance().getMatchedHandles(remote, props, values, compareFlag, actionSessionID);
	}
	
	public static int captureScreen(RemoteWebDriver remote,
			int x, int y, int width, int height, String fileType, String localtion){
			
		return WDRemoteServer.captureScreen(remote, null, x, y, width, height, fileType, localtion);
	}
	
	public static int maximizeWindow(RemoteWebDriver remote){
		int taRes = TAConst.TA_FALSE;	
		try{
			remote.manage().window().maximize();
			taRes = TAConst.TA_OK;
		}catch(Exception ex){
			Problems.handleException("maximizeWindow", ex);
		}
		return taRes;
	}
	
	public static int minimizeWindow(RemoteWebDriver remote){
		int taRes = TAConst.TA_FALSE;
		// 9/17/2018 binh nguyen : #16789
		taRes = setPosition(remote, -2000, 0);
		if(taRes != TAConst.TA_OK)
		{
			taRes = setSize(remote, 0, 0);
		}
		return taRes;
	}
	
	public static int resizeWindow(RemoteWebDriver remote, int width, int height){
			
		int taRes = TAConst.TA_FALSE;	
		try{
			remote.manage().window().setSize(new Dimension(width, height));
			taRes = TAConst.TA_OK;
		}catch(Exception ex){
			Problems.handleException("resizeWindow", ex);
		}
		return taRes;
	}
	
	public static int moveWindow(RemoteWebDriver remote, int x, int y){
		
		int taRes = TAConst.TA_FALSE;	
		try{
			remote.manage().window().setPosition(new Point(x, y));
			taRes = TAConst.TA_OK;
			
		}catch(Exception ex){
			Problems.handleException("moveWindow", ex);
		}
		return taRes;
	}
	
	public static int isValidSession(RemoteWebDriver remote){
		int taRes = TAConst.TA_FALSE;	
		try{
			Command statusCmd = new Command(remote.getSessionId(), DriverCommand.STATUS);
			remote.getCommandExecutor().execute(statusCmd);
			remote.getWindowHandles();
			taRes = TAConst.TA_OK;	
		}catch(NoSuchSessionException ex){
			Problems.handleException("validateSession - NoSuchSessionException", ex);
		}catch (UnreachableBrowserException ex) {
			Problems.handleException("validateSession - UnreachableBrowserException", ex);
		}catch (ConnectException ex) {
			Problems.handleException("validateSession - ConnectException", ex);
		}catch (IOException ex) {
			Problems.handleException("validateSession - IOException", ex);
		}catch (WebDriverException ex) {
			Problems.handleException("validateSession - WebDriverException", ex);
		}catch(Exception ex){
			Problems.handleException("validateSession - Other exception", ex);
		}
		
		return taRes;
	}
	
	public static int[] getRect(RemoteWebDriver remote)
	{
		return WDRemoteServer.getRect(remote);
	}
	
	/**
	 * Drag mouse from the coordinate (x1, y1) to (x2, y2) with delay time
	 * Notes:
	 * Because the 'drag mouse' action does not passing element,
	 * so we workaround by using the document's body related coordinates
	 * @param remote
	 * @param x1
	 * @param y1
	 * @param x2
	 * @param y2
	 * @param button
	 * @param delay
	 * @return
	 */
	public static int dragMouse(RemoteWebDriver remote, int x1, int y1, int x2, int y2, int button, long delay)
	{
		int taRes = TAConst.TA_FALSE;
		try {
			RemoteWebElement page = (RemoteWebElement) remote.executeScript("return document.body;");
			int step = Math.abs(x1 - x2) > Math.abs(y1 - y2)? Math.abs(x1 - x2):Math.abs(y1 - y2);
			double pixelStepX = (double)(x2 - x1)/step;
			double pixelStepY = (double)(y2 - y1)/step;
			Actions acts = new Actions(remote);
			// 10/17/2018 binh nguyen : #17416
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.IE_BROWSER)) {
				Dimension size = page.getSize();
				acts = acts.moveToElement(page, x1 - (size.width / 2), y1 - (size.height / 2));
			}
			else {
				acts = acts.moveToElement(page, x1, y1);
			}
			acts = acts.clickAndHold();
			for(int i = 0; i < step; i ++)
			{
				acts = acts.moveByOffset((int)Math.round(pixelStepX), (int)Math.round(pixelStepY));
				if(delay > 0)
					acts = acts.pause(delay);
			}
			acts = acts.release();
			acts.build().perform();
			taRes = TAConst.TA_OK;
		}
		catch(Exception ex) {
			Problems.handleException("dragMouse", ex);
		}
		return taRes;
	}
	
	/**
	 * Move mouse to the coordinate (x, y) on the current window
	 * Notes:
	 * Because the 'drag mouse' action does not passing element,
	 * so we workaround by using the document's body related coordinates
	 * @param remote
	 * @param x
	 * @param y
	 * @return
	 */
	public static int moveMouse(RemoteWebDriver remote, String szX, String szY) {
		int taRes = TAConst.TA_FALSE;
		try {
			RemoteWebElement page = (RemoteWebElement) remote.executeScript("return document.body;");
			Actions actions = new Actions(remote);
			// 10/19/2018 binh nguyen : #17520
			int x = 0;
			int y = 0;
			Dimension size = null;
			if(szX.isEmpty() || szY.isEmpty()) {
				size = page.getSize();
			}
			if(szX.isEmpty()) {
				x = size.width / 2;
			}
			else
				x = Integer.valueOf(szX);
			if(szY.isEmpty()) {
				y = size.height / 2;
			}
			else
				y = Integer.valueOf(szY);
			// 10/17/2018 binh nguyen : #17416
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.IE_BROWSER)) {
				if(size == null)
					size = page.getSize();
				x = x - (size.width / 2);
				y = y - (size.height / 2);
			}
			actions = actions.moveToElement(page, x, y);
			actions.build().perform();
			taRes = TAConst.TA_OK;
		}
		catch(Exception ex) {
			Problems.handleException("moveMouse", ex);
		}
		return taRes;
	}
	
	private static int setSize(RemoteWebDriver remote, int width, int height)
	{
		int taRes = TAConst.TA_FALSE;
		try{
			remote.manage().window().setSize(new Dimension(width, height));
			taRes = TAConst.TA_OK;
		}catch(Exception ex){
			Problems.handleException("setSize", ex);
		}
		return taRes;
	}
	
	private static int setPosition(RemoteWebDriver remote, int x, int y)
	{
		int taRes = TAConst.TA_FALSE;
		try{
			remote.manage().window().setPosition(new Point(x, y));
			taRes = TAConst.TA_OK;
		}catch(Exception ex){
			Problems.handleException("setPosition", ex);
		}
		return taRes;
	}
	
	public static int click(RemoteWebDriver remote, int x, int y, int type) {
		
		int res = TAConst.TA_FALSE;
		try {
			Actions actions = new Actions(remote);
			if (x != 0 || y != 0) {
				actions = actions.moveByOffset(x, y);
			}
			else{
				Dimension size = remote.manage().window().getSize();
				actions = actions.moveByOffset(size.width / 2, size.height / 2);
			}
			if (type == TAConst.TA_LEFT_CLICK) {
				actions = actions.click();
			} else if (type == TAConst.TA_RIGHT_CLICK) {
				actions = actions.contextClick();
			} else if (type == TAConst.TA_DOUBLE_CLICK) {
				actions = actions.doubleClick();
			}
			actions.build().perform();
			res = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("click", ex);
			res = TAConst.TA_FALSE;
		}
		return res;
	}
	
	// [10/02/2018 tam.thanh.tran] BUG-16347: [GWD_Edge] Action "navigate" not return handle number 
	// Root cause: Function get handle has not been implemented
	// Solution: Implement a function which return a handle after navigated
	public static Object[] getCurrentHandles(RemoteWebDriver remote) {
		List<String> result = new ArrayList<String>();
		try {
		AbtTrace.info("getCurrentHandles");
		Set<String> listOfHandles = WDRemoteServer.getCurrentHandles(remote);
		result.add(listOfHandles==null ? "0" : listOfHandles.size() + "");
		result.addAll(listOfHandles);
		}catch (Exception ex) {
			result.clear();
			result.add("0");
			Problems.handleException("getCurrentHandles", ex);
		}
		return result.toArray();
	}
	
	private static int switchToCurrentFrame(RemoteWebDriver remote) {
		
		long start = System.currentTimeMillis();
		String currentHandler = remote.getWindowHandle();
		List<ElementDefinition> frames = WDFramePath.getInstance().getCurrentFramePath(currentHandler);
		List<WebElement> elements = new ArrayList<WebElement>();
		// 11/8/2018 binh nguyen : #17868
		int taRes = WDRemoteServer.switchToDefault(remote);
		if(taRes == TAConst.TA_OK) {
			Object[] ret = switchFramePath(remote,frames,elements,0);
			taRes = ((Integer)ret[0]).intValue();
		}
		
		long end = System.currentTimeMillis();
		AbtTrace.info("switchToCurrentFrame - duration= " + (end-start)/1000);
		return taRes;
	}
	
	private static int swithFrames(RemoteWebDriver remote,List<WebElement> frames) {
		int taRes = TAConst.TA_OK;
		if(frames == null || frames.size() == 0) {
			AbtTrace.info("swithFrames - Empty frames list");
			return taRes;
		}
		
		int nFrame = 0;
		for(WebElement element : frames) {
			taRes = WDRemoteServer.switchToFrame(remote, element);
			if(taRes == TAConst.TA_FALSE) {
				AbtTrace.info("swithFrames - Can not switch to frame -" + nFrame);
				break;
			}
			nFrame++;
		}
		
		return taRes;
	}

	private static Object[] switchFramePath(RemoteWebDriver remote, List<ElementDefinition> framePaths , List<WebElement> frames,long objectWait) {
		AbtTrace.info("switchFramePath - BEGIN");
		long startTime = System.currentTimeMillis();
		int taRes = TAConst.TA_FALSE;
		String errorFrame = "";
		
		if(framePaths.isEmpty()) {
			AbtTrace.warning("switchFramePath - no frame ");
			taRes = TAConst.TA_OK;
		}
		
		WebElement frameElement = null;
		for (ElementDefinition elementDef : framePaths) {
			errorFrame = "";
			List<String> propNamelst = elementDef.getPropertyNames();
			List<String> propVallst = elementDef.getPropertyValues();
			
			String[] primaryProp = getPrimaryProp(propNamelst,propVallst);
			
			if(primaryProp == null) {
				errorFrame = elementDef.getElementDef();
				AbtTrace.warning("switchFramePath - can not get prop the frame " + errorFrame);
				break;
			}
			
			String primaryPropName = primaryProp[0];
			String primaryPropValue = primaryProp[1];
			
			long lTimeout = System.currentTimeMillis() + objectWait * 1000;
			do {
				if (primaryPropName.equalsIgnoreCase(PropName.TAPROPERTY_XPATH)) {
					frameElement = matchElementByXPath(remote, primaryPropValue, propNamelst, propVallst, true);
				}else {
					frameElement = matchElementInDoc(remote, primaryPropName, primaryPropValue, propNamelst, propVallst, true, 6);
				}
				
				if(frameElement != null)
					break;
				
				WDUtilities.sleep(TAConst.TA_SLEEP);
			}while(System.currentTimeMillis() < lTimeout);
				
			if (frameElement != null) {
				taRes = WDRemoteServer.switchToFrame(remote, frameElement);
			}else {
				AbtTrace.warning("Can not match frame=" + elementDef.getElementDef());
				taRes = TAConst.TA_ERR_ELEMENT_NOT_MATCH;
			}
			
			if(taRes == TAConst.TA_OK) {
				frames.add(frameElement);
			}else if(taRes == TAConst.TA_ERR_ELEMENT_NOT_MATCH) {
				errorFrame = elementDef.getElementDef();
				AbtTrace.warning("switchFramePath - can not find frame " + errorFrame);
				break;
			}else if(taRes == TAConst.TA_FALSE){
				taRes = TAConst.TA_ERR_ENTITY_SWITCH_FRAME;
				errorFrame = elementDef.getElementDef();
				AbtTrace.warning("switchFramePath - can not switch frame " + errorFrame);
				break;
			}
		}
		
		long endTime = System.currentTimeMillis();
		AbtTrace.info("switchFramePath - duration= " + (endTime-startTime)/1000);
		AbtTrace.info("switchFramePath - END");
		return new Object[] {new Integer(taRes), errorFrame};
	}
	
	/**
	 * method to switch the current context to default content(main) or parent frame
	 * @param remote
	 * @param context
	 * @return
	 */
	public static int switchDestination(RemoteWebDriver remote, String context) {

		int taRes = TAConst.TA_OK;
		
		if(!TAConst.PARENT_CONTEXT.equalsIgnoreCase(context)
			&& !TAConst.MAIN_CONTEXT.equalsIgnoreCase(context)) {
			taRes = TAConst.TA_FALSE;
			
			return taRes;
		}
		try {
			String windowHandle = remote.getWindowHandle();
			taRes = switchToCurrentFrame(remote);
			if(taRes == TAConst.TA_ERR_ELEMENT_NOT_MATCH) {
				WDFramePath.getInstance().goToMain(windowHandle);
				WDRemoteServer.switchToDefault(remote);
				taRes = TAConst.TA_OK;
			}else if(taRes == TAConst.TA_FALSE) {
				AbtTrace.error("switchFrameByPath - Can not switch before framePath");
				return taRes;
			}
			
			if(TAConst.PARENT_CONTEXT.equalsIgnoreCase(context)) {
				taRes = WDRemoteServer.switchToParentFrame(remote);
				if(taRes == TAConst.TA_OK) {
					taRes = WDFramePath.getInstance().goToFrameParent(windowHandle);
				}
			}else if(TAConst.MAIN_CONTEXT.equalsIgnoreCase(context)){
				taRes = WDRemoteServer.switchToDefault(remote);
				if(taRes == TAConst.TA_OK) {
					WDFramePath.getInstance().goToMain(windowHandle);
				}
			}
		}
		catch(Exception ex) {
			Problems.handleException("switchDestination", ex);
			taRes = TAConst.TA_FALSE;
		}
		
		return taRes;
	}
	
	/**
	 * method to switch frame with frame path
	 * path is a list of definition separate by '>' character
	 * @param remote
	 * @param framePath
	 * @return
	 */
	public static Object[] switchFrameByPath(RemoteWebDriver remote, String framePath) {

		int taRes = TAConst.TA_FALSE;
		String errorFrame = "";
		
		boolean escapeSequence = WDSettingManager.getInstance().getBooleanSetting(Settings.TASETTING_ESCAPE_SEQUENCE, Settings.TASETTING_ESCAPE_SEQUENCE_DEFAULT);
		WDFramePath.getInstance().setEscapeSetting(escapeSequence);
		taRes = WDFramePath.getInstance().validateFramePath(framePath);
		if(taRes == TAConst.TA_OK) {
			taRes = WDFramePath.getInstance().parsingFramePath(framePath);
			if(taRes == TAConst.TA_OK) {
				// 11/6/2018 binh nguyen : #17760
				StringBuilder info = new StringBuilder();
				taRes = WDFramePath.getInstance().checkValid(info);
				if(taRes != TAConst.TA_OK) {
					errorFrame = info.toString();
				}
			}else {
				errorFrame = framePath;
				taRes = TAConst.TA_FALSE;
			}
		}else {
			errorFrame = framePath;
		}
		
		if(taRes == TAConst.TA_OK) {
			
			//wait to find element to switch frame
			int objectWait = WDSettingManager.getInstance().getSetting(Settings.TASETTING_OBJECT_WAIT, Settings.TASETTING_OBJECT_WAIT_DEFAULT);
			try {
				String windowHandle = remote.getWindowHandle();
				//not match the old
				taRes = switchToCurrentFrame(remote);
				if(taRes == TAConst.TA_ERR_ELEMENT_NOT_MATCH) {
					WDFramePath.getInstance().goToMain(windowHandle);
					WDRemoteServer.switchToDefault(remote);
					taRes = TAConst.TA_OK;
				}
				
				if(taRes == TAConst.TA_OK) {
					
					// apply "page wait" before matching & switch to frame path
					TAEntityHandler.instance().waitforWebReady(remote);
					
					List<ElementDefinition> framePaths = WDFramePath.getInstance().getFrames();
					List<WebElement> switchedFrames = new ArrayList<WebElement>();
					Object[] ret = switchFramePath(remote,framePaths,switchedFrames,objectWait);
					
					int switchRes = ((Integer)ret[0]).intValue();
					errorFrame = ret[1].toString();
					if(switchRes == TAConst.TA_OK && errorFrame.isEmpty()) {
						taRes = TAConst.TA_OK;
						WDFramePath.getInstance().goToFrameChildsPath(windowHandle,framePaths);
					}else {
						taRes = TAConst.TA_FALSE;
					}
				}else {
					errorFrame = framePath;
					AbtTrace.info("switchFrameByPath - Can not switch before framePath");
				}
			}catch(Exception ex) {
				Problems.handleException("switchFrameByPath", ex);
				taRes = TAConst.TA_FALSE;
			}
			
		}
		
		Object[] result = new Object[] {String.valueOf(taRes), errorFrame};
		return result;
	}
	
	public static int stopService(DriverService service) {
		int taRes = TAConst.TA_FALSE;
		try {
			if(service.isRunning()) {
				service.stop();
			}
			taRes = TAConst.TA_OK;
		}
		catch(Exception ex) {
			Problems.handleException("stopService", ex);
		}
		return taRes;
	}
	
	public static int setPageWait(RemoteWebDriver remote, int nPageWait) {
		WDSettingManager.getInstance().setSetting(Settings.TASETTING_PAGE_WAIT, String.valueOf(nPageWait));
		remote.manage().timeouts().pageLoadTimeout(nPageWait, TimeUnit.SECONDS);
		return TAConst.TA_OK;
	}
	
}

package com.logigear.ta.webdriver.model;

import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.InvalidSelectorException;
import org.openqa.selenium.NoSuchWindowException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.common.TAKeyboard;
import com.logigear.ta.webdriver.common.WDUtilities;
import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.JavaScriptSupport;
import com.logigear.ta.webdriver.support.PropName;
import com.logigear.ta.webdriver.support.Settings;
import com.logigear.ta.webdriver.support.WDSettingManager;

public class WDRemoteServer {

	public static WebElement findElementByXpath(RemoteWebDriver remote, String xPath) {

		WebElement wdElement = null;
		try {
			//// AbtTrace.info("findElementByXpath info: " + xPath);
			wdElement = remote.findElementByXPath(xPath);
		} catch (Exception ex) {
			//// AbtTrace.error("findElementByXpath - xpath=" + xPath);
			Problems.handleException("findElementByXpath", ex);
		}
		return wdElement;
	}

	public static int closeBrowser(RemoteWebDriver remote) {
		// AbtTrace.info("WDRemoteServer::closeBrowser - BEGIN");
		int taRes = TAConst.TA_FALSE;
		try {
			// 6/15/2018 binh nguyen : #14517
			remote.close();
			taRes = TAConst.TA_OK;
		} catch (Exception e) {
			AbtTrace.error("WDRemoteServer : closeBrowser: \n" + e.toString());
		}
		// AbtTrace.info("WDRemoteServer::closeBrowser - END");
		return taRes;
	}

	public static int deleteAllCookies(RemoteWebDriver remote) {

		int result = TAConst.TA_FALSE;
		try {
			remote.manage().deleteAllCookies();
			result = TAConst.TA_OK;
		} catch (Exception ex) {
			// AbtTrace.error("delete all cookies");
			Problems.handleException("delete all cookies", ex);
		}
		return result;
	}

	public static WebElement findElementBy(RemoteWebDriver remote, String propName, String propValue) {

		WebElement wdElement = null;
		try {
			By bProp = WDUtilities.convertToBy(propName, propValue);
			if (bProp != null) {
				wdElement = remote.findElement(bProp);
			}
		} catch (Exception ex) {
			// AbtTrace.error("findElementBy - propName=" + propName + "|" + propValue);
			Problems.handleException("findElementBy", ex);
		}
		return wdElement;
	}

	public static WebElement[] findElementsBy(RemoteWebDriver remote, String propName, String propValue) {

		List<WebElement> wdElements = null;
		WebElement[] arrElements = null;

		try {
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.IE_BROWSER)) {
				wdElements = WDIEServer.findElementsBy(remote, propName, propValue);
			}
			else {
				By bProp = WDUtilities.convertToBy(propName, propValue);
				if (bProp != null) {
					wdElements = remote.findElements(bProp);
				}
			}
		} 
		catch(InvalidSelectorException ex) {
			// 9/24/2018 binh nguyen : #16895
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.FIREFOX_BROWSER)) {
				wdElements = WDFirefoxServer.findElementsBy(remote, propName, propValue);
			}
		}
		catch (Exception ex) {
			// AbtTrace.error("findElementsBy - propName=" + propName + "|" + propValue);
			Problems.handleException("findElementsBy", ex);
		}

		if (wdElements != null) {
			int nLength = wdElements.size();
			arrElements = new WebElement[nLength];

			for (int i = 0; i < nLength; i++) {
				arrElements[i] = wdElements.get(i);
			}
		}

		return arrElements;
	}

	public static Object executeScript(RemoteWebDriver remote, String script, Object... paragrams) {

		Object oRes = null;
		try {
			if (paragrams == null) {
				oRes = remote.executeScript(script);
			} else {
				oRes = remote.executeScript(script, paragrams);
			}
		} catch (Exception ex) {
			Problems.handleException("executeScript", ex);
		}

		return oRes;
	}

	public static List<String> executeJS(RemoteWebDriver remote, String script, Object... paragrams) {

		List<String> result = new ArrayList<String>();
		Object oRes = null;
		String errorJS = null;
		String value = null;
		try {
			if (paragrams == null) {
				oRes = remote.executeScript(script);
			} else {
				oRes = remote.executeScript(script, paragrams);
			}

			if (oRes != null) {
				value = oRes.toString();
			}
		} catch (Exception ex) {
			errorJS = ex.getMessage();
			String[] errStack = ex.getMessage().split("\n");
			if (errStack.length > 0) {
				errorJS = errStack[0];
			}

			Problems.handleException("executeScript", ex);
		}

		if (errorJS == null) {
			result.add("true");
			if (value != null) {
				result.add(value.toString());
			}
		} else {
			result.add("false");
			result.add(errorJS.toString());
		}

		return result;
	}

	public static int switchToFrame(RemoteWebDriver remote, WebElement wdElement) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.switchTo().frame(wdElement);
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("switchToFrame", ex);
		}
		return taRes;
	}
	
	public static int switchToParentFrame(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.switchTo().parentFrame();
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("switchToParentFrame", ex);
		}
		return taRes;
	}

	public static int switchToDefault(RemoteWebDriver remote) {
		AbtTrace.info("WDServerConnection : switchToDefault");
		int taRes = TAConst.TA_FALSE;
		try {
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.MS_EDGE)) {
				taRes = WDEdgeServer.switchToDefault(remote);
			}
			else {
				remote.switchTo().defaultContent();
				taRes = TAConst.TA_OK;
			}
		} catch (Exception ex) {
			Problems.handleException("switchToDefault", ex);
		}
		return taRes;
	}

	public static Object[] getWindowProperty(RemoteWebDriver remote, String propName) {

		int taRes = TAConst.TA_FALSE;
		String propValue = "";
		Object[] oRes = new Object[2];
		try {

			taRes = 0;
			if (propName.equals(TAConst.TITLE)) {
				propValue = remote.getTitle();
			} else if (propName.equals(TAConst.DOC_TITLE)) {
				propValue = remote.getTitle();
			} else if (propName.equals(TAConst.URL)) {
				propValue = remote.getCurrentUrl();
			} else if (propName.equals(TAConst.DOMAIN)) {
				propValue = (String) remote.executeScript("return document.domain");
			}else if (propName.equals(PropName.TAPROPERTY_HANDLE)) {
				propValue = remote.getWindowHandle();
			}else if (propName.equals(PropName.TAPROPERTY_SESSION_ID)) {
				propValue = remote.getSessionId().toString();
			}else if (propName.equals(PropName.TAPROPERTY_LEFT)) {
				// [10/10/2018 tam.thanh.tran] BUG-17019: [GWD] Action 'move window' does not work properly
				// Root cause: The result of window().getPosition().getX() is not correct in Safari
				// Solution: Using Javascript to get window position
				if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
					propValue = WDSafariServer.getLeftWindow(remote);
				}else {				
					propValue = String.valueOf(remote.manage().window().getPosition().getX());
				}
			}else if (propName.equals(PropName.TAPROPERTY_TOP)) {
				if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.SAFARI_BROWSER)) {
					propValue = WDSafariServer.getTopWindow(remote);
				}else {				
					propValue = String.valueOf(remote.manage().window().getPosition().getY());
				}
			}else if (propName.equals(PropName.TAPROPERTY_WIDTH)) {
				propValue = String.valueOf(remote.manage().window().getSize().getWidth());
			}else if (propName.equals(PropName.TAPROPERTY_HEIGHT)) {
				propValue = String.valueOf(remote.manage().window().getSize().getHeight());
			}else {
				taRes = TAConst.TA_NOPROPERTY;
			}

		} catch (Exception ex) {
			// AbtTrace.error("getWindowProperty - propName=" + propName);
			Problems.handleException("getWindowProperty", ex);
		}
		Integer resObject = new Integer(taRes);

		oRes[0] = resObject;
		oRes[1] = propValue;
		return oRes;
	}

	public static int switchToWindow(RemoteWebDriver remote, String windowId) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.switchTo().window(windowId);
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			// AbtTrace.error("switchToWindow - winid=" + windowId);
			Problems.handleException("switchToWindow", ex);
		}
		return taRes;
	}

	public static String getCurrentWindow(RemoteWebDriver remote) {

		String currentHandle = "";
		try {
			currentHandle = remote.getWindowHandle();
		} catch (Exception ex) {
			Problems.handleException("getCurrentWindow", ex);
		}
		return currentHandle;
	}

	public static Object[] getWindows(RemoteWebDriver remote) {

		Object[] arrWindow = null;
		try {
			Set<String> windows = remote.getWindowHandles();
			arrWindow = windows.toArray();
		} catch (Exception ex) {
			Problems.handleException("getWindows", ex);
		}
		return arrWindow;
	}

	@SuppressWarnings("unchecked")
	public static int[] getPageRectInView(RemoteWebDriver remote, String script) {

		int[] rect = null;
		try {
			Object res = remote.executeScript(script);

			if (res instanceof Map) {
				rect = new int[4];
				Map<String, Long> mapRes = (Map<String, Long>) res;
				rect[0] = mapRes.get("left").intValue();
				rect[1] = mapRes.get("top").intValue();
				rect[2] = mapRes.get("right").intValue();
				rect[3] = mapRes.get("bottom").intValue();
			}
		} catch (Exception ex) {
			Problems.handleException("getPageRectInView", ex);
		}
		return rect;
	}

	public static int refresh(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.navigate().refresh();
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("refresh", ex);
		}

		return taRes;
	}

	public static int quitWebDriver(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.quit();
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("quitWebDriver", ex);
		}

		return taRes;
	}

	public static int goBack(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.navigate().back();
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("goBack", ex);
		}

		return taRes;
	}

	public static int goForward(RemoteWebDriver remote) {

		int taRes = TAConst.TA_FALSE;
		try {
			remote.navigate().forward();
			taRes = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("goForward", ex);
		}

		return taRes;
	}

	public static WebElement getElementAtPoint(RemoteWebDriver remote, String script, int x, int y, boolean isTopFrame,
			boolean isCheckVisible) {

		WebElement wdElement = null;
		try {
			wdElement = (WebElement) executeScript(remote, script, x, y, isTopFrame, isCheckVisible);
		} catch (Exception ex) {
			Problems.handleException("getElementAtPoint", ex);
		}
		return wdElement;
	}

	public static WebElement getElementFocused(RemoteWebDriver remote) {

		WebElement activeElement = null;
		try {
			activeElement = remote.switchTo().activeElement();
		} catch (Exception ex) {
			Problems.handleException("getElementFocused", ex);
		}
		return activeElement;
	}

	public static String getBrowserName(RemoteWebDriver remote) {
		String browserName = "";
		try {
			Capabilities capabilities = remote.getCapabilities();
			if (capabilities != null) {
				browserName = capabilities.getBrowserName();
			}
		} catch (Exception ex) {
			Problems.handleException("getBrowserName", ex);
		}
		return browserName;
	}

	public static Object findMapElementsBy(RemoteWebDriver remote, String propName, String propValue) {
		List<WebElement> wdElements = null;
		Map<WebElement, String> mapElement = new HashMap<WebElement, String>();

		try {
			By bProp = WDUtilities.convertToBy(propName, propValue);
			if (bProp != null) {
				// wdElements = wdElement.findElements(bProp);
				wdElements = remote.findElements(bProp);
			}
		} catch (Exception ex) {
			// AbtTrace.error("findMapElementsBy - proName=" + propName +"|" + propValue);
			Problems.handleException("findMapElementsBy", ex);
		}

		if (wdElements != null) {
			int nLength = wdElements.size();
			String script = "function checkVisibility(htmlElement) { var isActivePage = function () { if ( (document.hidden !== undefined) && (document.hidden == false) ) { return true; } return false; }; var isPageVisible = isActivePage(); if (isPageVisible == true) { if (htmlElement instanceof HTMLElement) { var s = getComputedStyle(htmlElement); if (s.visibility == 'hidden' || s.display == 'none') { return false; } } if (htmlElement.hidden == 'true') { return false; } return true; } return false; }; return checkVisibility(arguments[0]);";
			for (int i = 0; i < nLength; i++) {
				String szInfor = wdElements.get(i).getTagName();
				boolean szVisible = WDElement.checkVisibility(remote, script, wdElements.get(i));
				szInfor = szInfor + "-" + String.valueOf(szVisible);
				mapElement.put(wdElements.get(i), szInfor);
			}
		}

		return (Object) mapElement;
	}

	private static int tryToNavigate(RemoteWebDriver remote, String url, String targetInstance){
		int taRes = TAConst.TA_FALSE;
		try {
			Object[] arrWindows  = WDRemoteServer.getWindows(remote);
			if(arrWindows != null && arrWindows.length > 0){
				String lastWindow = arrWindows[arrWindows.length - 1].toString();
				WDRemoteServer.switchToWindow(remote, lastWindow);
			}
			
			if(Settings.TASETTING_TARGET_BROWSER_NEW_WINDOW.equalsIgnoreCase(targetInstance)
					|| Settings.TASETTING_TARGET_BROWSER_NEW_TAB.equalsIgnoreCase(targetInstance)){
					taRes = navigateNewTarget(remote, url, targetInstance);
			}else{
				remote.navigate().to(url);
			}
			
			taRes = TAConst.TA_OK;
		}catch (TimeoutException ex) {
			Problems.handleException("tryToNavigate", ex);
			taRes = TAConst.TA_OK;
		}catch (WebDriverException e) { // SessionNotCreatedException && UnreachableBrowserException
			taRes = TAConst.TA_ERR_WEB_DRIVER_SESSION_NOT_CREATED;
			Problems.handleException("tryToNavigate", e);
		}  catch (Exception ex) {
			Problems.handleException("tryToNavigate", ex);
		} 
		
		return taRes;
	}
	
	public static int navigate(RemoteWebDriver remote, String url, String targetInstance) {

		AbtTrace.info("WDRemoteServer::navigate - BEGIN");
		
		String validURL = url;
		if (validURL.startsWith("\"")) {
			validURL = validURL.substring(1);
		}

		if (validURL.endsWith("\"")) {
			validURL = validURL.substring(0, validURL.length() - 1);
		}

		int taRes = TAConst.TA_FALSE;
		try {
			int nPageLoadTimeout = WDSettingManager.getInstance().getSetting(Settings.TASETTING_PAGE_WAIT, Settings.TASETTING_DEFAULT_PAGE_WAIT);
			remote.manage().timeouts().pageLoadTimeout(nPageLoadTimeout, TimeUnit.SECONDS);
			if(Settings.TASETTING_TARGET_BROWSER_NEW_WINDOW.equalsIgnoreCase(targetInstance)
				|| Settings.TASETTING_TARGET_BROWSER_NEW_TAB.equalsIgnoreCase(targetInstance)){
				taRes = navigateNewTarget(remote, validURL, targetInstance);
			}
			else{
				remote.navigate().to(validURL);
			}
			taRes = TAConst.TA_OK;
		} catch (TimeoutException ex) {
			AbtTrace.error("WDRemoteServer : navigate error: \n" + ex.toString());
			taRes = TAConst.TA_OK;
		} catch(NoSuchWindowException ex){
			//in this case the window closed and the active window selenium invalid
			//it can not execute javascript on the invalid window
			taRes = tryToNavigate(remote,url,targetInstance);
		} catch (WebDriverException e) { // SessionNotCreatedException && UnreachableBrowserException
			taRes = TAConst.TA_ERR_WEB_DRIVER_SESSION_NOT_CREATED;
			AbtTrace.error("WDRemoteServer : navigate error: \n" + e.toString());
		}  catch (Exception ex) {
			AbtTrace.error("WDRemoteServer : navigate error: \n" + ex.toString());
			Problems.handleException("navigate", ex);
		} 
		
		AbtTrace.info("WDRemoteServer::navigate - END");
		return taRes;
	}
	
	public static int typeText(RemoteWebDriver remote, String TAtext) {
		int taRes = TAConst.TA_FALSE;
		try {
			// 9/25/2018 binh nguyen : #17015
			TAtext = TAtext.replace("\r\n", "\n");

			List<String> texts = TAKeyboard.getInstance(remote).parseTAInputString(TAtext);
			WebElement element = remote.switchTo().activeElement();
			for(String text : texts){
				element.sendKeys(text);
			}

			taRes = TAConst.TA_OK;
		}catch(Exception ex){
			Problems.handleException("typeText", ex);
		}
		return taRes;
	}

	/**
	 * get the active area to capture 
	 * @param remote 
	 * @param wdElement
	 * @param left
	 * @param top
	 * @param width
	 * @param height
	 * @return
	 * @throws Exception
	 */
	private static Rectangle getActiveArea(RemoteWebDriver remote, WebElement wdElement,
									int left, int top, int width,int height) throws Exception{
		
		
		Rectangle activeRect = null;
		Rectangle UIelementRect = null;
		Rectangle definedRect = null; 
		Rectangle recoredRect = null;
		
		//get UIElement depend on control or window
		if(wdElement != null){
			UIelementRect = new Rectangle(wdElement.getLocation().x + remote.manage().window().getPosition().x, wdElement.getLocation().y + remote.manage().window().getPosition().y
										, wdElement.getSize().width, wdElement.getSize().height);
		}else{
			//element is null -> capture screen with window rectangle
			UIelementRect = new Rectangle(remote.manage().window().getPosition().x, remote.manage().window().getPosition().y, remote.manage().window().getSize().width, remote.manage().window().getSize().height);	
		}
		
		definedRect = new Rectangle(UIelementRect.x + left, UIelementRect.y + top, width, height);
		activeRect = UIelementRect.intersection(definedRect);
		
		//get insection rect if it not empty else try to get ui element
		if(activeRect != null && activeRect.isEmpty() == false){
			recoredRect = activeRect;
		}else {
			recoredRect = UIelementRect;
		}
		
		return recoredRect;
	}
	
	public static int captureScreen(RemoteWebDriver remote, WebElement wdElement,
			int x, int y, int width, int height, String fileType, String localtion){
		
		int taRes = TAConst.TA_FALSE;				
		BufferedImage pngImage = null;
		BufferedImage imageBuf = null;
		byte[] screenFile = null;
		ByteArrayInputStream imageInputStream = null;
		File saveFile = null;
		try {
			//get the window screen shot image with byte array as png encoded
			screenFile = remote.getScreenshotAs(OutputType.BYTES);
			imageInputStream = new ByteArrayInputStream(screenFile);
			
			
			pngImage = ImageIO.read(imageInputStream);
			//get recored area to capture
			Rectangle activeRect = getActiveArea(remote,wdElement,x,y,width,height);
			
			pngImage = pngImage.getSubimage(activeRect.x, activeRect.y, activeRect.width, activeRect.height);
			
			//convert png encoded to another as jpg,bmp,jpeg
			imageBuf = WDUtilities.convertPNGImageTo(pngImage,fileType);
			
			saveFile = new File(localtion);
			ImageIO.write(imageBuf, fileType, saveFile);
			taRes = TAConst.TA_OK;
		
		} catch (Exception ex) {
			Problems.handleException("captureScreen", ex);
		} finally{
			if(pngImage != null){
				pngImage.flush();
			}
				
			if(imageBuf != null){
				imageBuf.flush();
			}
			
			if(imageInputStream != null){
				try {
					imageInputStream.close();
				} catch (IOException e) {
					
				}
			}
			
			screenFile = null;
		}
		return taRes;
	}
	
	public static Set<String> getCurrentHandles(RemoteWebDriver remote){
		try{
			return remote.getWindowHandles();
		}
		catch(Exception ex){
			Problems.handleException("getCurrentHandles", ex);
		}
		return null;
	}
	
	public static String getCurrentHandle(RemoteWebDriver remote){
		try{
			return remote.getWindowHandle();
		}
		catch(Exception ex){
			Problems.handleException("getCurrentHandle", ex);
		}
		return null;
	}
	
	public static String getSessionId(RemoteWebDriver remote){
		try{
			return remote.getSessionId().toString();
		}
		catch(Exception ex){
			Problems.handleException("getSessionId", ex);
		}
		return null;
	}
	
	public static int[] getRect(RemoteWebDriver remote)
	{
		int[] res = new int[] {TAConst.TA_FALSE};
		try {
			Point pos = remote.manage().window().getPosition();
			Dimension size = remote.manage().window().getSize();
			res = new int[] { TAConst.TA_OK, pos.x, pos.y, pos.x + size.width, pos.y + size.height };
		}
		catch(Exception ex) {
			Problems.handleException("getRect", ex);
		}
		return res;
	}
	
	public static int click(RemoteWebDriver remote, int nX, int nY, int nClickType) {
		int res = TAConst.TA_FALSE;
		try {
			Actions actions = new Actions(remote);
			WebElement document = (WebElement) remote.executeScript("return document;");
			if (nX != 0 || nY != 0) {
				actions = actions.moveToElement(document, nX, nY);
			}
			else{
				actions = actions.moveToElement(document);
			}
			if (nClickType == TAConst.TA_LEFT_CLICK) {
				actions = actions.click();
			} else if (nClickType == TAConst.TA_RIGHT_CLICK) {
				actions = actions.contextClick();
			} else if (nClickType == TAConst.TA_DOUBLE_CLICK) {
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
	
	private static int navigateNewTarget(RemoteWebDriver remote, String validURL, String targetInstance) {
		int taRes = TAConst.TA_FALSE;
		Set<String> handles = null;
		try {
			handles = remote.getWindowHandles();
		}
		catch(Exception ex) {
			
		}
		String openWindowScript = JavaScriptSupport.getInstance().getScript(JSName.JS_OPEN_WINDOW);
		remote.executeScript(openWindowScript, targetInstance, "");
		try {
			// 10/22/2018 binh nguyen : #17545
			// By default, browser does not allow access local file via java-script 
			// so in case the url is file then we will 
			// 1.open new blank window/tab
			// 2.switch to new window/tab
			// 3.navigate
			Set<String> after = remote.getWindowHandles();
			for(String handle : after) {
				if(handles == null || handles.contains(handle) == false) {
					remote.switchTo().window(handle);
					remote.navigate().to(validURL);
					break;
				}
			}
		}
		catch(Exception ex) {
			Problems.handleException("navigateNewTarget", ex);
		}
		return taRes;
	}
}

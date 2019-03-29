package com.logigear.ta.webdriver.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.InvalidArgumentException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.Point;
import org.openqa.selenium.Rectangle;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;

import com.google.common.base.Splitter;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.common.WDUtilities;

public class WDElement {
	private static final String RELATIVE_PATH = "//";

	public static String getAttribute(WebElement wdElement, String proName) {

		String proValue = null;
		try {
			RemoteWebElement remoteElement = (RemoteWebElement) wdElement;
			if (remoteElement != null) {
				proValue = remoteElement.getAttribute(proName);
			} else {
				// AbtTrace.warning("getAttribute - remoteElement NULL");
			}
		} catch (Exception ex) {
			//// AbtTrace.error("getAttribute - proName=" + proName);
			Problems.handleException("getAttribute", ex);
		}
		return proValue;
	}

	public static int move(RemoteWebDriver remote, WebElement wdElement, String szX, String szY) {

		int res = TAConst.TA_OK;
		try {
			Actions builder = new Actions(remote);
			// 10/19/2018 binh nguyen : #17520
			Dimension size = wdElement.getSize();
			int nX = size.width / 2;
			int nY = size.height / 2;
			if(szX.isEmpty() == false)
				nX = Integer.valueOf(szX);
			if(szY.isEmpty() == false)
				nY = Integer.valueOf(szY);
			if (szX.isEmpty() && szY.isEmpty()) {
				builder.moveToElement(wdElement).build().perform();
			}
			else if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.IE_BROWSER)) {
				nX = nX - (size.width / 2);
				nY = nY - (size.height / 2);
				builder.moveToElement(wdElement, nX, nY).build().perform();
			} else {
				builder.moveToElement(wdElement, nX, nY).build().perform();
			}
		} catch (Exception e) {
			Problems.handleException("move", e);
			res = TAConst.TA_FALSE;
		}
		return res;
	}

	public static int click(WebElement wdElement, RemoteWebDriver remote) {

		int res = TAConst.TA_FALSE;
		try {

			wdElement.click();
			res = TAConst.TA_OK;
		}
		// temp fix timeout exception for selenium 3.5 + gecko 0.18 + firefox 55
		catch (TimeoutException ex) {
			res = TAConst.TA_OK;
		}
		catch(InvalidArgumentException ex) {
			res = clickJS(remote, wdElement);
		}
		catch(ElementClickInterceptedException ex) {
			// 11/12/2018 binh nguyen : #17985
			if(remote.getCapabilities().getBrowserName().equalsIgnoreCase(TAConst.IE_BROWSER)) {
				res = clickJS(remote, wdElement);
			}
			else {
				Problems.handleException("click", ex);
			}
		}
		catch(WebDriverException ex) {
			if(ex.getMessage().startsWith("Invalid argument")) {
				res = clickJS(remote, wdElement);
			}
			else {
				Problems.handleException("click", ex);
			}
		}
		catch (Exception ex) {
			Problems.handleException("click", ex);
		}
		return res;
	}

	public static int click(RemoteWebDriver remote, WebElement wdElement, int nX, int nY, int nClickType) {
		int res = TAConst.TA_FALSE;
		try {
			if(nClickType == TAConst.TA_LEFT_CLICK && nX == 0 && nY == 0)
			{
				res = click(wdElement, remote);
			}
			else
			{
				Actions builder = new Actions(remote);
				if (nX != 0 || nY != 0) {
					builder = builder.moveToElement(wdElement, nX, nY);
				}
				if (nClickType == TAConst.TA_LEFT_CLICK) {
					builder = builder.click();
				} else if (nClickType == TAConst.TA_RIGHT_CLICK) {
					builder = builder.contextClick();
				} else if (nClickType == TAConst.TA_DOUBLE_CLICK) {
					builder = builder.doubleClick();
				}
				builder.build().perform();
				res = TAConst.TA_OK;
			}
		} catch (Exception ex) {
			Problems.handleException("click", ex);
			res = TAConst.TA_FALSE;
		}
		return res;

	}

	public static WebElement findElementBy(WebElement wdElement, String propName, String propValue) {

		WebElement wdElementRes = null;
		By byPro = WDUtilities.convertToBy(propName, propValue);
		try {
			wdElementRes = wdElement.findElement(byPro);
		} catch (Exception ex) {
			//// AbtTrace.error("findElementBy - proName=" + propName +"|" + propValue);
			Problems.handleException("findElementBy", ex);
		}
		return wdElementRes;
	}

	public static String getTagName(WebElement wdElement) {

		String tagName = null;
		try {
			tagName = wdElement.getTagName();
		} catch (Exception ex) {
			Problems.handleException("getTagName", ex);
		}
		return tagName;
	}

	public static String getElementId(WebElement wdElement) {

		String elementSig = null;
		try {
			RemoteWebElement remoteElement = (RemoteWebElement) wdElement;
			if (remoteElement != null) {
				elementSig = remoteElement.getId();
			}
		} catch (Exception ex) {
			Problems.handleException("getElementId", ex);
		}
		return elementSig;
	}

	public static WebElement findElementByXpath(WebElement wdElement, String xPath) {

		WebElement resWDElement = null;
		try {
			resWDElement = wdElement.findElement(By.xpath(xPath));
		} catch (Exception ex) {
			// AbtTrace.error("findElementByXpath - xpath=" + xPath);
			Problems.handleException("findElementByXpath", ex);
		}
		return resWDElement;
	}

	public static WebElement[] findElementsBy(WebElement wdElement, String propName, String propValue) {

		List<WebElement> wdElements = null;
		WebElement[] arrElements = null;

		try {
			By bProp = WDUtilities.convertToBy(propName, propValue);
			if (bProp != null) {
				wdElements = wdElement.findElements(bProp);
			}
		} catch (Exception ex) {
			// AbtTrace.error("findElementsBy - proName=" + propName +"|" + propValue);
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

	public static Object findMapElementsBy(RemoteWebDriver remote, WebElement wdElement, String propName,
			String propValue) {

		List<WebElement> wdElements = null;
		Map<WebElement, String> mapElement = new HashMap<WebElement, String>();

		try {
			By bProp = WDUtilities.convertToBy(propName, propValue);
			if (bProp != null) {
				wdElements = wdElement.findElements(bProp);
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
				boolean szVisible = checkVisibility(remote, script, wdElements.get(i));
				szInfor = szInfor + "-" + String.valueOf(szVisible);
				mapElement.put(wdElements.get(i), szInfor);
			}
		}

		return (Object) mapElement;
	}

	public static int scrollToView(WebElement wdElement) {

		int res = TAConst.TA_FALSE;
		try {

			RemoteWebElement remoteWDElement = (RemoteWebElement) wdElement;
			// it scroll into view with this function
			// it execute getElementLocationOnceScrolledIntoView to scroll
			remoteWDElement.getCoordinates().inViewPort();
			res = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("scrollToView", ex);
		}
		return res;
	}

	public static boolean isFocused(RemoteWebDriver remote, WebElement wdElement) {

		boolean res = false;
		try {
			res = wdElement.equals(remote.switchTo().activeElement());

		} catch (Exception ex) {
			Problems.handleException("isFocused", ex);
		}

		return res;
	}

	public static boolean isEnabled(WebElement wdElement) {

		boolean res = false;
		try {

			res = wdElement.isEnabled();

		} catch (Exception ex) {
			Problems.handleException("isEnabled", ex);
		}

		return res;
	}

	public static boolean isDisplayed(WebElement wdElement) {

		boolean res = false;
		try {

			res = wdElement.isDisplayed();

		} catch (Exception ex) {
			Problems.handleException("isDisplayed", ex);
		}

		return res;
	}

	public static boolean isSelected(WebElement wdElement) {

		boolean res = false;
		try {

			res = wdElement.isSelected();

		} catch (Exception ex) {
			Problems.handleException("isSelected", ex);
		}

		return res;
	}

	public static int isValid(WebElement wdElement) {

		int res = TAConst.TA_OK;
		try {

			if (wdElement.isDisplayed() == false) {
				res = TAConst.TA_STATE_INVISIBLE;
			}

		} catch (NoSuchElementException ex) {
			res = TAConst.TA_FALSE;
		} catch (StaleElementReferenceException ex) {
			res = TAConst.TA_FALSE;
		} catch (Exception ex) {
			Problems.handleException("isValid", ex);
		}

		return res;
	}

	public static int clearText(WebElement wdElement) {

		int res = TAConst.TA_FALSE;
		try {

			wdElement.clear();
			res = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("clearText", ex);
		}

		return res;
	}

	public static int setText(RemoteWebDriver remote, String script, WebElement wdElement, String text) {

		int res = TAConst.TA_FALSE;
		try {
			//# 6/29/2018 binh nguyen : #15055
			Object obj = remote.executeScript(script, wdElement, text);
			res = WDUtilities.convert(obj, TAConst.TA_FALSE);
		} catch (Exception ex) {
			// AbtTrace.error("setText - script=" + script +"| text=" + text);
			Problems.handleException("setText", ex);
		}

		return res;
	}

	public static String getInnerText(WebElement wdElement) {

		String innerText = null;
		try {

			innerText = wdElement.getText();

		} catch (Exception ex) {
			Problems.handleException("getInnerText", ex);
		}

		return innerText;
	}

	public static String getMaxLengthProperty(RemoteWebDriver remote, String script, WebElement wdElement) {
		String browserName = "";
		Object oRes = null;
		try {
			Capabilities capabilities = remote.getCapabilities();
			if (capabilities != null) {
				browserName = capabilities.getBrowserName();
			}

			oRes = remote.executeScript(script, wdElement, browserName);
		} catch (Exception ex) {
			Problems.handleException("getMaxLengthProperty", ex);
			browserName = "";
		}

		return oRes != null ? String.valueOf(oRes) : null;
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
			// AbtTrace.error("executeScript - script=" + script +"| prop=" + paragrams);
			Problems.handleException("executeScript", ex);
		}

		return oRes;
	}

	public static String getPropertyJS(RemoteWebDriver remote, String script, Object... paragrams) {

		Object oRes = null;
		try {
			if (paragrams == null) {
				oRes = remote.executeScript(script);
			} else {
				oRes = remote.executeScript(script, paragrams);
			}
		} catch (Exception ex) {
			// AbtTrace.error("getPropertyJSWithPropertyName - script=" + script +"| prop="
			// + paragrams);
			Problems.handleException("getPropertyJSWithPropertyName", ex);
		}

		return oRes != null ? String.valueOf(oRes) : null;
	}

	public static boolean checkVisibility(RemoteWebDriver remote, String script, WebElement wdElement) {

		boolean value = false;
		try {
			Object oRes = remote.executeScript(script, wdElement);
			if (oRes instanceof Boolean) {
				value = ((Boolean) oRes).booleanValue();
			}
		} catch (Exception ex) {
			Problems.handleException("checkVisibility", ex);
		}
		return value;
	}

	public static int[] getLocation(WebElement wdElement) {

		int[] coordinate = new int[4];
		try {

			Point elementPt = wdElement.getLocation();
			Dimension elementDim = wdElement.getSize();

			coordinate[0] = elementPt.getX();
			coordinate[1] = elementPt.getY();
			coordinate[2] = coordinate[0] + elementDim.getWidth();
			coordinate[3] = coordinate[1] + elementDim.getHeight();

		} catch (Exception ex) {
			Problems.handleException("getLocation", ex);
		}

		return coordinate;
	}

	public static int getWidth(WebElement wdElement) {

		int width = TAConst.TA_FALSE;
		try {
			Dimension elementDim = wdElement.getSize();
			width = elementDim.getWidth();

		} catch (Exception ex) {
			Problems.handleException("getWidth", ex);
		}

		return width;
	}

	public static int getHeight(WebElement wdElement) {

		int height = TAConst.TA_FALSE;
		try {
			Dimension elementDim = wdElement.getSize();
			height = elementDim.getHeight();

		} catch (Exception ex) {
			Problems.handleException("getHeight", ex);
		}

		return height;
	}

	@SuppressWarnings("unchecked")
	public static int[] getRectangle(RemoteWebDriver remote, String script, WebElement wdElement) {

		int[] rect = null;
		try {

			Object res = remote.executeScript(script, wdElement);

			if (res == null) {
				// AbtTrace.warning("getRectangle - NULL result");
				return rect;
			}

			if (res instanceof Map) {
				rect = new int[4];
				Map<String, Long> mapRes = (Map<String, Long>) res;
				rect[0] = mapRes.get("left").intValue();
				rect[1] = mapRes.get("top").intValue();
				rect[2] = mapRes.get("right").intValue();
				rect[3] = mapRes.get("bottom").intValue();
			} else {
				// AbtTrace.warning("getRectangle - result=" + res.getClass().getName());
			}

		} catch (Exception ex) {
			Problems.handleException("getRectangle", ex);
		}

		return rect;
	}

	public static int sendKeys(WebElement wdElement, String keys) {

		int res = TAConst.TA_FALSE;
		try {
			wdElement.sendKeys(keys);
			res = TAConst.TA_OK;
		} catch (Exception ex) {
			Problems.handleException("sendKeys", ex);
		}

		return res;
	}

	public static String getCSSValue(WebElement wdElement, String propName) {

		String propValue = null;
		try {
			propValue = wdElement.getCssValue(propName);
		} catch (Exception ex) {
			Problems.handleException("getCSSValue", ex);
		}

		return propValue;
	}

	@SuppressWarnings("unchecked")
	public static Object[] getSelectedItems(RemoteWebDriver remote, String script, WebElement wdElement)
			throws Exception {

		Object[] result = null;
		try {

			Object res = remote.executeScript(script, wdElement);

			if (res instanceof ArrayList) {
				ArrayList<String> arrRes = (ArrayList<String>) res;
				result = new Object[arrRes.size()];
				int i = 0;
				for (String item : arrRes) {
					result[i] = item;
					i++;
				}
			}

		} catch (Exception ex) {
			throw (ex);
		}

		return result;
	}

	@SuppressWarnings("unchecked")
	public static int[] Table_findCellText(RemoteWebDriver remote, String script, WebElement wdElement, int compareFlag)
			throws Exception {

		int[] rect = null;
		try {
			Object res = remote.executeScript(script, wdElement, compareFlag);

			if (res instanceof Map) {
				rect = new int[2];
				Map<String, Long> mapRes = (Map<String, Long>) res;
				rect[0] = mapRes.get("row").intValue();
				rect[1] = mapRes.get("col").intValue();
			}
		} catch (Exception ex) {
			throw (ex);
		}
		return rect;
	}

	public static boolean checkDisplayed(RemoteWebDriver remote, String script, WebElement wdElement) {

		boolean bDisplayed = false;
		try {
			Object oRes = remote.executeScript(script, wdElement);
			if (oRes instanceof Boolean) {
				bDisplayed = ((Boolean) oRes).booleanValue();
			}
		} catch (Exception ex) {
			Problems.handleException("checkDisplayed", ex);
		}

		return bDisplayed;
	}

	public static boolean isSVGElement(RemoteWebDriver remote, String script, WebElement wdElement) {

		boolean value = false;
		try {
			Object oValue = remote.executeScript(script, wdElement);
			if (oValue instanceof Boolean) {
				value = ((Boolean) oValue).booleanValue();
			}
		} catch (Exception ex) {
			Problems.handleException("isSVGElement", ex);
		}
		return value;
	}

	/*
	 * calculate index Xpath for specified element
	 */
	public static String getXpathIndex(RemoteWebDriver driver, WebElement webElement, String elementXPath) {

		if (elementXPath == null || elementXPath.isEmpty()) {
			return "";
		}

		String webElementId = ((RemoteWebElement) webElement).getId();

		List<WebElement> listElement = driver.findElements(By.xpath(elementXPath));

		// loop all founded element. compare its runtimeId with webElementId to find
		// index
		for (int i = 0; i < listElement.size(); i++) {
			String id = ((RemoteWebElement) listElement.get(i)).getId();
			if (id.equals(webElementId)) {
				return Integer.toString(i + 1);
			}
		}

		return "";
	}

	/**
	 * this function will calculates and suggests an XPath value for a specific web
	 * element. This xpath value will be the relative path from the specified
	 * element to the specified parents element. The basic algorithm includes some
	 * steps: - calculate the xpath via 'id' attributes. This attributes is a stable
	 * value during development process of web page. So we can use it. - calculate
	 * the xpath via all defined values in HTML source. we ignore the value whose
	 * length it greater than 50 characters. And we get maximum 4 attributes. -
	 * calculate the xpath via absolute path from the HTML element up to the anchor
	 * elements.
	 * 
	 * @param driver
	 * @param webElement
	 * @return
	 */
	public static String getSuggestedXPath(RemoteWebDriver driver, WebElement webElement, String anchorElementXPath,
			boolean hasAnchorPos) {
		if (anchorElementXPath == null || anchorElementXPath.isEmpty()) {

			String suggestPath = getSuggestedXPath(driver, webElement);

			if (suggestPath.isEmpty()) {
				return getXPathUnique(driver, webElement);
			} else {
				return suggestPath;
			}
		}

		WebElement anchorElement = driver.findElementByXPath(anchorElementXPath);
		if (anchorElement == null)
			return "";
		String elementLocator = getElementLocator(driver, webElement);

		StringBuilder sb = new StringBuilder(anchorElementXPath);
		sb.append(RELATIVE_PATH);
		sb.append(webElement.getTagName());

		if (elementLocator.length() > 0)
			sb.append("[" + elementLocator + "]");

		String simplePath = sb.toString();

		if (simplePath.length() > 0) {
			List<WebElement> founded = driver.findElements(By.xpath(simplePath));
			if (founded.size() == 1)
				return simplePath;
		}

		if (hasAnchorPos && (simplePath.length() > 0)) {
			String index = getXpathIndex(driver, webElement, simplePath);
			String resultPath = "(" + simplePath + ")" + "[" + index + "]";
			return resultPath;
		} else {
			// the simplest relative path from node to anchor node is not unique.
			// we tried to used the absolute path
			String currentLocator = webElement.getTagName();
			if (elementLocator.length() > 0)
				currentLocator = currentLocator + "[" + elementLocator + "]";
			String absolutedPath = findUniqueAbsolutePath(driver, anchorElement, anchorElementXPath, webElement,
					currentLocator);
			if (isUniqueXpathDef(driver, absolutedPath)) {
				return absolutedPath;
			}
		}

		return "";
	}

	private static String getElementLocator(RemoteWebDriver driver, WebElement webElement) {
		String elementLocator = getEssentialAttributes(webElement);
		if (StringUtils.isEmpty(elementLocator))
			elementLocator = getAllAttributes(driver, webElement);

		return elementLocator;
	}

	private static String getEssentialAttributes(WebElement webElement) {
		StringBuffer sb = new StringBuffer("");

		String id = webElement.getAttribute("id");
		if (!StringUtils.isEmpty(id))
			sb.append("@id='" + id + "'");

		// String cssClass = webElement.getAttribute("class");
		// if(!StringUtils.isEmpty(cssClass)){
		// String next = sb.length() > 0 ? ("and @class='" + cssClass + "'") :
		// ("@class='" + cssClass + "'");
		// sb.append(next);
		// }
		return sb.toString();
	}

	private static String getAllAttributes(RemoteWebDriver driver, WebElement webElement) {
		int maxAttr = 0;
		StringBuffer sb = new StringBuffer("");

		JavascriptExecutor executor = (JavascriptExecutor) driver;
		Object arrAttr = executor.executeScript(
				"var items = {}; for (index = 0; index < arguments[0].attributes.length; ++index) { items[arguments[0].attributes[index].name] = arguments[0].attributes[index].value }; return items;",
				webElement);
		String allAttrs = arrAttr.toString();
		if (StringUtils.isEmpty(allAttrs) || "{}".equals(allAttrs.trim()))
			return "";

		allAttrs = allAttrs.replace("{", "").replace("}", "");
		Map<String, String> map = Splitter.on(',').withKeyValueSeparator('=').split(allAttrs);

		for (Entry<String, String> entry : map.entrySet()) {
			if (maxAttr == 4)
				break;
			String val = entry.getValue().trim();
			if (val.length() > 50)
				continue;
			if ("".equals(val) || "#".equals(val))
				continue;
			if (isASCIIText(entry.getKey()) && isASCIIText(entry.getValue())) {
				if (sb.length() > 0)
					sb.append(" and ");
				sb.append("@" + entry.getKey().trim() + "='" + entry.getValue().trim() + "'");
				maxAttr++;
			}
		}
		return sb.toString();
	}

	private static boolean isASCIIText(String text) {
		return text.matches("\\A\\p{ASCII}*\\z");
	}

	private static boolean isUniqueXpathDef(RemoteWebDriver driver, String xPath) {
		if (xPath == null || xPath.isEmpty())
			return false;
		List<WebElement> elements = driver.findElements(By.xpath(xPath));
		if (elements.size() == 1)
			return true;
		return false;
	}

	private static String findUniqueAbsolutePath(RemoteWebDriver driver, WebElement anchorElement, String anchorLocator,
			WebElement currentElement, String currentLocator) {
		WebElement parentNode = currentElement.findElement(By.xpath("./.."));
		if (parentNode != null && "body".equalsIgnoreCase(parentNode.getTagName()))
			return null;

		if (!parentNode.equals(anchorElement)) {
			WebElement grandNode = parentNode.findElement(By.xpath("./.."));
			List<WebElement> elements = grandNode.findElements(By.xpath("./" + parentNode.getTagName()));
			if (elements.size() <= 1)
				currentLocator = parentNode.getTagName() + "/" + currentLocator;
			else {
				for (int i = 0; i < elements.size(); i++) {
					if (elements.get(i).equals(parentNode)) {
						currentLocator = parentNode.getTagName() + "[" + (i + 1) + "]" + "/" + currentLocator;
						break;
					}
				}
			}
			return findUniqueAbsolutePath(driver, anchorElement, anchorLocator, parentNode, currentLocator);
		}

		if (anchorLocator == null || anchorLocator.isEmpty()) {
			anchorLocator = getSuggestedXPath(driver, anchorElement);
		}

		return anchorLocator + "/" + currentLocator;
	}

	/**
	 * this function will calculates and suggests an XPath value for a specific web
	 * element without the parent element. The basic algorithm includes some steps:
	 * - calculate the xpath via 'id' attributes. This attributes is a stable value
	 * during development process of web page. So we can use it. - calculate the
	 * xpath via all defined values in HTML source. we ignore the value whose length
	 * it greater than 50 characters. And we get maximum 4 attributes. - calculate
	 * the xpath via absoluted path from the HTML element up to the anchor elements.
	 * The anchor element will be searched and specified by some unique attributes
	 * (id).
	 * 
	 * @param driver
	 * @param webElement
	 * @return
	 */
	public static String getSuggestedXPath(RemoteWebDriver driver, WebElement webElement) {
		if (webElement == null)
			return "";

		String testPath = findUniquePathFromAttribute(driver, webElement);
		if (!StringUtils.isEmpty(testPath))
			return testPath;

		WebElement anchorElementWithID = findAnchorElementByID(webElement);
		if (anchorElementWithID != null) {
			testPath = findUniquePathFromAnchorElement(driver, anchorElementWithID, webElement);
			if (!StringUtils.isEmpty(testPath))
				return testPath;
		}
		return "";
	}

	public static String getXPathUnique(RemoteWebDriver driver, WebElement webElement) {

		String tagName = webElement.getTagName();

		String suggestPath = RELATIVE_PATH + tagName;

		String index = getXpathIndex(driver, webElement, suggestPath);

		suggestPath = "(" + suggestPath + ")" + "[" + index + "]";

		return suggestPath;
	}

	private static String findUniquePathFromAttribute(RemoteWebDriver driver, WebElement webElement) {
		String tagName = webElement.getTagName();
		String essentialAttr = getEssentialAttributes(webElement);

		String samplePath = RELATIVE_PATH + tagName + "[" + essentialAttr + "]";
		if (essentialAttr.length() > 0 && isUniqueXpathDef(driver, samplePath))
			return samplePath;

		String allAttrs = getAllAttributes(driver, webElement);
		if (!StringUtils.isEmpty(allAttrs)) {
			samplePath = RELATIVE_PATH + tagName + "[" + allAttrs + "]";
			if (isUniqueXpathDef(driver, samplePath))
				return samplePath;
		}
		return null;
	}

	private static WebElement findAnchorElementByID(WebElement webElement) {
		WebElement parentNode = webElement.findElement(By.xpath("./.."));
		if (parentNode != null && "body".equalsIgnoreCase(parentNode.getTagName()))
			return null;
		String id = parentNode.getAttribute("id");
		if (!StringUtils.isEmpty(id))
			return parentNode;
		return findAnchorElementByID(parentNode);
	}

	private static String findUniquePathFromAnchorElement(RemoteWebDriver driver, WebElement anchorWithID,
			WebElement webElement) {
		String anchorTagName = anchorWithID.getTagName();

		String anchorLocator = getElementLocator(driver, anchorWithID);

		String currentLocator = webElement.getTagName();
		String eleLocator = getElementLocator(driver, webElement);
		if (StringUtils.isEmpty(eleLocator) == false)
			currentLocator += "[" + eleLocator + "]";

		if (anchorLocator.isEmpty() == false) {
			anchorLocator = RELATIVE_PATH + anchorTagName + "[" + anchorLocator + "]";

			StringBuilder sb = new StringBuilder(anchorLocator);
			sb.append(RELATIVE_PATH);
			sb.append(currentLocator);

			String simplePath = sb.toString();
			if (isUniqueXpathDef(driver, simplePath))
				return simplePath;
		}
		// the simplest relative path from node to anchor node is not unique.
		// we tried to used the absolute path
		String absolutedPath = findUniqueAbsolutePath(driver, anchorWithID, anchorLocator, webElement, currentLocator);
		if (isUniqueXpathDef(driver, absolutedPath)) {
			return absolutedPath;
		}

		return "";
	}
	
	public static int[] getRect(RemoteWebDriver remote, WebElement wdElement) {

		int[] rect = new int[] { TAConst.TA_FALSE };
		try {
			Rectangle rectangle = wdElement.getRect();
			int x = rectangle.x;
			int y = rectangle.y;
			rect = new int[] { TAConst.TA_OK, x, y, x + rectangle.width, y + rectangle.height};

		} catch (Exception ex) {
			Problems.handleException("getRect", ex);
		}

		return rect;
	}
	
	private static int clickJS(RemoteWebDriver remote, WebElement wdElement){
		int taRes = TAConst.TA_FALSE;
		try {
			remote.executeScript("arguments[0].click();", wdElement);
			taRes = TAConst.TA_OK;
		}
		catch(Exception ex) {
			Problems.handleException("clickJS", ex);
		}
		return taRes;
	}
}

package com.logigear.ta.webdriver.handler;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;

import com.logigear.ta.common.AbtComparator;
import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.model.WDElement;
import com.logigear.ta.webdriver.model.WDRemoteServer;
import com.logigear.ta.webdriver.support.JSName;
import com.logigear.ta.webdriver.support.JavaScriptSupport;
import com.logigear.ta.webdriver.support.MapSupport;
import com.logigear.ta.webdriver.support.PropName;

public class WDElementHandler {

	public static Object[] getElementProperty(WebElement element, String propName){
		int taRes = TAConst.TA_OK;
		String lowerPropName = propName.toLowerCase();
		String value = getProperty(element, lowerPropName);
		if(value == null){
			taRes = TAConst.TA_NOPROPERTY;
		}
		
		return new Object[] {String.valueOf(taRes),value};
	}
	
	public static String getProperty(WebElement element, String propName) {

		String value = null;
		boolean hasProperty = false;

		if (PropName.TAPROPERTY_TAGNAME.equalsIgnoreCase(propName)) {
			value = element.getTagName();
			hasProperty = true;
		} else if (PropName.TAPROPERTY_TACLASS.equalsIgnoreCase(propName)) {
			value = getTAClass(element);
			hasProperty = true;
		} else if (PropName.TAPROPERTY_TYPE.equalsIgnoreCase(propName)) {
			value = getType(element);
			if (value != null) {
				hasProperty = true;
			}
		} else if (PropName.TAPROPERTY_XPATH.equalsIgnoreCase(propName)) {
			value = getXpath(element);
			if (value != null) {
				hasProperty = true;
			}

		} else if (PropName.TAPROPERTY_MAXLENGTH.equalsIgnoreCase(propName)) {
			value = getMaxLength(element);
			if (value != null) {
				hasProperty = true;
			}
		}

		if (hasProperty == false) {
			value = getPropertyByWDAPI(element, propName);
			if (value != null) {
				hasProperty = true;
			}
		}

		if (hasProperty == false) {

			String realNameProperty = propName;
			if(MapSupport.getInsance().getMapProperty().containsKey(propName)){
				realNameProperty = MapSupport.getInsance().getMapProperty().get(propName);
			}
			value = getPropertyJs(element, realNameProperty);
			if (value != null) {
				hasProperty = true;
			}

		}

		if (hasProperty == false) {
			value = getNativeProperty(element, propName);
		}
		
		// 10/3/2018 binh nguyen : #17088
		if(value == null && propName.equalsIgnoreCase(PropName.TAPROPERTY_INNERHTML)) {
			value = "";
		}

		return value;
	}

	public static String getTAClass(WebElement ele) {

		String tagName = ele.getTagName();

		String typeValue = "";
		if (TAClassHandler.getInstance().isNeedType(tagName)) {
			typeValue = getProperty(ele, PropName.TAPROPERTY_TYPE);
		}

		String value = TAClassHandler.getInstance().getTAClass(tagName, typeValue);
		
		return value;
	}
	
	public static String getType(WebElement ele) {

		String value = null;

		if (ele.getTagName().equalsIgnoreCase("input")) {
			value = getInputType(ele);
		}

		return value;
	}
	
	public static String getInputType(WebElement ele) {

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_INPUT_TYPE_PROPERTY);

		RemoteWebDriver remote = getWebDriver(ele);

		String value = WDElement.getPropertyJS(remote, script, ele, PropName.TAPROPERTY_TYPE);
		return value;

	}

	public static int click(WebElement element) {
		RemoteWebDriver remote = getWebDriver(element);
		int taRes = WDElement.click(element, remote);
		return taRes;
	}

	public static int click(WebElement element, int x, int y, int type, int clickMethod) {
		
		int taRes = TAConst.TA_FALSE;
		
		RemoteWebDriver remote = getWebDriver(element);

		if (clickMethod == 0) {
			String script = JavaScriptSupport.getInstance().getScript(JSName.JS_CLICK_ELEMENT_ACTION);
			WDElement.executeScript(remote, script, element, x, y, type);
			taRes = TAConst.TA_OK;
		} else if (clickMethod == 1) {
			taRes = WDElement.click(remote, element, x, y, type);
		}
		
		return taRes;
	}

	public static int setText(WebElement element, String text) {
		int result = TAConst.TA_FALSE;
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_SET_TEXT);

		RemoteWebDriver remote = getWebDriver(element);

		// setText
		result = WDElement.setText(remote, script, element, text);
		return result;
	}

	public static String getNativeProperty(WebElement ele, String propName) {

		String value = null;

		Map<String, String> mapProperties = getNativeProperties(ele);

		for (Map.Entry<String, String> entry : mapProperties.entrySet()) {
			String propNameTemp = entry.getKey();
			if (propName.equalsIgnoreCase(propNameTemp)) {
				value = entry.getValue();
				return value;
			}
		}
		return value;
	}

	@SuppressWarnings("unchecked")
	public static Map<String, String> getNativeProperties(WebElement ele) {
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_NATIVE_PROPERTIES);

		RemoteWebDriver remote = getWebDriver(ele);

		Map<String, String> mapProperties = (Map<String, String>) WDElement.executeScript(remote, script, ele);

		return mapProperties;
	}

	public static String getXpath(WebElement ele) {
		String xpath = getPropertyJs(ele, PropName.TAPROPERTY_XPATH);
		return xpath;
	}

	public static String getPropertyJs(WebElement ele, String propName) {

		String function = MapSupport.getInsance().getMapScriptFunction().get(propName);

		String script = "";
		if (function != null) {
			script = JavaScriptSupport.getInstance().getScript(function);
		} else {
			script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_GENERAL_PROPERTY);
		}

			if ("".equals(script)) {
			return null;
		}
		
		RemoteWebDriver remote = getWebDriver(ele);

		String value = WDElement.getPropertyJS(remote, script, ele, propName);
		return value;
	}

	public static int focus(WebElement ele) {
		RemoteWebDriver remote = getWebDriver(ele);
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_FOCUS_ELEMENT);
		
		WDElement.executeScript(remote, script, ele);
		
		return TAConst.TA_OK;
	}

	public static boolean isFocused(WebElement ele) {

		RemoteWebDriver remote = getWebDriver(ele);

		boolean value = WDElement.isFocused(remote, ele);
		return value;
	}

	public static String getMaxLength(WebElement ele) {
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_MAXLENGTH);

		RemoteWebDriver remote = getWebDriver(ele);

		String value = WDElement.getMaxLengthProperty(remote, script, ele);

		return value;

	}

	public static String getPropertyByWDAPI(WebElement ele, String propName) {
		if (PropName.TAPROPERTY_ENABLED.equals(propName)) {
			return getEnabledState(ele);
		} else if (PropName.TAPROPERTY_TOP.equals(propName)) {
			return getTop(ele);
		} else if (PropName.TAPROPERTY_LEFT.equals(propName)) {
			return getLeft(ele);
		} else if (PropName.TAPROPERTY_WIDTH.equals(propName)) {
			return getWidth(ele);
		} else if (PropName.TAPROPERTY_HEIGHT.equals(propName)) {
			return getHeight(ele);
		} else if (PropName.TAPROPERTY_ID.equals(propName)) {
			return getId(ele);
		}
		return null;
	}

	public static String getEnabledState(WebElement ele) {

		// String signature = ((RemoteWebElement) ele).getId();
		// WebDriverElement wdEle = WDCache.getInstance().getCacheWDElement(signature);
		// RemoteWebDriver remote = wdEle.getRemoteServer();

		// switch frame
		// WebElement frame = wdEle.getFrame();
		// WDPageHandler.switchFrame(remote, frame);

		boolean result = WDElement.isEnabled(ele);
		if (result) {
			return "true";
		} else {
			return "false";
		}
	}
	
	public static String getTop(WebElement ele) {

		RemoteWebDriver remote = getWebDriver(ele);
		int value = ele.getLocation().y;
		String width = Integer.toString(value);
		return width;
	}
	
	public static String getLeft(WebElement ele) {

		RemoteWebDriver remote = getWebDriver(ele);
		int value = ele.getLocation().x;
		String width = Integer.toString(value);
		return width;
	}

	public static String getWidth(WebElement ele) {

		// String signature = ((RemoteWebElement) ele).getId();
		// WebDriverElement wdEle = WDCache.getInstance().getCacheWDElement(signature);
		// RemoteWebDriver remote = wdEle.getRemoteServer();

		// switch frame
		// WebElement frame = wdEle.getFrame();
		// WDPageHandler.switchFrame(remote, frame);

		int value = WDElement.getWidth(ele);
		String width = Integer.toString(value);
		return width;
	}

	public static String getHeight(WebElement ele) {

		// String signature = ((RemoteWebElement) ele).getId();
		// WebDriverElement wdEle = WDCache.getInstance().getCacheWDElement(signature);
		// RemoteWebDriver remote = wdEle.getRemoteServer();

		// switch frame
		// WebElement frame = wdEle.getFrame();
		// WDPageHandler.switchFrame(remote, frame);

		int value = WDElement.getHeight(ele);
		String height = Integer.toString(value);
		return height;
	}

	public static String getId(WebElement ele) {
		// String signature = ((RemoteWebElement) ele).getId();
		// WebDriverElement wdEle = WDCache.getInstance().getCacheWDElement(signature);
		// RemoteWebDriver remote = wdEle.getRemoteServer();

		// switch frame
		// WebElement frame = wdEle.getFrame();
		// WDPageHandler.switchFrame(remote, frame);

		String value = WDElement.getAttribute(ele, PropName.TAPROPERTY_ID);
		return value;
	}

	public static int selectItemByText(WebElement ele, String text, int compareFlag) {
		
		int taRes = TAConst.TA_ERR_LIST_ITEM_NOT_FOUND;

		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
	
		for (WebElement item : listElements) {	
			String itemText = item.getText();
			// should use comparator and implement late
			if (AbtComparator.StringCompare(itemText, text, compareFlag) == TAConst.TA_OK) 
			{
				taRes = TAConst.TA_OK;
				if (item.isSelected() == false) {
					taRes = click(item);
				}
				break;
			}
		}
		return taRes;
	}

	public static int selectItemByIndex(WebElement ele, int index) {
		int taRes = TAConst.TA_FALSE;

		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		if(index < 0 || index >= listElements.size())
		{
			taRes = TAConst.TA_ERR_LIST_INDEX_OUT_OF_RANGE;
		}
		else
		{
			WebElement selectedItem = listElements.get(index);
			taRes = TAConst.TA_OK;
			if (selectedItem != null && selectedItem.isSelected() == false) {
				click(selectedItem);
			}
		}
		return taRes;
	}

	public static List<String> getSelectedItemIndex(WebElement ele) {

		List<String> selectedItems = new ArrayList<String>();
		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		int index = 0;
		for (WebElement item : listElements) {
			if (item.isSelected()) {
				selectedItems.add(Integer.toString(index));
			}
			index++;
		}
		return selectedItems;
	}

	public static List<String> getSelectedItemText(WebElement ele) {

		List<String> selectedItems = new ArrayList<String>();
		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		for (WebElement item : listElements) {
			if (item.isSelected()) {
				selectedItems.add(item.getText());
			}
		}
		return selectedItems;
	}

	public static int deselectList(WebElement ele) {

		int taRes = TAConst.TA_OK;
		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		for (WebElement item : listElements) {
			if (item.isSelected()) {
				click(item);
			}
		}
		return taRes;
	}

	public static Object[] findItemByText(WebElement ele, String text, int compareFlag) 
	{
		int taRes = TAConst.TA_FALSE;
		int itemIndex = -1;
		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		if (listElements.size() == 0)
		{
			taRes = TAConst.TA_ERR_LIST_IS_EMPTY;
		}
		else 
		{
			taRes = TAConst.TA_ERR_LIST_ITEM_NOT_FOUND;
			int i = 0;
			for (WebElement item : listElements) 
			{
				String itemText = item.getText();
				// should use comparator and implement late
				if (AbtComparator.StringCompare(itemText, text, compareFlag) == TAConst.TA_OK) 
				{
					taRes = TAConst.TA_OK;
					itemIndex = i;
					break;
				}
				i++;
			}
		}
		return new Object[] { "" + taRes, "" + itemIndex };
	}

	public static Object[] findItemByIndex(WebElement ele, int index) 
	{
		int taRes = TAConst.TA_FALSE;
		String itemText = "";
		List<WebElement> listElements = ele.findElements(By.tagName(TAConst.TAG_OPTION));
		if(index < 0 || index >= listElements.size())
		{
			taRes = TAConst.TA_ERR_LIST_INDEX_OUT_OF_RANGE;
		}
		else
		{
			WebElement item = listElements.get(index);
			taRes = TAConst.TA_OK;
			itemText = item.getText();
		}
		return new Object[] { "" + taRes, itemText };
	}

	private static WebElement getCellAt(WebElement ele, int rowIndex, int colIndex) {

		List<WebElement> tableRows = getTableRows(ele);

		WebElement cellElement = null;
		try {
			WebElement rowElement = tableRows.get(rowIndex);
			if (rowElement != null) {
				List<WebElement> tableCols = rowElement.findElements(By.xpath("./td | ./th"));
				cellElement = tableCols.get(colIndex);
			}
		} catch (IndexOutOfBoundsException ex) {

		}

		return cellElement;
	}

	public static int clickTableCell(WebElement ele, int rowIndex, int colIndex) {
		int taRes = TAConst.TA_FALSE;
		WebElement cellElement = getCellAt(ele, rowIndex, colIndex);

		if (cellElement != null) {
			// 9/13/2018 binh nguyen : #16737
			scrollToView(cellElement);
			
			RemoteWebDriver remote = getWebDriver(cellElement);
			Actions actions = new Actions(remote);
			actions.moveToElement(cellElement);
			actions.click();
			actions.build().perform();
			
			taRes = TAConst.TA_OK;
		}else{
			AbtTrace.info("Can not found the cell at" + rowIndex + "|" + colIndex);
			taRes = TAConst.TA_ERR_TABLE_ROW_OR_COL_OUT_OF_RANGE;
		}

		return taRes;
	}

	private static String getCellText(RemoteWebDriver remoteWd, WebElement cellElement){
		String cellText = cellElement.getText();
		
		if(cellText == null || "".equals(cellText)){
			List<WebElement> cellElements =  cellElement.findElements(By.tagName("input"));
			for(WebElement elementInCell : cellElements){
				String script = JavaScriptSupport.getInstance().getScript(JSName.JS_GET_INPUT_TYPE_PROPERTY);
				
				String inputType = WDElement.getPropertyJS(remoteWd, script, elementInCell, PropName.TAPROPERTY_TYPE);
				if("radio".equalsIgnoreCase(inputType) || "checkbox".equalsIgnoreCase(inputType)){
					boolean bSelected = false;
					bSelected = elementInCell.isSelected();
					cellText = bSelected ? "true" : "false";
					break;
				}else if("textbox".equalsIgnoreCase(inputType)){
					cellText = elementInCell.getText();
					break;
				}
			}
		}
		if(cellText == null || "".equals(cellText)) {
			cellText = cellElement.getAttribute("textContent");	
		}		
		return cellText;
	}
	
	public static Object[] getCellText(WebElement ele, int rowIndex, int colIndex) {
		String taRes = "" + TAConst.TA_FALSE;

		RemoteWebDriver remote = getWebDriver(ele);
		WebElement cellElement = getCellAt(ele, rowIndex, colIndex);
		String cellText = "";
		if (cellElement != null) {
			cellText = getCellText(remote,cellElement);
			taRes = "" + TAConst.TA_OK;
		} else {
			taRes = "" + TAConst.TA_ERR_LIST_ITEM_NOT_FOUND;
		}
		Object[] res = new Object[] {taRes, cellText};
		return res;
	}

	public static Object[] findCellWithText(WebElement ele, String cellText, int compareFlag) {
		int taRes = TAConst.TA_FALSE;

		List<WebElement> tableRows = getTableRows(ele);

		int rowIndex = 0;
		int colIndex = 0;
		List<WebElement> tableCols = null;
		boolean isCellFound = false;
		for (WebElement rowElement : tableRows) {
			tableCols = rowElement.findElements(By.xpath("./td | ./th"));
			colIndex = 0;
			for (WebElement cell : tableCols) {
				if (AbtComparator.StringCompare(cell.getText(), cellText, compareFlag) == TAConst.TA_OK) {
					
					isCellFound = true;
					taRes = TAConst.TA_OK;
					break;
				}
				colIndex++;
			}
			
			tableCols.clear();
			if(isCellFound){
				break;
			}
			rowIndex++;
		}

		//increase index start with 1
		if(taRes == TAConst.TA_OK){
			rowIndex++;
			colIndex++;
		}
		
		String sRes = "" + taRes;
		String sRow = "" + rowIndex;
		String sCol = "" + colIndex;

		return new Object[] { sRes, sRow, sCol } ;
	}

	public static int bringToView(WebElement ele) {

		int taRes = TAConst.TA_FALSE;

		if (ele == null) {
			return taRes;
		}

		return scrollToView(ele);
	}

	public static int scrollToView(WebElement ele) {

		int taRes = TAConst.TA_FALSE;
		RemoteWebDriver remote = getWebDriver(ele);
		if (isSVGElement(remote, ele)) {
			WebElement ancestor = WDElement.findElementBy(ele, PropName.TAPROPERTY_XPATH,
					"ancestor::*[name()='g' or name()='svg']");
			if (ancestor != null) {
				taRes = WDElement.scrollToView(ancestor);
				return taRes;
			}
		}else{
			taRes = WDElement.scrollToView(ele);
		}

		return taRes;
	}
	
	private static boolean isSVGElement(RemoteWebDriver remote, WebElement ele) {

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_IS_SVG_ELEMENT);
		boolean result = WDElement.isSVGElement(remote, script, ele);
		return result;
	}

	public static int fireEvent(WebElement ele, String eventName){
		int taRes = TAConst.TA_FALSE;

		RemoteWebDriver remote = getWebDriver(ele);
		
		String fireEventScript = JavaScriptSupport.getInstance().getScript(JSName.JS_FIRE_EVENT_METHOD);
		if(fireEventScript != null && fireEventScript.isEmpty() == false){
			taRes = WDPageHandler.executeScript(remote, fireEventScript, ele,eventName);
		}
		return taRes;
	}
	public static int Media_pause(WebElement ele, int pauseTime) {
		int taRes = TAConst.TA_FALSE;

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_MEDIA_PAUSE);
		if (script == null || script.isEmpty()) {
			return TAConst.TA_FALSE;
		}

		taRes = isValidTime(ele, pauseTime);
		if (taRes < 0) {
			return taRes;
		}

		RemoteWebDriver remote = getWebDriver(ele);

		WDElement.executeScript(remote, script, ele, Integer.toString(pauseTime));
		taRes = TAConst.TA_OK;

		return taRes;
	}

	public static int Media_play(WebElement ele, int startTime) {
		int taRes = TAConst.TA_FALSE;

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_MEDIA_PLAY);
		if (script == null || script.isEmpty()) {
			return TAConst.TA_FALSE;
		}

		taRes = isValidTime(ele, startTime);
		if (taRes < 0) {
			return taRes;
		}

		RemoteWebDriver remote = getWebDriver(ele);

		WDElement.executeScript(remote, script, ele, Integer.toString(startTime));
		taRes = TAConst.TA_OK;

		return taRes;

	}

	public static int Media_setVolume(WebElement ele, int volume) {
		int taRes = TAConst.TA_FALSE;

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_MEDIA_SET_VOLUME);
		if (script == null || script.isEmpty()) {
			return TAConst.TA_FALSE;
		}

		RemoteWebDriver remote = getWebDriver(ele);

		WDElement.executeScript(remote, script, ele, Integer.toString(volume));
		taRes = TAConst.TA_OK;

		return taRes;
	}

	public static int Media_setProperty(WebElement ele, String property, String value, int compareFlag) {
		int taRes = TAConst.TA_FALSE;

		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_MEDIA_SET_PROPERTY);
		if (script == null || script.isEmpty()) {
			return TAConst.TA_FALSE;
		}
		
		String tagName = WDElement.getTagName(ele);
		if ((AbtComparator.StringCompare(tagName, "audio", compareFlag) == TAConst.TA_OK)
				&& ((AbtComparator.StringCompare(property, "fullscreen", compareFlag) == TAConst.TA_OK)
					|| (AbtComparator.StringCompare(property, "controls",compareFlag) == TAConst.TA_OK))) 
		{
			taRes = TAConst.TA_ERR_MEDIA_PROPERTY_ONLY_SUPPORT_VIDEO_TAG;
			return taRes;
		}
		
		RemoteWebDriver remote = getWebDriver(ele);
		
		WDElement.executeScript(remote, script, ele, property, value);
		taRes = TAConst.TA_OK;
		
		return taRes;
	}

	private static int isValidTime(WebElement e, int time) {

		int taRes = TAConst.TA_FALSE;

		String duration = getProperty(e, "duration");

		if (duration != null) {

			taRes = TAConst.TA_OK;
			String[] timeArr = duration.split(":");
			if (timeArr.length != 3) {
				return TAConst.TA_FALSE;
			}

			if (!StringUtils.isNumeric(timeArr[0]) || !StringUtils.isNumeric(timeArr[1])
					|| !StringUtils.isNumeric(timeArr[2])) {
				return TAConst.TA_FALSE;
			}

			int hour = Integer.parseInt(timeArr[0]);
			int minute = Integer.parseInt(timeArr[1]);
			int second = Integer.parseInt(timeArr[2]);

			if (hour < 0 || minute < 0 || second < 0) {
				return TAConst.TA_FALSE;
			}

			int nDuration = hour * 3600 + minute * 60 + second;
			if (time > nDuration) {
				taRes = TAConst.TA_ERR_MEDIA_TIME_GREATER_THAN_ENDED_TIME;
			}

		}

		return taRes;

	}
	
	public static boolean isSelected(WebElement ele) {
		return WDElement.isSelected(ele);
	}
	
	public static boolean checkVisibility(WebElement ele) {
		
		String script = JavaScriptSupport.getInstance().getScript(JSName.JS_CHECK_VISIBILITY_ACTION);
		if(script == null || script.isEmpty()) {
			AbtTrace.warning("can not get script");
			return false;
		}
		
		RemoteWebDriver remote = getWebDriver(ele);
		
		return WDElement.checkVisibility(remote, script, ele);
	}
	
	public static int getColumnNumber(WebElement ele){

		List<WebElement> tableRows = getTableRows(ele);

		int maxColumn = 0;
		List<WebElement> tableCols = null;
		for (WebElement rowElement : tableRows) {
			tableCols = rowElement.findElements(By.xpath("./td | ./th"));
			if(maxColumn < tableCols.size()){
				maxColumn = tableCols.size();
			}
		}
		return maxColumn;
	}
	
	private static List<WebElement> getTableRows(WebElement ele){
		List<WebElement> tableRows = new ArrayList<WebElement>();
		List<WebElement> headRows = ele.findElements(By.xpath("./thead/tr"));
		List<WebElement> bodyRows = ele.findElements(By.xpath("./tbody/tr"));
		List<WebElement> footRows = ele.findElements(By.xpath("./tfoot/tr"));

		tableRows.addAll(headRows);
		tableRows.addAll(bodyRows);
		tableRows.addAll(footRows);
		
		return tableRows;
	}
	
	public static int getRowNumber(WebElement ele){
		List<WebElement> tableRows = getTableRows(ele);
		return tableRows.size();
	}
	
	public static int captureScreen(WebElement element,
			int x, int y, int width, int height, String fileType, String localtion){
		RemoteWebDriver remote = getWebDriver(element);
		return WDRemoteServer.captureScreen(remote, element, x, y, width, height, fileType, localtion);
	}
	
	/**
	 * Move mouse to the coordinate (x, y) on the specified web element
	 * @param wdElement
	 * @param nX
	 * @param nY
	 * @return
	 */
	public static int moveMouse(WebElement wdElement, String szX, String szY) {

		int res = TAConst.TA_OK;
		try {
			RemoteWebDriver remote = getWebDriver(wdElement);
			res = WDElement.move(remote,wdElement, szX, szY);
		} catch (Exception e) {
			Problems.handleException("moveMouse", e);
			res = TAConst.TA_FALSE;
		}
		
		return res;
	}
	
	public static String getSignature(WebElement ele) {
		return ((RemoteWebElement)ele).getId();
	}
	
	private static RemoteWebDriver getWebDriver(WebElement element)
	{
		return (RemoteWebDriver) ((RemoteWebElement)element).getWrappedDriver();
	}
	
	public static Object[] getTagInfo(WebElement element)
	{
		String tagName = getProperty(element, PropName.TAPROPERTY_TAGNAME);
		String tagType = getProperty(element, PropName.TAPROPERTY_TYPE);
		
		return new Object[] { tagName, tagType };
	}
	
	public static int[] getRect(WebElement element)
	{
		RemoteWebDriver remote = getWebDriver(element);
		return WDElement.getRect(remote, element);
	}
	
	public int set(WebElement element, long taClassId) {
		int taRes = TAConst.TA_FALSE;
		RemoteWebDriver remote = getWebDriver(element);
		if(taClassId == TAConst.TAID_CHECKBOX || taClassId == TAConst.TAID_RADIOBUTTON) {
			// 11/6/2018 binh nguyen : #17790
			String browserName = remote.getCapabilities().getBrowserName();
			if(TAConst.IE_BROWSER.equalsIgnoreCase(browserName)
					|| TAConst.FIREFOX_BROWSER.equalsIgnoreCase(browserName)) {
				WDRemoteServer.executeScript(remote, "arguments[0].click();", element);
				taRes = TAConst.TA_OK;
				return taRes;
			}
		}
		taRes = WDElement.click(element, remote);
		return taRes;
	}
}

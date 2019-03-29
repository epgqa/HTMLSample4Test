package com.logigear.ta.webdriver.common;

import org.openqa.selenium.By;

import com.logigear.ta.webdriver.support.PropName;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class WDUtilities {

	private static String BMP_IMAGE = "bmp";
	private static String JPG_IMAGE = "jpg";
	private static String JPEG_IMAGE = "jpeg";

	@SuppressWarnings("serial")
	public static final List<String> mapPropsSupported = Collections.unmodifiableList(
		    new ArrayList<String>() {{
		        add(PropName.TAPROPERTY_ID);
		        add(PropName.TAPROPERTY_TAGNAME);
		        add(PropName.TAPROPERTY_NAME);
		        add(PropName.TAPROPERTY_XPATH);
		        add(PropName.TAPROPERTY_CLASSNAME);
		        add(PropName.TAPROPERTY_CSS_SELECTOR);
		    }});
	
	public static By convertToBy(String sName, String sValue){
		if(sName.equals(PropName.TAPROPERTY_ID)){
			return By.id(sValue);
		}else if(sName.equals(PropName.TAPROPERTY_TAGNAME)){
			return By.tagName(sValue);
		}else if(sName.equals(PropName.TAPROPERTY_NAME)){
			return By.name(sValue);
		}else if(sName.equals(PropName.TAPROPERTY_XPATH)){
			return By.xpath(sValue);
		}else if(sName.equals(PropName.TAPROPERTY_CLASSNAME)){
			return By.className(sValue);
		}else if(sName.equals(PropName.TAPROPERTY_CSS_SELECTOR)){
			return By.cssSelector(sValue);
		}
		
		return null;
	}
	
	public static String replaceXPath(String xPath)
	{
		String newXpath = xPath;
		newXpath = newXpath.replace("\\t","\t");
		newXpath = newXpath.replace("\\n","\n");
		newXpath = newXpath.replace("\\u005C","\\");
		newXpath = newXpath.replace("\\u00A0","\u00A0");
		return newXpath;
	}
	
	public static void sleep(long ms)
	{
		try {
			Thread.sleep(ms);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * conver buffer png buffer image to bmp, jpg, jpeg image
	 * @param image
	 * @param imageType
	 * @return
	 */
	public static BufferedImage convertPNGImageTo(BufferedImage image, String imageType){
		BufferedImage newImageBuf = image;
		if(imageType.equalsIgnoreCase(BMP_IMAGE)
				|| imageType.equalsIgnoreCase(JPG_IMAGE)
				|| imageType.equalsIgnoreCase(JPEG_IMAGE)){
			newImageBuf = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_INT_RGB);
			newImageBuf.createGraphics().drawImage(image, 0, 0, Color.WHITE,null);
		}
		
		return newImageBuf;
	}
	
	public static int convert(Object obj, int defValue)
	{
		if(obj instanceof Long)
		{
			long l = (Long)obj;
			return (int)l;
		}
		else if(obj instanceof Integer)
		{
			return (Integer)obj;
		}
		return defValue;
	}
	
	public static long convert(Object obj, long defValue)
	{
		if(obj instanceof Long)
		{
			return (Long)obj;
		}
		return defValue;
	}
	
	public static boolean convert(Object obj, boolean defValue)
	{
		if(obj instanceof Boolean)
		{
			return (Boolean)obj;
		}
		return defValue;
	}
	
	public static int findNonEmptyItem(List<String> values) {
		int foundIndex = -1;
		int index = 0;
		for(String value : values) {
			if(foundIndex == -1 && value != null && value.isEmpty() == false) {
				foundIndex = index;
				break;
			}
			index++;
		}
		return foundIndex;
	}
	
	public static String[] popItem(String[] values, int index, StringBuilder outValue) {
		ArrayList<String> res = new ArrayList<String>();
		int i = 0;
		for(String value : values) {
			if(i == index) {
				outValue.append(value);
			}
			else {
				res.add(value);
			}
			i++;
		}
		String[] array = new String[res.size()];
		array = res.toArray(array);
		return array;
	}
	
	public static List<String> parseFramepathData(String xPath) {

		List<String> listData = new ArrayList<String>();

		String[] listXpath = xPath.split(TAConst.FRAMEPATH_DELIMITER);
		for (String xpath : listXpath) {
			//xpath = xpath.trim();
			listData.add(xpath);
		}

		return listData;
	}
}

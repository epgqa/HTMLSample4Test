package com.logigear.ta.webdriver.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;

import com.logigear.ta.logger.AbtTrace;

/**
 * this class use to parsing the frame path and save the current frame context
 * @author tuan.van.tran
 *
 */
public class WDFramePath {
	private static WDFramePath instance = null;
	private List<ElementDefinition> frames = new ArrayList<ElementDefinition>();
	private List<ElementDefinition> currentFramePath = new ArrayList<ElementDefinition>(); 
	private String currentActiveWindow = null;
	private Map<String,List<ElementDefinition>> windowFramePath = new HashMap<String,List<ElementDefinition>>();
	
	boolean bEscapeSequence = false;
	int parsingErr = TAConst.TA_OK;
	
	
	public static synchronized WDFramePath getInstance() {
		
		if(instance == null) {
			instance = new WDFramePath();
		}
		return instance;
	}
	
	public void setEscapeSetting(boolean escape) {
		this.bEscapeSequence = escape;
	}
	
	private int parsingValueWithoutEscapSequence(int currentIdx,String framePath, ElementDefinition elementDefinition, String propName) {
		
		int length = framePath.length();
		int startIdx = currentIdx;
		char curChar = ' ';
		
		String propVal = "";
		
		while(currentIdx < length && curChar != ',' && curChar != ']') {
			curChar = framePath.charAt(currentIdx);
			currentIdx++;
		}

		if(curChar == ',' ){
			propVal = framePath.substring(startIdx, currentIdx-1); 
			elementDefinition.addProperty(propName,propVal);
		}else if(curChar == ']') {
			//end the definition
			propVal = framePath.substring(startIdx, currentIdx-1); 
			elementDefinition.addProperty(propName,propVal);
		}else {
			parsingErr = TAConst.TA_FALSE;
		}
		
		return --currentIdx;
	}
	
	/***
	 * parsing the value of property 
	 * the currentIdx start after = character
	 * it have two kind of value, value without escape sequence '' and escape sequence
	 * @param currentIdx
	 * @param framePath
	 * @param elementDefinition
	 * @param propName
	 * @return
	 */
	private int parsingValue(int currentIdx,String framePath, ElementDefinition elementDefinition, String propName) {
		

		int length = framePath.length();
		int startIdx = currentIdx;
		
		//find the no space character after = delimiter begin to start value
		boolean bSpace = false;
		char curChar = framePath.charAt(currentIdx);
		while(currentIdx < length && curChar == ' ') {
			curChar = framePath.charAt(currentIdx);
			currentIdx++;
			bSpace = true;
		}
		
		if(currentIdx == length) {
			parsingErr = TAConst.TA_FALSE;
			return currentIdx;
		}
		
		//start to find the value
		if(bSpace) currentIdx--;
		
		startIdx = currentIdx;
		String propVal = "";
		if(this.bEscapeSequence == false) {
			currentIdx = parsingValueWithoutEscapSequence(currentIdx,framePath,elementDefinition,propName);
		}else {
			
			char preChar =  framePath.charAt(startIdx-1);
			curChar = framePath.charAt(startIdx);
			
			//start the ' character to begin of value and find another ' to end value
			//the ' character just only stand alone and not have \ character because \' character in value
			if(curChar == '\'') {
				
				//find the the ' character without slash(\) character
				while(currentIdx < length) {
					preChar = curChar;
					currentIdx++;
					if(currentIdx == length)
						break;
					
					curChar = framePath.charAt(currentIdx);
					if(curChar == '\'' && preChar != '\\') {
						break;
					}
				}
				
				//get value between two ' characters
				if(currentIdx < length && curChar == '\'') {
					propVal = framePath.substring(startIdx+1, currentIdx);
					//replace the value in escape sequence with slash delimiter 
					propVal = propVal.replace("\\\'","'");
					propVal = propVal.replace("\\\\","\\");
					elementDefinition.addProperty(propName,propVal);
				}else {
					parsingErr = TAConst.TA_FALSE;
				}
				
				if(parsingErr == TAConst.TA_OK) {
					//find the next property delimiter ',' character or end definition character ']'
					while(currentIdx < length && curChar != ',' && curChar != ']') {
						curChar = framePath.charAt(currentIdx);
						currentIdx++;
					}
					
					if(curChar != ',' && curChar != ']') {
						parsingErr = TAConst.TA_FALSE;
					}else {
						currentIdx--;
					}
				}
			}else {
				currentIdx = parsingValueWithoutEscapSequence(currentIdx,framePath,elementDefinition,propName);
			}
		}

		return currentIdx;
	}
	
	/**
	 * this method to parse the frame path to element definition with current index
	 * The format definition will value in [....]
	 * the index will start after the [ character and after parsing it will return the ] character index
	 * @param currentIdx
	 * @param framePath
	 * @return
	 */
	private int parsingElementDef(int currentIdx , String framePath) {
		
		int length = framePath.length();
		int startIdx = currentIdx;
		int startDefIdx = currentIdx;
		char curChar = ' ';
		
		
		ElementDefinition elementDefinition = new ElementDefinition();
		
		while(currentIdx < length && curChar != ']'){
			startIdx = currentIdx;
			curChar = framePath.charAt(currentIdx);
			
			boolean bSpace = false;
			while(currentIdx < length && curChar == ' ') {
				curChar = framePath.charAt(currentIdx);
				currentIdx++;
				bSpace = true;
			}
			
			if(currentIdx == length) {
				parsingErr = TAConst.TA_FALSE;
				return currentIdx;
			}
			
			if(bSpace) currentIdx--;
			startIdx=currentIdx;
			//find the property name until = character
			while(currentIdx < length && curChar != '=') {
				curChar = framePath.charAt(currentIdx);
				currentIdx++;
			}
			
			if(currentIdx == length)
				break;
			
			//get the property name after [ character to '=' character
			String propName = "";
			if(curChar == '=') {
				currentIdx--;
				propName = framePath.substring(startIdx, currentIdx); 
			}else {
				parsingErr = TAConst.TA_FALSE;
				break;
			}
			
			//start to parsing value character after '=' character
			currentIdx++;
			currentIdx = parsingValue(currentIdx, framePath, elementDefinition, propName);
			
			if(parsingErr == TAConst.TA_FALSE)
				break;
			
			curChar = framePath.charAt(currentIdx);
			currentIdx++;
		}
		
		if(curChar != ']') {
			parsingErr = TAConst.TA_FALSE;
		}else {
			String elementDef = framePath.substring(startDefIdx,currentIdx-1);
			elementDefinition.setElementDef(elementDef);
			frames.add(elementDefinition);
		}
		
		return --currentIdx;
	}
	
	public int validateFramePath(String framePath) {
		
		int parsingErr = TAConst.TA_OK;
		
		if(framePath.isEmpty()) {
			parsingErr = TAConst.TA_FALSE;
		}else {
			framePath = framePath.trim();
			char startChr = framePath.charAt(0);
			char endChr = framePath.charAt(framePath.length()-1);
			if(startChr != '[' || endChr != ']') {
				parsingErr = TAConst.TA_FALSE;
			}
		}
		
		return parsingErr;
	}
	
	public int parsingFramePath(String framePath) {

		frames.clear();
		parsingErr = TAConst.TA_OK;
				
		int length = framePath.length();
		int curIdx = 0;
		char curChar = framePath.charAt(curIdx);
		
		while(curIdx < length){
			char defStartChar = curChar;
			if(defStartChar == '[') {
				curIdx = parsingElementDef(++curIdx,framePath);
				curIdx++;
			}else {
				break;
			}
			
			//validate and update current character
			if(parsingErr == TAConst.TA_FALSE || curIdx >= length) {
				break;
			}
			
			//go to the next frame to parse
			//find the next definition between the last character definition ] and [ with > delimiter
			curChar = framePath.charAt(curIdx);
			//start the new definition
			int startDefIdx = curIdx;
			while(curChar != '[' && curIdx < length) {
				curChar = framePath.charAt(curIdx);
				curIdx++;
			}

			//validate the delimiter
			if(curChar == '[' && curIdx > startDefIdx) {
				curIdx--;
				String delimeter = framePath.substring(startDefIdx, curIdx);
				if(delimeter.trim().equals(">") == false) {
					parsingErr = TAConst.TA_FALSE;
					break;
				}
			}else if(curIdx > startDefIdx) {
				String remain = framePath.substring(startDefIdx, curIdx);
				if(remain.trim().isEmpty() == false){
					parsingErr = TAConst.TA_FALSE;
					break;
				}
			}
		}
		
		AbtTrace.info("Parsing result = " + parsingErr);
		for(ElementDefinition ele : frames) {
			//add talclass at the end
			ele.addTAClass();
			AbtTrace.info("ElementDef: " + ele.getElementDef());;
			ele.printProp();
		}
		return parsingErr;
	}
	
	public List<ElementDefinition> getFrames(){
		return frames;
	}


	public List<ElementDefinition> getCurrentFramePath(String windowHandle){
		if(!windowFramePath.containsKey(windowHandle)) {
			windowFramePath.put(windowHandle, new ArrayList<ElementDefinition>());
		}
		
		return windowFramePath.get(windowHandle);
	}


	public int goToFrameParent(String window) {

		
		if(!windowFramePath.containsKey(window)) {
			windowFramePath.put(window, new ArrayList<ElementDefinition>());
		}
		
		if(windowFramePath.get(window).isEmpty() == false) {
			int length = windowFramePath.get(window).size();
			windowFramePath.get(window).remove(length-1);
		}else {
			return TAConst.TA_FALSE;
		}
		
		return TAConst.TA_OK;
	}
	
	public void goToMain(String window) {
		
		if(!windowFramePath.containsKey(window)) {
			windowFramePath.put(window, new ArrayList<ElementDefinition>());
		}
		
		windowFramePath.get(window).clear();
	}
	
	public void goToFrameChildsPath(String window, List<ElementDefinition> frameChilds) {

		if(!windowFramePath.containsKey(window)) {
			windowFramePath.put(window, new ArrayList<ElementDefinition>());
		}
		
		windowFramePath.get(window).addAll(frameChilds);
	}

	public void setActiveWindow(String window) {
		if(this.currentActiveWindow == null) {
			this.currentActiveWindow = window;
		}else if( this.currentActiveWindow.equals(window) == false) {
			this.goToMain(this.currentActiveWindow);
			this.currentActiveWindow = window;
		}	
	}
	
	public int checkValid(StringBuilder info) {
		int taRes = TAConst.TA_OK;
		for(ElementDefinition def : getFrames()) {
			taRes = def.checkValid(info);
			if(taRes != TAConst.TA_OK) {
				break;
			}
		}
		return taRes;
	}
}

package com.logigear.ta.webdriver.common;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.Keys;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.RemoteWebDriver;
enum KeyType{
	COMBINE_KEY,
	NORMAL_KEY
}

class TAKeys{
	
	private KeyType type;
	private String value = "";
	
	public TAKeys(KeyType type,String value){
		this.type = type;
		this.value = value;
	}
	
	public KeyType getType() {
		return type;
	}
	public void setType(KeyType type) {
		this.type = type;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	public boolean isNormalKey(){
		return this.type == KeyType.NORMAL_KEY ? true : false;
	}
	
	public void appendValue(String otherValue){
		this.value = this.value.concat(otherValue);
	}
}

public class TAKeyboard {
	private static TAKeyboard instance = null;
	private int index;
	private String input;
	private boolean flagControl, flagGroup;
	// list to keep track combination key
	private List<CharSequence> groupKey = new ArrayList<CharSequence>();

	private List<TAKeys> outputs = new ArrayList<TAKeys>();
	
	public static synchronized TAKeyboard getInstance(RemoteWebDriver remote) {

		if (instance == null) {
			if(remote.getCapabilities().getPlatform() == Platform.MAC) {
				instance = new TAKeyboardMac();
			}
			else {
				instance = new TAKeyboard();
			}
		}
		return instance;
	}

	private void init(String inputString) {
		input = inputString;
		index = 0;
		flagControl = false;
		flagGroup = false;
		groupKey.clear();
		outputs.clear();
	}

	/*
	 * parse TA input string into string use for function sendkey 
	 * input : TA rule string
	 * output : string use for sendkey
	 */
	public List<String> parseTAInputString(String inputString) {
		
		init(inputString);
		
		int LENGTH = inputString.length();
		for (index = 0; index < LENGTH; index++) {
			char currentToken = inputString.charAt(index);
			parseCharToKeys(currentToken, index);
		}

		/*
		 * release controlkey when controlkey is pressed and we don't put ')' at end of string : abc^(def
		 */
		generateReleaseCtrlKeys();
		
		List<String> outlist = new ArrayList<String>();
		for(TAKeys key : outputs){
			outlist.add(key.getValue());
		}
		return outlist;
	}

	private void parseCharToKeys(char currentKey, int index) {
		switch (currentKey) {
		case '+':
			parseControlKey("shift");
			break;
		case '%':
			parseControlKey("alt");
			break;
		case '^':
			parseControlKey("control");
			break;
		case '(':
			if (flagControl) {
				flagGroup = true;
			} else {
				parseNormalKey(String.valueOf(currentKey));
			}
			break;
		case ')':
			if (flagControl) {
				flagGroup = false;
				generateReleaseCtrlKeys();
			} else {
				parseNormalKey(String.valueOf(currentKey));
			}
			break;
		case '{':
			parseSpecialKey(currentKey, index);
			break;
		default:
			parseNormalKey(String.valueOf(currentKey));
			break;
		}
	}

	// parse normal key like a,b,c....
	private void parseNormalKey(CharSequence key) {
		// control key (control/shift/alt) was pressing
		if (flagControl) {
			groupKey.add(key);

			// control key with group like ^(abc) we do nothing,
			// else we generate combination key and release control key : ^abc
			if (flagGroup == false) {
				generateReleaseCtrlKeys();
			}

		} else {
		
			if(outputs.size() > 0){
				TAKeys taKeys = outputs.get(outputs.size()-1);
				if(taKeys.isNormalKey()){
					outputs.get(outputs.size()-1).appendValue(key.toString());
				}else{
					outputs.add(new TAKeys(KeyType.NORMAL_KEY, key.toString()));
				}
			}else{
				outputs.add(new TAKeys(KeyType.NORMAL_KEY, key.toString()));
			}
		
		}
	}

	// parse special keyword like {home}, {end}....
	private void parseSpecialKey(char key, int indexOfBeginBrace) {
		// find the first index of '}' from begin '{' in inputString
		int indexOfEndBrace = input.indexOf('}', indexOfBeginBrace);

		// cannot found character '}'
		if (indexOfEndBrace < 0) {
			parseNormalKey(String.valueOf(key));
		} else {
			// get keyword between { and }
			String keyword = input.substring(indexOfBeginBrace + 1, indexOfEndBrace);
			CharSequence keycode = getKeyCode(keyword);

			// keyword has no meaning
			if (keycode == null) {
				// case {+} => + , {^} => ^ ...
				if (keyword.equals("+") || keyword.equals("^") || keyword.equals("%") || keyword.equals("{")) {
					// get key to parse
					parseNormalKey(keyword);
					// move index to }
					index = indexOfEndBrace;
				} else {
					parseNormalKey(String.valueOf(key));
				}

			}
			// special keyword
			else {
				parseNormalKey(keycode);
				index = indexOfEndBrace;
			}
		}
	}

	// handle control key : + , ^, %
	private void parseControlKey(String key) {
		CharSequence keyCode = getKeyCode(key);
		
		if(keyCode != null) {
			groupKey.add(keyCode);
			flagControl = true;
		}
	}

	protected CharSequence getKeyCode(String key) {
		CharSequence keyCode = null;
		
		if (key.equalsIgnoreCase("shift")) {
			keyCode = Keys.SHIFT;
		} else if (key.equalsIgnoreCase("alt")) {
			keyCode = Keys.ALT;
		} else if (key.equalsIgnoreCase("control")) {
			keyCode = Keys.CONTROL;
		} else if (key.equalsIgnoreCase("enter")) {
			keyCode = Keys.ENTER;
		} else if (key.equalsIgnoreCase("esc")) {
			keyCode = Keys.ESCAPE;
		} else if (key.equalsIgnoreCase("spacebar")) {
			keyCode = Keys.SPACE;
		} else if (key.equalsIgnoreCase("backspace")) {
			keyCode = Keys.BACK_SPACE;
		} else if (key.equalsIgnoreCase("home")) {
			keyCode = Keys.HOME;
		} else if (key.equalsIgnoreCase("end")) {
			keyCode = Keys.END;
		} else if (key.equalsIgnoreCase("pause")) {
			keyCode = Keys.PAUSE;
		} else if (key.equalsIgnoreCase("delete")) {
			keyCode = Keys.DELETE;
		} else if (key.equalsIgnoreCase("page down")) {
			keyCode = Keys.PAGE_DOWN;
		} else if (key.equalsIgnoreCase("page up")) {
			keyCode = Keys.PAGE_UP;
		} else if (key.equalsIgnoreCase("insert")) {
			keyCode = Keys.INSERT;
		} else if (key.equalsIgnoreCase("F1")) {
			keyCode = Keys.F1;
		} else if (key.equalsIgnoreCase("F2")) {
			keyCode = Keys.F2;
		} else if (key.equalsIgnoreCase("F3")) {
			keyCode = Keys.F3;
		} else if (key.equalsIgnoreCase("F4")) {
			keyCode = Keys.F4;
		} else if (key.equalsIgnoreCase("F5")) {
			keyCode = Keys.F5;
		} else if (key.equalsIgnoreCase("F6")) {
			keyCode = Keys.F6;
		} else if (key.equalsIgnoreCase("F7")) {
			keyCode = Keys.F7;
		} else if (key.equalsIgnoreCase("F8")) {
			keyCode = Keys.F8;
		} else if (key.equalsIgnoreCase("F9")) {
			keyCode = Keys.F9;
		} else if (key.equalsIgnoreCase("F10")) {
			keyCode = Keys.F10;
		} else if (key.equalsIgnoreCase("F11")) {
			keyCode = Keys.F11;
		} else if (key.equalsIgnoreCase("F12")) {
			keyCode = Keys.F12;
		} else if (key.equalsIgnoreCase("left")) {
			keyCode = Keys.ARROW_LEFT;
		} else if (key.equalsIgnoreCase("right")) {
			keyCode = Keys.ARROW_RIGHT;
		} else if (key.equalsIgnoreCase("up")) {
			keyCode = Keys.ARROW_UP;
		} else if (key.equalsIgnoreCase("down")) {
			keyCode = Keys.ARROW_DOWN;
		} else if (key.equalsIgnoreCase("tab")) {
			keyCode = Keys.TAB;
		}
		
		return keyCode;
	}

	// generate combine key, add it to output, and release control key
	private void generateReleaseCtrlKeys() {
		if (flagControl) {
			// [9/20/2018 tam.thanh.tran] BUG-16124: Action "type" work incorrectly on FF GWD with "+a", "Ctrl","Shirt", "Alt"
			// Root cause: org.openqa.selenium.chord() added a Keys.NULL at the end of groupKey
			// Solution: Clone method chord() from selenium and remove line "builder.append(Keys.NULL);"
			// Note: It is temporary solution. We need to improve this later
			StringBuilder builder = new StringBuilder();
		    for (CharSequence seq : groupKey) {
		      builder.append(seq);
		    }
		    String combinationKey =  builder.toString();
		    
		    outputs.add(new TAKeys(KeyType.COMBINE_KEY, combinationKey));
			groupKey.clear();
			flagControl = false;
		}

	}
}

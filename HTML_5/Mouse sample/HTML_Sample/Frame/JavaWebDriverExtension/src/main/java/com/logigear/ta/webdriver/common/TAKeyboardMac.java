package com.logigear.ta.webdriver.common;

import org.openqa.selenium.Keys;

public class TAKeyboardMac extends TAKeyboard {
	
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
		} else if (key.equalsIgnoreCase("command")) {
			keyCode = Keys.COMMAND;
		}
		
		return keyCode;
	}
}

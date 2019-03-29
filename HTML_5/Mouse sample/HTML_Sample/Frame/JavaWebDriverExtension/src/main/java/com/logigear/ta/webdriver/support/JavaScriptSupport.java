package com.logigear.ta.webdriver.support;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.common.TAConst;

public class JavaScriptSupport {
	private static JavaScriptSupport instance = null;
	private HashMap<String, String> mapJavaScript = null;

	public static JavaScriptSupport getInstance() {
		if (instance == null) {
			instance = new JavaScriptSupport();
		}
		return instance;
	}

	public JavaScriptSupport() {
		mapJavaScript = new HashMap<String, String>();
	}

	public String getScript(String functionName) {
		if (mapJavaScript != null) {
			return mapJavaScript.get(functionName);
		}
		return null;
	}

	public void initScripts(String scriptPath) {

		Path path = Paths.get(scriptPath);
		if (Files.exists(path)) {
			try {
				List<String> contents = Files.readAllLines(path);
				for (String content : contents) {
					int index = content.indexOf(TAConst.SEPARATOR_CHAR);
					if (index > 0) {
						String actionName = content.substring(0, index).trim();
						String script = content.substring(index + 1).trim();
						mapJavaScript.put(actionName, script);
					}
				}
			} catch (Exception e) {
				Problems.handleException("initScripts", e);
			}
		}
	}

}

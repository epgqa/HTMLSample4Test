package com.logigear.ta.webdriver.test;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.webdriver.connection.WDServerConnection;
import com.logigear.ta.webdriver.handler.WDElementHandler;
import com.logigear.ta.webdriver.handler.WDPageHandler;
import com.logigear.ta.webdriver.model.WDElement;

public class Test {

	public static void main(String[] argv) {
		Test();
	}

	public static void Test() {
		// TODO Auto-generated method stub
		String browserSetting = "{\"capabilities\":{\"browserName\":\"chrome\"},\"options\":{\"args\":[\"--no-sandbox\",\"--autoplay-policy=no-user-gesture-required\"]},\"server\":\"E:/Tool/MousePos.exe\"}";
		String scritpPath = "C:\\Program Files\\LogiGear\\TestArchitect\\binclient\\data\\action_script\\webdriver_javascript.txt";

		try {
			String url = "http://192.168.168.103:8080/HTML_5/CustomizeControls/controls.html?id=Audio";
			String serPath = "C:\\text.exe";
			Object[] result = WDServerConnection.initializeWebDriver("chrome", browserSetting,serPath,scritpPath,url);
			RemoteWebDriver remote = (RemoteWebDriver)result[1];

			String[] propertyName = new String[] {"id"};
			String[] propertyValue = new String[] {"audio_ControlTest"};
			
			WDPageHandler.navigate(remote,"http://192.168.168.103:8080/HTML_5/CustomizeControls/controls.html?id=Audio","");
			WebElement ele = WDPageHandler.getElementByProperties(remote, propertyName, propertyValue, true, 30, "id-1");
			
			//String script = "media_play = function media_play(a,b){var d=Number(b);var c=d/1;if(c>=0){a.currentTime=c}a.play();}; media_play(arguments[0],arguments[1]);";
			//script = "document.getElementById('audio_ControlTest').play()";
			//WDElement.executeScript(remote, script);
			//WDElement.executeScript(remote, script, ele, "10");
			
			WDElementHandler.Media_play(ele, 0);
			//WDElementHandler.setText(ele, "hello world !");
			//String value = WDElementHandler.getNativeProperty(ele, "id");
			System.out.println("");
			WDPageHandler.quitWebDriver(remote);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// *[@id="lst-ib"]
	}

}

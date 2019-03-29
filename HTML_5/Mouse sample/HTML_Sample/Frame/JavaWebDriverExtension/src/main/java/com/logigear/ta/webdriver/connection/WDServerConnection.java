package com.logigear.ta.webdriver.connection;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.service.DriverService;
import com.logigear.ta.logger.AbtTrace;
import com.logigear.ta.problem.Problems;
import com.logigear.ta.webdriver.model.WDBuilder;
import com.logigear.ta.webdriver.model.WDRemoteServer;
import com.logigear.ta.webdriver.support.JavaScriptSupport;
import com.logigear.ta.webdriver.support.Settings;

public class WDServerConnection {

	public static Object[] initializeWebDriver(String browser, String browserSetting, String serverPath, String scriptPath, String url)
			throws Exception {
		AbtTrace.info("initializeWebDriver - BEGIN");
		String webdriverSession = "";
		String infos = "";
		String error = "";
		// 6/26/2018 binh nguyen : #14787
		WDBuilder builder = new WDBuilder();
		builder.setBrowser(browser);
		builder.setBrowserSetting(browserSetting);
		builder.setServerPath(serverPath);
		JavaScriptSupport.getInstance().initScripts(scriptPath);

		try {
			builder.build();
		} catch (Exception ex) {
			error = ex.getMessage();
			Problems.handleException("initializeWebDriver", ex);
			AbtTrace.error("RemoteWebDriver : initializeWebDriver: \n" + ex.toString());
		}
		
		RemoteWebDriver driver = builder.getWebDriver();
		DriverService service = builder.getService();
		if (driver != null) {
			WDRemoteServer.navigate(driver, url, Settings.TASETTING_DEFAULT_TARGET_BROWSER_INSTANCE);
			webdriverSession = driver.getSessionId().toString();
			infos = builder.getInfos();
		}

		AbtTrace.info("initializeWebDriver - END");
		return new Object[] { webdriverSession, driver, infos, error, service };
	}
}

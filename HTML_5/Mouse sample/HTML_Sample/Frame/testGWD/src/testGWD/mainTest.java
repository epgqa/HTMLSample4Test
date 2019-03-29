package testGWD;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.logigear.ta.webdriver.common.TAConst;
import com.logigear.ta.webdriver.handler.TAEntityHandler;
import com.logigear.ta.webdriver.handler.WDElementHandler;
import com.logigear.ta.webdriver.handler.WDPageHandler;
import com.logigear.ta.webdriver.support.JavaScriptSupport;

public class mainTest {

	private static final String BROWSER_CHROME 		= "chrome";
	private static final String BROWSER_FIREFOX 	= "firefox";
	private static final String BROWSER_EDGE 		= "edge";
	private static final String BROWSER_IE 			= "ie";
	
	private	static final String PROP_ID 			= "id";
	private	static final String PROP_NAME 			= "name";
	private	static final String PROP_TAGNAME 		= "tagName";
	private	static final String PROP_CLASSNAME 		= "class name";
	private	static final String PROP_XPATH 			= "xpath";
	private	static final String PROP_CSSSELECTOR 	= "css selector";
	private	static final String PROP_TACLASS	 	= "ta class";
	
	public static void main(String[] args) {
		
		RemoteWebDriver driver = null;
		
		try {
				
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			String sBrowser = BROWSER_IE;
			String sURL = "https://www.google.com.vn/?hl=vi";
			//String sURL = "file:///E:/Share/Helper_Sample/HTML_Sample/Frame/mainPage.html";
			driver = initEnv(sBrowser, sURL);
			
			String[] props = {"title"};
			String[] values = {"Google"};
			TAEntityHandler.instance().getMatched(driver, props, values, 6, "id_1");
			
			
			
			HashMap<String, String> mapProps = null;
			List<String> propNames = null;
			List<String> propValues = null;
			String[] propNameArr = null;
			String[] propValueArr= null;
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			mapProps = new HashMap<String, String>();
			mapProps.put(PROP_ID			, "btn_1");
			mapProps.put(PROP_CLASSNAME		, "");
			mapProps.put(PROP_NAME			, "");
			mapProps.put(PROP_TAGNAME		, "");
			mapProps.put(PROP_XPATH			, "");
			mapProps.put(PROP_CSSSELECTOR	, "");
			mapProps.put(PROP_TACLASS		, "");
			
			propNames = new ArrayList<String>();
			propValues = new ArrayList<String>();
			parsingProperty(mapProps, propNames, propValues);
			
			propNameArr = propNames.toArray(new String[0]);
			propValueArr = propValues.toArray(new String[0]);
			WebElement element1 = WDPageHandler.getElementByProperties(driver, propNameArr, propValueArr, true, 0, "id-1");
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			mapProps = new HashMap<String, String>();
			mapProps.put(PROP_ID			, "btn_2");
			mapProps.put(PROP_CLASSNAME		, "");
			mapProps.put(PROP_NAME			, "");
			mapProps.put(PROP_TAGNAME		, "");
			mapProps.put(PROP_XPATH			, "");
			mapProps.put(PROP_CSSSELECTOR	, "");
			mapProps.put(PROP_TACLASS		, "");
			
			propNames = new ArrayList<String>();
			propValues = new ArrayList<String>();
			parsingProperty(mapProps, propNames, propValues);
			
			propNameArr = propNames.toArray(new String[0]);
			propValueArr = propValues.toArray(new String[0]);
			WebElement element2 = WDPageHandler.getElementByProperties(driver, propNameArr, propValueArr, true, 0, "id-1");
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			Actions builder = new Actions(driver);
			builder.moveToElement(element1).build().perform();

			Alert alert = driver.switchTo().alert();
			alert.accept();
			
			int loc1_X = element1.getLocation().getX() + element1.getSize().getWidth() / 2;
			int loc1_Y = element1.getLocation().getY() + element1.getSize().getHeight() / 2;
			int loc2_X = element2.getLocation().getX() + element2.getSize().getWidth() / 2;
			int loc2_Y = element2.getLocation().getY() + element2.getSize().getHeight() / 2;
			
			WDElementHandler.moveMouse(element1, String.valueOf(loc2_X - loc1_X), String.valueOf(loc2_Y - loc1_Y));

			alert = driver.switchTo().alert();
			alert.accept();			
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			driver.switchTo().defaultContent();
			WebElement frame = driver.findElementByXPath("//iframe[@src='drag_canvas.html']");
			
			int frameX = frame.getLocation().getX();
			int frameY = frame.getLocation().getY();
			
			WDPageHandler.switchFrameByPath(driver, "[xpath='//iframe[@src=\'drag_canvas.html\']']");
			mapProps = new HashMap<String, String>();
			mapProps.put(PROP_ID			, "canvas");
			mapProps.put(PROP_CLASSNAME		, "");
			mapProps.put(PROP_NAME			, "");
			mapProps.put(PROP_TAGNAME		, "");
			mapProps.put(PROP_XPATH			, "");
			mapProps.put(PROP_CSSSELECTOR	, "");
			mapProps.put(PROP_TACLASS		, "");
			
			propNames = new ArrayList<String>();
			propValues = new ArrayList<String>();
			parsingProperty(mapProps, propNames, propValues);
			
			propNameArr = propNames.toArray(new String[0]);
			propValueArr = propValues.toArray(new String[0]);
			WebElement element3 = WDPageHandler.getElementByProperties(driver, propNameArr, propValueArr, true, 0, "id-1");
			
			
			int loc3_X = element3.getLocation().getX() + frameX;
			int loc3_Y = element3.getLocation().getY() + frameY;
			
//			WDElementHandler.moveMouse(element3, "40", "10");
			
			driver.switchTo().defaultContent();
			
			WDPageHandler.dragMouse(driver, loc3_X + 40, loc3_Y + 10, loc3_X + 700, loc3_Y + 10, 0, 20);
			
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			System.out.print("end test");
			
		} catch (Throwable t) {
			t.printStackTrace();
		} finally {
			driver.quit();
		}		
	}
	
	public static RemoteWebDriver initEnv(String browserName, String sURL) throws Throwable{
		
		RemoteWebDriver driver = null;
		String serverPath = "C:\\webdriver\\";
		
		switch (browserName) {
			case BROWSER_CHROME:
				System.setProperty(TAConst.WD_CHROME_PATH, serverPath + "chromedriver.exe");
				ChromeOptions chromeOpt = new ChromeOptions();
				driver = new ChromeDriver(chromeOpt);
				break;
			case BROWSER_FIREFOX:		
				System.setProperty(TAConst.WD_GECKO_PATH, serverPath + "geckodriver.exe");
				FirefoxOptions firefoxOpt = new FirefoxOptions();
				driver = new FirefoxDriver(firefoxOpt);
				break;
			case BROWSER_IE:					
				System.setProperty(TAConst.WD_IE_PATH, serverPath + "IEDriverServer.exe");
				InternetExplorerOptions ieOpt = new InternetExplorerOptions();
				ieOpt = ieOpt.ignoreZoomSettings();
				driver = new InternetExplorerDriver(ieOpt);
				break;
			case BROWSER_EDGE:		
				System.setProperty(TAConst.WD_EDGE_PATH, serverPath + "MicrosoftWebDriver.exe");
				EdgeOptions edgeOpt = new EdgeOptions();
				driver = new EdgeDriver(edgeOpt);
				break;
			default:
				break;
		}
		
		String scriptPath = "C:\\Program Files\\LogiGear\\TestArchitect\\binclient\\data\\action_script\\webdriver_javascript.txt";
		JavaScriptSupport.getInstance().initScripts(scriptPath );
		
		driver.navigate().to(sURL);
		driver.manage().window().maximize();
		
		return driver;
		
	}	
	
	public static void updatePropertyTable(RemoteWebDriver driver, String propName, String proVal) throws Throwable {
		
		WebElement propTable = driver.findElement(By.id("lstProperty"));			
		
		Object[] cellContain = WDElementHandler.findCellWithText(propTable, propName, 0);
		
		WDElementHandler.clickTableCell(propTable, Integer.parseInt(cellContain[1].toString()) - 1 , Integer.parseInt(cellContain[2].toString()) - 1);
		
		WebElement updTextbox = driver.findElement(By.id("txtProValue"));
		
		WDElementHandler.focus(updTextbox);
		
		WDPageHandler.typeText(driver, proVal);
		
		WebElement btnUpd = driver.findElement(By.id("btnUpd"));
		
		WDElementHandler.click(btnUpd);
	}

	public static void parsingProperty(HashMap<String, String> mapProp, List<String> propNameArr, List<String> propValueArr) throws Throwable{

		String sTAClass = "";
		boolean bTAClass = false;
		
		for (Entry<String, String> en : mapProp.entrySet()) {
			if (en.getValue().equalsIgnoreCase("")) {
				continue;
			}
			
			if (en.getKey().equalsIgnoreCase(PROP_TACLASS)) {
				bTAClass = true;
				sTAClass = en.getValue();
				continue;
			}
			
			propNameArr.add(en.getKey());
			propValueArr.add(en.getValue());
		}
		
		if (true == bTAClass) {
			propNameArr.add(PROP_TACLASS);
			propValueArr.add(sTAClass);
		}
	}
}

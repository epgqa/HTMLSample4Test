//Constant variables
var POSFIX_TESTCASE_FILE = "_TCs.txt";
var POSFIX_DATA_FILE = "_DATA.txt";
var LINES_OF_SCENARIO_INFO = 4; //1 line for ScenarioID, 2 lines for detectproperties and its value and 1 line for [End] scenario

//The TestCase File's path
var _urlTestCase = null;
var _urlData = null;

//Cntrols ID////////////////////////////////////
var IDGridTestCase = "GridTestCase";
var IDGridDetectProperties = "GridDetectProperties";
var IDbtnApply = "btnApply";
var IDControlsSpace = "DspControl"; //Space to adding controls

//Grid TestCase Data////////////////////////////////////
var _TestCaseData = []; // store Grid TestCase data

var _ListTestCases = []; //list TestCase objects on TestCase file
var _ListScenarios = []; //list Scenario objects will be displaying on view_scenario.html


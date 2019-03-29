package com.logigear.ta.problem;

import com.logigear.ta.logger.AbtTrace;

public class Problems {
	private static Exception mLatestProblem = null;
	
	public static void handleException(String szFunctionName, Exception exception){
		
		mLatestProblem = exception;
		
		AbtTrace.error(szFunctionName + " Exception ");
		AbtTrace.error(exception.getMessage());
		AbtTrace.error(exception.toString());
	}
	
	public static boolean any(){
		return mLatestProblem != null;
	}
	
	public static void cleanUp(){
		mLatestProblem = null;
	}
	
	public static String getInfo(){
		if(mLatestProblem == null){
			return "";
		}
		
		return mLatestProblem.getMessage();
	}
}

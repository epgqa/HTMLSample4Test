package com.logigear.ta.logger;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Performance {
	private static long sAPICallCounter = 0;
	private static long sDuration = 0;
	
	private static Map<String, Pair<Long, Long>> sStatistic = new HashMap<String, Pair<Long, Long>>();
	
	public static long logStart()
	{
		
		long nStartTime = System.currentTimeMillis();
		return nStartTime;
	}
	
	public static void logEnd(long nStartTime){
		long nEndTime = System.currentTimeMillis();
		long nDuration = nEndTime - nStartTime;
		
		sAPICallCounter += 1;
		sDuration += nDuration;
		
		StackTraceElement[] stacktrace = Thread.currentThread().getStackTrace();
		StackTraceElement e = stacktrace[2];//maybe this number needs to be corrected
		String methodName = e.getMethodName();
		
		if(sStatistic.containsKey(methodName)){
			Pair<Long, Long> pair = sStatistic.get(methodName);
			long oldCount = pair.getLeft();
			long oldTime = pair.getRight();
			
			long newCount = oldCount + 1;
			long newTime = oldTime + nDuration;
			
			pair.set(newCount, newTime);
			
		}
		else{
			long nInitialCount = 1;
			long nInitialTime = nDuration;
			sStatistic.put(methodName, new Pair<Long, Long>(nInitialCount, nInitialTime));
		}
		
	}
	
	public static long getCallCounter(){
		return sAPICallCounter;
	}
	
	public static long getDuration(){
		return sDuration;
	}
	
	public static Map<String, Pair<Long, Long>> getStatistic(){
		return sStatistic;
	}
	
	public static String getStringStatistic(){
		Set<String> szMethods = sStatistic.keySet();
		
		String szResult = "";
		
		for(String szMethod : szMethods){
			Pair<Long, Long> values = sStatistic.get(szMethod);
			long nCount = values.getLeft();
			long nTime = values.getRight();
			
			szResult += szMethod + "\t" + nCount + "\t" + nTime + "\n";
		}
		
		return szResult;
	}
}

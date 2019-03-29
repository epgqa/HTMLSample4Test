package com.logigear.ta.webdriver.model;

import java.util.List;

import com.logigear.ta.webdriver.common.TAConst;

public class WDResult {
	int taRes = TAConst.TA_FALSE;
	Object result = null;
	
	public WDResult(int result){
		this.taRes = result;
	}
	
	public int getTAResult(){return this.taRes;};
	
	public void setResult(Object result){ this.result = result;};
	
	public int getIntegerResult(){
		if(result instanceof Integer) ((Integer)result).intValue();
		
		return -1;
	}
	
	public String getStringResult(){
		if(result instanceof String) return (String)result;
		
		return "";
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<String> getListStringResult(){
		boolean stringList = false;
		if(result instanceof List) {
			for(Object obj : (List)result){
				if(obj instanceof String){
					stringList = true;	
				}
				break;
			}
			
			if(stringList)
				return (List<String>)result;
		}
		
		return null;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<String> getListIntegerResult(){
		boolean stringList = false;
		if(result instanceof List) {
			for(Object obj : (List)result){
				if(obj instanceof Integer){
					stringList = true;	
				}
				break;
			}
			
			if(stringList)
				return (List<String>)result;
		}
		
		return null;
	}
}

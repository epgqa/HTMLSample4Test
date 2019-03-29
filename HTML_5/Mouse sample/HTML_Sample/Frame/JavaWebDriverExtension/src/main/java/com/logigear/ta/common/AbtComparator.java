// Copyright (C) 2009 LogiGear Corporation, all rights reserved. Confidential.
package com.logigear.ta.common;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.logigear.ta.webdriver.common.TAConst;

public class AbtComparator {

	public final static int	COMPARE_CASE_SENSITIVE		= 0x00000001;
	public final static int COMPARE_ASCII_ONLY			= 0x00000002;
	public final static int	COMPARE_REGULAR_EXPRESSION	= 0x00000004;//0x00000004;
	public final static int	COMPARE_IGNORE_NON_PRINTABLE_CHARS	= 0x00000008;//0x00000004;
	public final static int	COMPARE_IGNORE_BLANK_SPACE	= 0x00000010;
	
	protected static String formatNewline(String input)
     {
         //We must replace \r\n first, \r after.
		String result = input.replace("\r\n", "\n");
         result = result.replace("\r", "\n");
         return result;
     }
	protected static String removeUnicodeChar(String in) {
		StringBuilder out = new StringBuilder();
		char current;
		if (in == null || ("".equals(in))) {
	        return "";
	    }
		int length = in.length();
		for (int i = 0; i < length; i++) {
			current = in.charAt(i);
			if ((current >= 32 && current < 127)
				|| current == '\n' || current == '\r' || current == '\t' ){
				out.append(current);
			}
		}
		return out.toString();
	}

	private static String removeNonPrintableChars(String szString) 
	{
		String result = szString.replaceAll("\r", "");
		result = result.replaceAll("\n", "");
		result = result.replaceAll("\t", "");
		
		return result;
	}
	protected static String trim(String in, char ch)
	{
		if (in == null || ("".equals(in))) {
	        return "";
	    }
		
		String rs = in;
		int length = rs.length();
		int iIndex = -1;
		StringBuilder builder = new StringBuilder(rs);
		// trim the leading space bars
		for (int i = 0; i < length; i++) {
			if ( builder.charAt(i) == ch)
				iIndex = i;
			else
				break;
		}
		if(iIndex != -1)
		{
			rs = builder.substring(iIndex);
		}

		// trim the ending space bars
		length = rs.length();
		iIndex = -1;
		builder = new StringBuilder(rs);
		// trim the ending space bars
		for (int i = length - 1; i >= 0; i--) {
			if ( builder.charAt(i) == ch)
				iIndex = i;
			else
				break;
		}
		if(iIndex != -1)
			rs = builder.substring(0, iIndex);
		return rs;
	}
	// 2010/04/09 Huan Dong support Review Item 5 (does not process for setting about string such as "case sensitive" "high ascii")
	/**
	 * Aux : Compare strings with setting
	 * @param sValue 	: the input string
	 * @param sPattern	: the pattern string
	 * @param nSetting	: setting from Logical Layer
	 * @return 
	 * 			Less than zero		: sValue is less than sPattern.
	 * 			Zero		  		: sValue equals sPattern.
	 * 			Greater than zero	: sValue is greater than sPattern.									
	 */
	public static int StringCompare(String sValue, String sPattern , int nSetting ) {
		
		int iResult = TAConst.TA_FALSE;
		if(sValue == null || sPattern == null){
			return sValue == sPattern ? TAConst.TA_OK : TAConst.TA_FALSE;
		}
		
		if ((nSetting & COMPARE_ASCII_ONLY) != 0) {
			sValue = removeUnicodeChar(sValue);
			sPattern = removeUnicodeChar(sPattern);
		}

		// Normal comparison
		if ( (nSetting & COMPARE_CASE_SENSITIVE) == 0 )
		{
			sValue = sValue.toLowerCase();
			sPattern = sPattern.toLowerCase();			
		}
		

		
		if ( (nSetting & COMPARE_IGNORE_NON_PRINTABLE_CHARS) != 0 )
		{
			sValue = removeNonPrintableChars(sValue);
			sPattern = removeNonPrintableChars(sPattern);			
		}
		else
		{
			sPattern = formatNewline(sPattern);
			sValue = formatNewline(sValue);
		}
		
		if ( (nSetting & COMPARE_IGNORE_BLANK_SPACE) != 0 )
		{
			if( (nSetting & COMPARE_IGNORE_NON_PRINTABLE_CHARS) != 0)
			{
				sValue = sValue.trim();
				sPattern = sPattern.trim();
			}
			else
			{
				sValue = trim(sValue, ' ');
				sPattern = trim(sPattern, ' ');		
			}	
		}
		
		if ( (nSetting & COMPARE_REGULAR_EXPRESSION) != 0 )
		{
			if ( sPattern.startsWith("{") && sPattern.endsWith("}") )
			{							
				sPattern = sPattern.substring(1, sPattern.length() - 1);
				
				Pattern pattern ;
				if ( (nSetting & COMPARE_CASE_SENSITIVE) != 0 )
					pattern = Pattern.compile(sPattern, Pattern.UNICODE_CASE);
				else					
					pattern = Pattern.compile(sPattern, Pattern.CASE_INSENSITIVE);
				
				Matcher matcher = pattern.matcher(sValue);
				if(matcher.matches()) { 
					iResult = 0;
				}
				return iResult;
			}
		}
		
		iResult = sValue.compareTo(sPattern);
		return iResult;
	}
	
	public static int StringCompare(String str1, String str2) {
		int iResult = -1;
		
		// currently not supported case sensitivity.
		iResult = str1.trim().compareToIgnoreCase(str2.trim());
		
		// 2009/1/19 Huan Dong support issue EGain #36
		if (iResult != 0)
		{		
			if ( str2.startsWith("{") && str2.endsWith("}") && str2.contains(".*") )
			{							
				str2 = str2.substring(1, str2.length() - 1);
				
				Pattern pattern = Pattern.compile(str2, Pattern.CASE_INSENSITIVE);
				Matcher matcher = pattern.matcher(str1);
				if(matcher.matches()) { 
					iResult = 0;
				}
			}
		}
		
		return iResult;
	}

}
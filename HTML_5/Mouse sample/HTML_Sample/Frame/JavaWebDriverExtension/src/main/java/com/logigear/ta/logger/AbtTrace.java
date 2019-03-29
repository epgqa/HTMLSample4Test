package com.logigear.ta.logger;

import com.logigear.ta.logger.jniwrapper.TALogger;

public class AbtTrace {
	private static final int TA_OK = 0;
	private static final int LOG_NO_CONFIG = -2;
	//private static final int LOG_OFF = -1;// = TA_FALSE
	private static final int LOG_ON = 0; // = TA_OK
	
	private static int iLogMode = LOG_ON;
	
	static final String stagName = "Java_WD ";
	
	private static boolean isLogEnable(){
		if(iLogMode == LOG_NO_CONFIG)
		{
			boolean isLoad = TALogger.getInstance().isLoaded();
			if(isLoad){
				iLogMode = TALogger.getInstance().isEnable();
			}
		}
		boolean bEnable = false;
		if(iLogMode == LOG_ON)
		{
			bEnable = true;
		}
		return bEnable;
	}
	
	/** info					: Writes an informational message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg			: informational message
	* @return  TARESULT	: 
	*/
	public static int info(String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().info(stagName + msg);
	}
	/** infoIf					: Writes an informational message to mode output (File|DebugView|Console) using the specified message if a condition is true.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: informational message
	* @return  TARESULT		: 
	*/
	public static int infoIf(boolean bCondition, String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().infoIf(bCondition, msg);
	}
	/** warning				: Writes a warning message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg			: warning message
	* @return  TARESULT	: 
	*/
	public static int warning(String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().warning(msg);
	}
	/** warningIf				: Writes a warning message to mode output (File|DebugView|Console) using the specified message.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: warning message
	* @return  TARESULT		: 
	*/
	public static int warningIf(boolean bCondition, String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().warningIf(bCondition, msg);
	}
	/** error					: Writes an error message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg				: error message
	* @return  TARESULT		: 
	*/
	public static int error(String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().error(msg);
	}
	/** errorIf					: Writes an error message to mode output (File|DebugView|Console) using the specified message.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: error message
	* @return  TARESULT		: 
	*/
	public static int errorIf(boolean bCondition, String msg){
		if(!isLogEnable())
		{
			return TA_OK;
		}
		return TALogger.getInstance().errorIf(bCondition, msg);
	}
}

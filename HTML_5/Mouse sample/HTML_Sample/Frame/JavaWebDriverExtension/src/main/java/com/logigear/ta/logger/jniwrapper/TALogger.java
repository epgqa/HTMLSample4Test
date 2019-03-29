package com.logigear.ta.logger.jniwrapper;



public class TALogger {
	static TALogger m_instance = null;
	private boolean bLoaded = false;
	private static final String LIB_DEFAULT = "TALogger";
	
	public static synchronized TALogger getInstance() {
		if (m_instance == null){
			m_instance = new TALogger();
		}
		
		return m_instance;		
	}
	/**
	 * Constructor
	 */
	public TALogger(){
		loadLibrary();
	}

	/**
	 * load dynamic link library
	 */
	private void loadLibrary() {
		try {
			System.loadLibrary(LIB_DEFAULT);
			bLoaded = true;
		} catch (Throwable e) {
			// TODO: handle diagnostic
			e.printStackTrace();
		}
	}
	
	/**
	 * check the library loading is successful
	 * 
	 * @return
	 */
	public boolean isLoaded() {
		return bLoaded;
	}
	/**
	 * check log enable
	 * @return
	 */
	public native synchronized int isEnable();
	/** info					: Writes an informational message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg			: informational message
	* @return  TARESULT	: 
	*/
	public native synchronized int info(String msg);
	/** infoIf					: Writes an informational message to mode output (File|DebugView|Console) using the specified message if a condition is true.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: informational message
	* @return  TARESULT		: 
	*/
	public native synchronized int infoIf(boolean bCondition, String msg);
	/** warning				: Writes a warning message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg			: warning message
	* @return  TARESULT	: 
	*/
	public native synchronized int warning(String msg);
	/** warningIf				: Writes a warning message to mode output (File|DebugView|Console) using the specified message.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: warning message
	* @return  TARESULT		: 
	*/
	public native synchronized int warningIf(boolean bCondition, String msg);
	/** error					: Writes an error message to mode output (File|DebugView|Console) using the specified message.
	* @param	msg				: error message
	* @return  TARESULT		: 
	*/
	public native synchronized int error(String msg);
	/** errorIf					: Writes an error message to mode output (File|DebugView|Console) using the specified message.
	* @param	bCondition		: true to cause a message to be written; otherwise, false.
	* @param	msg				: error message
	* @return  TARESULT		: 
	*/
	public native synchronized int errorIf(boolean bCondition, String msg);
	
	
}



	///////////////////////////////////////
	function __getIEVersion() {
		var rv = -1; // Return value assumes failure.  
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
				rv = parseFloat(RegExp.$1);
		}
		return rv;
	}

	function __getOperaVersion() {
		var rv = 0; // Default value  
		if (window.opera) {
			var sver = window.opera.version();
			rv = parseFloat(sver);
		}
		return rv;
	}

	var __userAgent = navigator.userAgent;
	var __isIE = navigator.appVersion.match(/MSIE/) != null;
	var __IEVersion = __getIEVersion();
	var __isIENew = __isIE && __IEVersion >= 8;
	var __isIEOld = __isIE && !__isIENew;

	var __isFireFox = __userAgent.match(/firefox/i) != null;
	var __isFireFoxOld = __isFireFox && ((__userAgent.match(/firefox\/2./i) != null) || (__userAgent.match(/firefox\/1./i) != null));
	var __isFireFoxNew = __isFireFox && !__isFireFoxOld;

	var __isWebKit = navigator.appVersion.match(/WebKit/) != null;
	var __isChrome = navigator.appVersion.match(/Chrome/) != null;
	var __isOpera = window.opera != null;
	var __operaVersion = __getOperaVersion();
	var __isOperaOld = __isOpera && (__operaVersion < 10);

	function __parseBorderWidth(width) {
		var res = 0;
		if (typeof (width) == "string" && width != null && width != "") {
			var p = width.indexOf("px");
			if (p >= 0) {
				res = parseInt(width.substring(0, p));
			}
			else {
				//do not know how to calculate other values (such as 0.5em or 0.1cm) correctly now  
				//so just set the width to 1 pixel  
				res = 1;
			}
		}
		return res;
	}


	//returns border width for some element  
	function __getBorderWidth(element) {
		var res = new Object();
		res.left = 0; res.top = 0; res.right = 0; res.bottom = 0;
		if (window.getComputedStyle) {
			//for Firefox  
			var elStyle = window.getComputedStyle(element, null);
			res.left = parseInt(elStyle.borderLeftWidth.slice(0, -2));
			res.top = parseInt(elStyle.borderTopWidth.slice(0, -2));
			res.right = parseInt(elStyle.borderRightWidth.slice(0, -2));
			res.bottom = parseInt(elStyle.borderBottomWidth.slice(0, -2));
		}
		else {
			//for other browsers  
			res.left = __parseBorderWidth(element.style.borderLeftWidth);
			res.top = __parseBorderWidth(element.style.borderTopWidth);
			res.right = __parseBorderWidth(element.style.borderRightWidth);
			res.bottom = __parseBorderWidth(element.style.borderBottomWidth);
		}

		return res;
	}

	//returns the absolute position of some element within document  
	function getElementAbsolutePos(elemID) {
		var element;
		if (typeof (elemID) == "string") {
			element = document.getElementById(elemID);
		}
		else {
			element = elemID;
		}

		var res = new Object();
		res.x = 0; res.y = 0;
		if (element !== null) {
			res.x = element.offsetLeft;

			var offsetParent = element.offsetParent;
			var offsetParentTagName = offsetParent != null ? offsetParent.tagName.toLowerCase() : "";

			if (__isIENew && offsetParentTagName == 'td') {
				res.y = element.scrollTop;
			}
			else {
				res.y = element.offsetTop;
			}

			var parentNode = element.parentNode;
			var borderWidth = null;

			while (offsetParent != null) {
				res.x += offsetParent.offsetLeft;
				res.y += offsetParent.offsetTop;

				var parentTagName = offsetParent.tagName.toLowerCase();

				if ((__isIEOld && parentTagName != "table") || (__isFireFoxNew && parentTagName == "td") || __isChrome) {
					borderWidth = __getBorderWidth(offsetParent);
					res.x += borderWidth.left;
					res.y += borderWidth.top;
				}

				if (offsetParent != document.body && offsetParent != document.documentElement) {
					res.x -= offsetParent.scrollLeft;
					res.y -= offsetParent.scrollTop;
				}


				//next lines are necessary to fix the problem with offsetParent  
				if (!__isIE && !__isOperaOld || __isIENew) {
					while (offsetParent != parentNode && parentNode !== null) {
						res.x -= parentNode.scrollLeft;
						res.y -= parentNode.scrollTop;
						if (__isFireFoxOld || __isWebKit) {
							borderWidth = __getBorderWidth(parentNode);
							res.x += borderWidth.left;
							res.y += borderWidth.top;
						}
						parentNode = parentNode.parentNode;
					}
				}

				parentNode = offsetParent.parentNode;
				offsetParent = offsetParent.offsetParent;
			}
		}
		return res;
	}  
	
	function _getPositionViewport()
	{
		var res = new Object();
		res.x = 0; 
		res.y = 0;
		
		if (__isIE ) 
		{
			res.x = window.screenLeft;
			res.y =  window.screenTop;
		}
		else if (__isFireFox)
		{
			res.x = window.mozInnerScreenX;
			res.y = window.mozInnerScreenY;
		}
		else
		{						
			var boder = (window.outerWidth - window.innerWidth)/2;
			res.x =  window.screenX  + boder;
			res.y =  window.screenY + (window.outerHeight - (window.innerHeight + boder));		
		}
		return res;
    }
  
  
	//Public Functions //////////////////////////////////////////////////////////////////////////////////////////
	function getElement_Left(idElement)
	{
	    var posEle = getElementAbsolutePos(idElement);
		return Math.round(posEle.x) ;
	}
	
	function getElement_Top(idElement) {

	     var posEle = getElementAbsolutePos(idElement);
	    //rec = document.getElementById(idElement).getBoundingClientRect();
	   
	    return Math.round(posEle.y);
	}

	//function getElement_Index(idElement) {

	//    var inxEle = document.getElementById(idElement).sourceIndex();
	//    //rec = document.getElementById(idElement).getBoundingClientRect();

	//    return Math.round(posEle.y);
	//}
	
	function getElement_Width(idElement)
	{
		if (typeof (idElement) == "string") {
			element = document.getElementById(idElement);
		}
		else {
			element = idElement;
		}
		if (element==null) return 0;		
		
		if (element.tagName.toLowerCase() == "area") {
		    var str = element.coords;		    
		    var arr = str.split(',');
		    w = parseInt(arr[2]) - parseInt(arr[0]);            
		    return w;
		}

		var rect = element.getBoundingClientRect ();
		w = rect.right - rect.left;		
		return Math.round(w);
	}
	
	function getElement_Height(idElement)
	{
		if (typeof (idElement) == "string") {
			element = document.getElementById(idElement);
		}
		else {
			element = idElement;
		}
		if (element == null) return 0;

		if (element.tagName.toLowerCase() == "area") {
		    var str = element.coords;
		    var arr = str.split(',');
		    h = parseInt(arr[3]) - parseInt(arr[1]);
		    return h;
		}
						 
		var rect = element.getBoundingClientRect ();
		h = rect.bottom - rect.top;		
		return Math.round(h);
	}

	
	function getElement_ScreenLeft(idElement) {

	    var posEle = getElementAbsolutePos(idElement);
	    //rec = document.getElementById(idElement).getBoundingClientRect();
		var posVP = _getPositionViewport();
		return (posEle.x + posVP.x);	

	}
	
	function getElement_ScreenTop(idElement) {

	 
	    var posEle = getElementAbsolutePos(idElement);
	    var posVP = _getPositionViewport();
	    return (posEle.y + posVP.y);
	   
	
    }

    function Element_id() {
        
        return $("#"+IDControl)[0].id;
    }

    function Element_name(name, isSet) {
        if (isSet == 1) {
            $("#" + IDControl)[0].name = name;
        }
        return $("#" + IDControl)[0].name;
    }    

    function Element_tagName()
    {
        return $("#" + IDControl)[0].tagName;
    }

    function Element_type() {
        return $("#" + IDControl)[0].type;
    }

    function Element_value(value, isSet)
    {
        if (isSet==1)
        {
            $("#" + IDControl)[0].value = value;
        }

        return $("#" + IDControl)[0].value;
    }
    function Element_disabled(value, isSet)
    {

      if (isSet == 1) {
          $("#" + IDControl)[0].disabled = (value.toLowerCase() == "true");
      }
     
      
      return ($("#" + IDControl)[0].disabled ==true);
        
    }

    function Element_visibility(value, isSet) {
        
        if (isSet == 1) {
            if (value.toLowerCase() == "true")
                $("#" + IDControl).show();
            else
                $("#" + IDControl).hide();
        }
        return ($("#" + IDControl).is(':visible'));
    }

    function Element_Width(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl).width(value);
           // var valWidth = document.getElementById(IDControl).style.Width;
        }
        return getElement_Width(IDControl);
    }

    function Element_Height(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl).height(value);
        }
        return getElement_Height(IDControl);
    }

    function Element_Left(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl).offset({ left: value });
        }
        return getElement_Left(IDControl);
    }

    function Element_Top(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl).offset({top:value});
        }
        return getElement_Top(IDControl);
    }

    function Element_Check(value, isSet) {
        if (isSet == 1) {
            if (value.toLowerCase() == "true") {
                document.getElementById(IDControl).checked = true;
            } else {
                document.getElementById(IDControl).checked = false;
            }
        }
        return (document.getElementById(IDControl).checked);
    }

    function Element_Size(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl)[0].size = value;
        }
        return $("#" + IDControl)[0].size;

    }

    function Element_maxLength(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl)[0].maxLength = value;
        }
        return $("#" + IDControl)[0].maxLength;

    }

    function Element_Src(value, isSet) {
        if (isSet == 1) {
            document.getElementById(IDControl).src = value;
        }
        return GetCurrentFile($("#" + IDControl)[0].src);
     
    }

    function Element_alt(value, isSet) {
        
        if (isSet == 1) {
            document.getElementById(IDControl).alt = value;
        }
        return $("#" + IDControl)[0].alt;

    }

    function Element_longHrf() {
       
        return $("#" + IDControl)[0].src;
    }

    function Element_shortHrf() {
       
        return GetShortFileName($("#" + IDControl)[0].src);
    }

    function Element_title(value, isSet) {
       
        if (isSet == 1) {
            $("#" + IDControl)[0].title = value;
        }
        return $("#" + IDControl)[0].title;
    }

    function Element_textContent(value, isSet) {
        
        if (isSet == 1) {
            document.getElementById(IDControl).textContent = value;
        }
        return document.getElementById(IDControl).textContent;        
    }

    function Element_innerHTML(value, isSet) {
        if (isSet == 1) {
            $("#" + IDControl)[0].innerHTML = value;
        }
        //txtInnerhtml = $("#" + IDControl)[0].innerHTML
        return $("#" + IDControl)[0].innerHTML;
        //alert(txtInnerhtml);
    }

    function Element_rows(value, isSet) {
      
        if (isSet == 1) {
            document.getElementById(IDControl).rows = value;
        }
        return document.getElementById(IDControl).rows;
    }

    function Element_cols(value, isSet) {

        if (isSet == 1) {
            document.getElementById(IDControl).cols = value;
        }
        return document.getElementById(IDControl).cols;
    }

    function Element_Multi(value, isSet) {

        if (value.toLowerCase() == "true")
            document.getElementById(IDControl).multiple = true;
        else
            document.getElementById(IDControl).multiple = false;

        return document.getElementById(IDControl).multiple;
    }

    function Element_tableRows(value, isSet) {

        if (isSet == 1) {
            _varItemCount = value;
            AddItem_Table();
        }
        oRows = document.getElementById(IDControl).getElementsByTagName('tr');
        return oRows.length;

            
    }

    function Element_ItemLength(value, isSet) {
       
        if (isSet == 1) {
            _varItemCount = value;
            AddItem_Select();
        }
        return _varItemCount;
    }

    function Element_ItemName(value, isSet) {
        
         if (isSet == 1) {
             _varItemName = value;
             AddItem_Select();
         }
         return _varItemName;
     }

     function Element_Cells() {
        
        var oRows = document.getElementById(IDControl).getElementsByTagName('tr');
        var iRows = oRows.length;
        var iCells=0;
        for (ii = 0; ii < iRows; ii++) {
            iCells = iCells + oRows[ii].cells.length;
           
        }

        return iCells;
    }

    function Element_Bodies() {

        var oBodies = document.getElementById(IDControl).getElementsByTagName('tbody');
        var iBodies = 0;
        if (oBodies != null) {
            iBodies = oBodies.length;
        }
        return iBodies;
    }

    function Element_Caption(value, isSet) {
  
        var oCap = document.getElementById(IDControl).getElementsByTagName('caption');
        if (oCap == null) return "";
        if (isSet == 1) {
            oCap[0].innerHTML = value;
        }
        return stripHTML(oCap[0].innerHTML);
    }

    function Element_Footer(value, isSet) {
        var oFoot = document.getElementById('footerID');
        if (oFoot == null) return "";
        if (isSet == 1) {
            oFoot.innerHTML = value;
        }
        return oFoot.innerHTML;
    }

    function Element_Coords(value, isSet) {
        var oCoords = document.getElementById(IDControl);
        if (isSet == 1) {
            oCoords.coords = value;
        }
        return oCoords.coords;
    }
    function Element_Shape(value, isSet) {
        var oShape = document.getElementById(IDControl);
        if (isSet == 1) {
            oShape.shape = value;
        }
        return oShape.shape;
    }

    //function Element_Index(value, isSet) {

    //    if (isSet == 1) {
    //        var inxEle = document.getElementById(idElement).sourceIndex();
    //    }
    //    return oCap[0].innerHTML;
    //}


     //--------------------------------------------------------------------------------------

    
	//get default property value of the control test
    function udpDefaultProperties() {
      

	    for (i = 0; i < PropertyData.length; i++) {
	        oAttributes = PropertyData[i];
	        val = "";
	        
	        if (oAttributes.name == "id")
	            val = Element_id()
	        else if (oAttributes.name == "name")
	            val = Element_name("", 0)
	        else if (oAttributes.name == "tagName")
	            val = Element_tagName()
	        else if (oAttributes.name == "type")
	            val = Element_type()
	        else if (oAttributes.name == "value")
	            val = Element_value("", 0)
	        else if (oAttributes.name == "disabled")
	            val = Element_disabled("", 0)
	        else if (oAttributes.name == "visible")
	            val = Element_visibility("", 0)
	        else if (oAttributes.name == "left")
	            val = getElement_Left(IDControl)
	        else if (oAttributes.name == "top")
	            val = getElement_Top(IDControl)
	        else if (oAttributes.name == "width")
	            val = getElement_Width(IDControl)
	        else if (oAttributes.name == "height")
	            val = getElement_Height(IDControl)
	        else if (oAttributes.name == "top_screen")
	            val = getElement_ScreenTop(IDControl)
	        else if (oAttributes.name == "left_screen")
	            val = getElement_ScreenLeft(IDControl)
	        else if (oAttributes.name == "title")
	            val = Element_title("", 0)
	        else if (oAttributes.name == "textContent") 
	            val = Element_textContent("", 0)
	        else if (oAttributes.name == "innerHTML") {
	            val = Element_innerHTML("", 0)
	        }
	        else {

	            if ((ID == "checkbox") || (ID == "radio")) {
	                if (oAttributes.name == "checked") {
	                    val = Element_Check("", 0);
	                }
	            }
	            else if ((ID == "file") || (ID == "password")) {
	                if (oAttributes.name == "size")
	                    val = Element_Size("", 0)
	                else if (oAttributes.name == "maxLength")
	                    val = Element_maxLength("", 0);
	            }
	            else if (ID == "imagebtn") {
	                if (oAttributes.name == "src")
	                    val = Element_Src("", 0);
	            }
	            else if (ID == "image") {
	                if (oAttributes.name == "src")
	                    val = Element_Src("", 0)
	                else if (oAttributes.name == "alt")
	                    val = Element_alt("", 0)
	                else if (oAttributes.name == "longHrf")
	                    val = Element_longHrf()
	                else if (oAttributes.name == "shortHrf")
	                    val = Element_shortHrf();
	            }
	            else if (ID == "text") {
	                 if (oAttributes.name == "maxLength")
	                     val = Element_maxLength("", 0);
	             }
	             else if (ID == "textarea") {
	                 if (oAttributes.name == "Cols")
	                     val = Element_cols("", 0)
	                 else if (oAttributes.name == "Rows")
	                     val = Element_rows("", 0);
	             }
	             else if (ID == "select") {
	                 if (oAttributes.name == "size")
	                     val = Element_Size("", 0)
	                 else if (oAttributes.name == "multiple")
	                     val = Element_Multi("", 0)
	                 else if (oAttributes.name == "Item_length")
	                     val = Element_ItemLength("", 0)
	                 else if (oAttributes.name == "Item_name")
	                     val = Element_ItemName("", 0);
	             }
	             else if (ID == "table") {
	                 if (oAttributes.name == "Bodies")
	                     val = Element_Bodies()
                     else if (oAttributes.name == "Caption")
                         val = Element_Caption("", 0)
	                 else if (oAttributes.name == "tableRows")
	                     val = Element_tableRows("", 0)
	                 else if (oAttributes.name == "Footer")
	                     val = Element_Footer("", 0)
	                 else if (oAttributes.name == "Cells")
	                     val = Element_Cells();

	             }
	             else if (ID == "area") {
	                 if (oAttributes.name == "alt")
	                     val = Element_alt()
	                 else if (oAttributes.name == "coords")
	                     val = Element_Coords("", 0)
	                 else if (oAttributes.name == "shape")
	                     val = Element_Shape("", 0);
	             }
	        }
	        if (val != null) {
	            oAttributes.value = val;
	        }
	        else oAttributes.value = "";
	        PropertyData[i] = oAttributes;
	    }
	}
	
    
	function updProperty(name, val) {

	    if (name == "name")
	        ret = Element_name(val, 1)
	    else if (name == "value")
	        ret = Element_value(val, 1)
	    else if (name == "disabled")
	        ret = Element_disabled(val, 1)
	    else if (name == "visible")
	        ret = Element_visibility(val, 1)
	    else if (name == "left")
	        ret = Element_Left(val, 1)
	    else if (name == "top")
	        ret = Element_Top(val, 1)
	    else if (name == "width")
	        ret = Element_Width(val, 1)
	    else if (name == "height")
	        ret = Element_Height(val, 1)
	    else if (name == "top_screen")
	        ret = getElement_ScreenTop(IDControl)
	    else if (name == "left_screen")
	        ret = getElement_ScreenLeft(IDControl);
	    else if (name == "checked")
	        ret = Element_Check(val, 1)
	    else if (name == "size")
	        ret = Element_Size(val, 1)
	    else if (name == "maxLength")
	        ret = Element_maxLength(val, 1)
	    else if (name == "src")
	        ret = Element_Src(val, 1)
	    else if (name == "title")
	        ret = Element_title(val, 1)
	    else if (name == "textContent")
	        ret = Element_textContent(val, 1)
	    else if (name == "innerHTML")
	        ret = Element_innerHTML(val, 1)
	    else if (name == "maxLength")
	        ret = Element_maxLength(val, 1)
	    else if (name == "Rows")
	        ret = Element_rows(val, 1)
	    else if (name == "Cols")
	        ret = Element_cols(val, 1)
	    else if (name == "multiple")
	        ret = Element_Multi(val, 1)
	    else if (name == "Item_length")
	        ret = Element_ItemLength(val, 1)
	    else if (name == "Item_name")
	        ret = Element_ItemName(val, 1)
	    else if (name == "tableRows")
	        ret = Element_tableRows(val, 1)
	    else if (name == "shape")
	        ret = Element_Shape(val, 1)
	    else if (name == "coords")
	        ret = Element_Coords(val, 1)
	    else if (name == "Footer")
	        ret = Element_Footer(val, 1)
	    else if (name == "Caption")
	        ret = Element_Caption(val, 1);
	    return ret;
	}
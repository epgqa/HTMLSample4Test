 
//Public Functions //////////////////////////////////////////////////////////////////////////////////////////

	function getSvg_Left() {
	    var oLeft = document.getElementById(IDControl);
	    var valLeft = oLeft.getClientRects()[0].left;
	    return valLeft;
	}
	function getSvg_Top() {
	    var oTop = document.getElementById(IDControl);
	    var valTop = oTop.getClientRects()[0].top;
	    return valTop;
	}

	function getElement_Left(idElement)
	{
	    var posEle = getElementAbsolutePos(idElement);
	    var posLeft;
	    if (Math.round(posEle.x).toString() != 'NaN') {
	        posLeft = Math.round(posEle.x);
	    } else {
	        posLeft = getSvg_Left();
	    }
		return posLeft ;
	}
	
	function getElement_Top(idElement) {

	    var posEle = getElementAbsolutePos(idElement);
	    var posTop;
	    //rec = document.getElementById(idElement).getBoundingClientRect();
	    if (Math.round(posEle.y).toString() != 'NaN') {
	        posTop = Math.round(posEle.y);
	    } else {
	        posTop = getSvg_Top();
	    }
	    return posTop;
	}
	
	function getElement_Width(idElement)
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
		if (element==null) return 0;

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
	    var posVP = _getPositionViewport();
	    var posScreenLeft;
	    if ((posEle.x + posVP.x).toString() != 'NaN') {
	        posScreenLeft = (posEle.x + posVP.x);
	    } else {
	        posScreenLeft = (parseInt(getSvg_Left()) + parseInt(posVP.x));
	    }
		return posScreenLeft;	

	}
	
	function getElement_ScreenTop(idElement) {

	    var posEle = getElementAbsolutePos(idElement);
	    var posVP = _getPositionViewport();
	    var posScreenTop;
	    if ((posEle.y + posVP.y).toString() != 'NaN') {
	        posScreenTop = (posEle.y + posVP.y);
	    } else {
	        posScreenTop = (parseInt(getSvg_Top()) + parseInt(posVP.y));
	    }
	    return posScreenTop;
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
        Ctrl = document.getElementById(IDControl);
        if (Ctrl.hasAttribute("type"))
        {
            oType = Ctrl.getAttribute('Type');
        }
        else if ($("#" + IDControl)[0].type != null)
            oType = $("#" + IDControl)[0].type;
        else
            oType = "";
            
        return oType;
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

        return $("#" + IDControl)[0].innerHTML;

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

    function Element_videoSrc(value, isSet) {
        oVideo = document.getElementById(IDControl);
        oSrc = oVideo.getElementsByTagName('source');
        ii = 0;
        if (navigator.appName != 'Microsoft Internet Explorer') ii = 1;
        if (isSet == 1) {
            oSrc[ii].src = value;
            oVideo.load();
        }
        return oSrc[ii].src;

    }

    function Element_videoAutoplay(value, isSet) {
        oVideo = document.getElementById(IDControl);

        if (isSet == 1) {
            if (value == 'true') 
                oVideo.setAttribute("autoplay", "autoplay")
             else 
                oVideo.removeAttribute("autoplay");
            oVideo.load();
        }
        return (oVideo.getAttribute('autoplay')!= null);

    }

    function Element_videoControls(value, isSet) {
        oVideo = document.getElementById(IDControl);
        if (isSet == 1) {
            if (value == 'true')
                oVideo.setAttribute("controls", "controls")
            else
                oVideo.removeAttribute("controls");
            oVideo.load();
        }
        return (oVideo.getAttribute('controls') != null);

    }

    function Element_videoLoop(value, isSet) {
        oVideo = document.getElementById(IDControl);
        if (isSet == 1) {
            if (value == 'true')
                oVideo.setAttribute("loop", "loop")
            else
                oVideo.removeAttribute("loop");
            oVideo.load();
        }
        return (oVideo.getAttribute('loop') != null);

    }

    function Element_Low(value, isSet) {
        var oLow = document.getElementById(IDControl);
        if (isSet == 1) {
            oLow.setAttribute('low',value);
        }
        return oLow.getAttribute('low');
    }

    function Element_High(value, isSet) {
        var oHigh = document.getElementById(IDControl);
        if (isSet == 1) {
            oHigh.setAttribute('high', value);
        }
        return oHigh.getAttribute('high');
    }

    function Element_Max(value, isSet) {
        var oMax = document.getElementById(IDControl);
        if (isSet == 1) {
            oMax.setAttribute('max', value);
        }
        return oMax.getAttribute('max');
    }

    function Element_Min(value, isSet) {
        var oMin = document.getElementById(IDControl);
        if (isSet == 1) {
            oMin.setAttribute('min', value);
        }
        return oMin.getAttribute('min'); 
    }

    function Element_optimum(value, isSet) {
        var oOptimum = document.getElementById(IDControl);
        if (isSet == 1) {
            oOptimum.setAttribute('optimum', value);
        }
        return oOptimum.getAttribute('optimum');
    }

    function Element_cmdtype(value, isSet) {
        var oOptimum = document.getElementById(IDControl);
        if (isSet == 1) {
            oOptimum.setAttribute('optimum', value);
        }
        return oOptimum.getAttribute('optimum');
    }

    function Element_open(value, isSet) {
        oOpen = document.getElementById(IDControl);
        if (isSet == 1) {
            if (value == 'true')
                oOpen.setAttribute("open", "open")
            else
                oOpen.removeAttribute("open");
        }
        return (oOpen.getAttribute('open') != null);

    }
    function Element_preload(value, isSet) {
        oPreload = document.getElementById(IDControl);
        if (isSet == 1) {
            oPreload.setAttribute('preload',value);
        }
        return oPreload.getAttribute('preload');

    }
    function Element_for(value, isSet) {
        oFor = document.getElementById(IDControl);
        return oFor.getAttribute('for');
    }
    function Element_datetime(value, isSet) {
        oDateTime = document.getElementById(IDControl);
        if (isSet == 1) {
            oDateTime.setAttribute('datetime', value);
        }        
        return oDateTime.getAttribute('datetime');
    }
    function Element_PubDate(value, isSet) {
        oPubDate = document.getElementById(IDControl);
        if (isSet == 1) {
            if (value == 'true')
                oPubDate.setAttribute("pubdate", "pubdate")
            else
                oPubDate.removeAttribute("pubdate");
        }
        return (oPubDate.getAttribute('pubdate') != null);

    }

    function Element_step(value, isSet) {
        oStep = document.getElementById(IDControl);
        if (isSet == 1) {
            oStep.setAttribute('step', value);
        }
        return oStep.getAttribute('step');
    }

    function Element_autocomplete(value, isSet) {
        oAutoComplete = document.getElementById(IDControl);
        if (isSet == 1) {
            if (value == "off")
                oAutoComplete.setAttribute('autocomplete', 'off');
            else
                oAutoComplete.setAttribute('autocomplete', 'on');
        }
        return oAutoComplete.getAttribute('autocomplete');
    }

    function Element_placeholder(value, isSet) {
        oAutoComplete = document.getElementById(IDControl);
        if (isSet == 1) {
            oAutoComplete.setAttribute('placeholder', value);
        }
        return oAutoComplete.getAttribute('placeholder');
    }

    function Element_required(value, isSet) {

        if (value.toLowerCase() == "true")
            document.getElementById(IDControl).required = true;
        else {
            document.getElementById(IDControl).required = false;
        }
        return document.getElementById(IDControl).required;
    }
   
    function Element_Data(value, isSet)
    {
        oAutoComplete = document.getElementById(IDControl);
        if (isSet == 1) {
            oAutoComplete.setAttribute('data', value);
        }
        return oAutoComplete.getAttribute('data');
    }
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
	            else if (ID == "object") {
	                if (oAttributes.name == "data")
	                    val = Element_Data("", 0)
	            }
	            else if (ID == "file") {
	                if (oAttributes.name == "size")
	                    val = Element_Size("", 0)
	                else if (oAttributes.name == "maxLength")
	                    val = Element_maxLength("", 0);
	                else if (oAttributes.name == "required")
	                    val = Element_required("", 0)
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
	            else if (ID == "text" || ID == "search" || ID == "email" || ID == "url" || ID == "color" || ID == "password" || checkITemExistinArray(ctrlHTMLInput, ID)) {
	                if (oAttributes.name == "maxLength")
	                    val = Element_maxLength("", 0);
	                else if (oAttributes.name == "autocomplete")
	                    val = Element_autocomplete("", 0)
	                else if (oAttributes.name == "placeholder")
	                    val = Element_placeholder("", 0)
	                else if (oAttributes.name == "required")
	                    val = Element_required("", 0)
	                else if (oAttributes.name == "size")
	                    val = Element_Size("", 0)
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
                     if (oAttributes.name == "Caption")
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
	             else if (ID == "video"|| ID == "audio") {
	                 if (oAttributes.name == "mediasrc")
	                     val = Element_videoSrc("", 0)
	                 else if (oAttributes.name == "controls")
	                     val = Element_videoControls("", 0)
	                 else if (oAttributes.name == "loop")
	                     val = Element_videoLoop("", 0)
	                 else if (oAttributes.name == "preload")
	                     val = Element_preload("", 0)
	                 else if (oAttributes.name == "autoplay")
	                     val = Element_videoAutoplay("", 0);
	             }
	             else if (ID == "meter") {
	                 if (oAttributes.name == "low")
	                     val = Element_Low("", 0)
	                 else if (oAttributes.name == "high")
	                     val = Element_High("", 0)
	                 else if (oAttributes.name == "max")
	                     val = Element_Max("", 0)
	                 else if (oAttributes.name == "min")
	                     val = Element_Min("", 0)
	                 else if (oAttributes.name == "optimum")
	                     val = Element_optimum("", 0);
	             }
	             else if (ID == "progress") {
	                 if (oAttributes.name == "max")
	                     val = Element_Max("", 0);
	             }
	             else if (ID == "source") {
	                 if (oAttributes.name == "src")
	                     val = Element_Src("", 0)
	             }
	             else if (ID == "embed") {
	                 if (oAttributes.name == "src")
	                     val = Element_Src("", 0)
	             }
	             else if (ID == "bdi") {
	                 if (oAttributes.name == "dir")
	                     val = Element_dir("", 0)
	             }
	             else if (ID == "details") {
	                 if (oAttributes.name == "open")
	                     val = Element_open("", 0)
	             }
	             else if (ID == "output") {
	                 if (oAttributes.name == "for")
	                     val = Element_for("", 0)
	             }
	             else if (ID == "timetag") {
	                 if (oAttributes.name == "datetime") 
	                     val = Element_datetime("", 0)	                 
	             }
	             else if (ID == "number" || ID == "range") {
	                 if (oAttributes.name == "max")
	                     val = Element_Max("", 0)
	                 else if (oAttributes.name == "min")
	                     val = Element_Min("", 0)
	                 else if (oAttributes.name == "step")
	                     val = Element_step("", 0);
	                 else if (oAttributes.name == "required")
	                     val = Element_required("", 0)
	                 else if (oAttributes.name == "autocomplete")
	                     val = Element_autocomplete("", 0)
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
	    else if (name == "mediasrc")
	        ret = Element_videoSrc(val, 1)
	    else if (name == "autoplay")
	        ret = Element_videoAutoplay(val, 1)
	    else if (name == "controls")
	        ret = Element_videoControls(val, 1)
	    else if (name == "loop")
	        ret = Element_videoLoop(val, 1)
	    else if (name == "preload")
	        ret = Element_preload(val, 1)
	    else if (name == "Caption")
	        ret = Element_Caption(val, 1)
	    else if (name == "Footer")
	        ret = Element_Footer(val, 1)
	    else if (name == "low")
	        ret = Element_Low(val, 1)
	    else if (name == "high")
	        ret = Element_High(val, 1)
	    else if (name == "min")
	        ret = Element_Min(val, 1)
	    else if (name == "max")
	        ret = Element_Max(val, 1)
	    else if (name == "dir")
	        ret = Element_dir(val, 1)
	    else if (name == "open")
	        ret = Element_open(val, 1)
	    else if (name == "datetime")
	        ret = Element_datetime(val, 1)
	    else if (name == "pubdate")
	        ret = Element_PubDate(val, 1)
	    else if (name == "step")
	        ret = Element_step(val, 1)
	    else if (name == "optimum")
	        ret = Element_optimum(val, 1);
	    else if (name == "alt")
	        ret = Element_alt(val, 1);
	    else if (name == "autocomplete")
	        ret = Element_autocomplete(val, 1);
	    else if (name == "placeholder")
	        ret = Element_placeholder(val, 1);
	    else if (name == "required")
	        ret = Element_required(val, 1);
	    else if (name == "data")
	        ret = Element_Data(val, 1);
	    return ret;
	}
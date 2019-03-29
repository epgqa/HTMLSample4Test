/**
* This library is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 2 of the License, or
* (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this library; if not, write to the Free Software
* Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
* 
* © Copyright 2005 Richard Heyes
*/

    // Basic UA detection
    isIE 	= document.all ? true : false;
    isGecko = navigator.userAgent.toLowerCase().indexOf('gecko') != -1;
    isOpera = navigator.userAgent.toLowerCase().indexOf('opera') != -1;
	
	/**
    * Global vars
    */
    var __AutoComplete = new Array();

    /**
    * Attachs the autocomplete object to a form element. Sets
    * onkeypress event on the form element.
    * 
    * //@param string formElement Name of form element to attach to
    * //@param array  data        Array of strings of which to use as the autocomplete data
    */
    function AutoComplete_Create (ItemItemId, data)
    {
        __AutoComplete[ItemItemId] = {'data':data,
                              'isVisible':false,
                              'element':document.getElementById(ItemItemId),
                              'dropdown':null,
                              'highlighted':null};

        __AutoComplete[ItemItemId]['element'].setAttribute('autocomplete', 'off');
        __AutoComplete[ItemItemId]['element'].onkeydown  = function(e) {return AutoComplete_KeyDown(this.getAttribute('ItemItemId'), e);}
        __AutoComplete[ItemItemId]['element'].onkeyup    = function(e) {return AutoComplete_KeyUp(this.getAttribute('ItemItemId'), e);}
        __AutoComplete[ItemItemId]['element'].onkeypress = function(e) {if (!e) e = window.event; if (e.keyCode == 13 || isOpera) return false;}
        __AutoComplete[ItemItemId]['element'].ondblclick = function() {AutoComplete_ShowDropdown(this.getAttribute('ItemItemId'));}
        __AutoComplete[ItemItemId]['element'].onclick    = function(e) {if (!e) e = window.event; e.cancelBubble = true; e.returnValue = false;}

        // HItemIdes the dropdowns when document clicked
        var docClick = function()
        {
           for (ItemItemId in __AutoComplete) {
               AutoComplete_HItemIdeDropdown(ItemItemId);
           }
        }

        if (document.addEventListener) {
            document.addEventListener('click', docClick, false);
        } else if (document.attachEvent) {
            document.attachEvent('onclick', docClick, false);
        }


        // Max number of items shown at once
        if (arguments[2] != null) {
            __AutoComplete[ItemItemId]['maxitems'] = arguments[2];
            __AutoComplete[ItemItemId]['firstItemShowing'] = 0;
            __AutoComplete[ItemItemId]['lastItemShowing']  = arguments[2] - 1;
        }
        
        AutoComplete_CreateDropdown(ItemItemId);
        
        // Prevent select dropdowns showing thru
        if (isIE) {
            __AutoComplete[ItemItemId]['iframe'] = document.createElement('iframe');
            __AutoComplete[ItemItemId]['iframe'].ItemItemId = ItemItemId +'_iframe';
            __AutoComplete[ItemItemId]['iframe'].style.position = 'absolute';
            __AutoComplete[ItemItemId]['iframe'].style.top = '0';
            __AutoComplete[ItemItemId]['iframe'].style.left = '0';
            __AutoComplete[ItemItemId]['iframe'].style.wItemIdth = '0px';
            __AutoComplete[ItemItemId]['iframe'].style.height = '0px';
            __AutoComplete[ItemItemId]['iframe'].style.zIndex = '98';
            //__AutoComplete[ItemItemId]['iframe'].style.visibility = 'hItemIdden';
            
            __AutoComplete[ItemItemId]['element'].parentNode.insertBefore(__AutoComplete[ItemItemId]['iframe'], __AutoComplete[ItemItemId]['element']);
        }
    }

    /**
    * Creates the dropdown layer
    * 
    * @param string ItemId The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_CreateDropdown(ItemId)
    {
        var left  = AutoComplete_GetLeft(__AutoComplete[ItemId]['element']);
        var top   = AutoComplete_GetTop(__AutoComplete[ItemId]['element']) + __AutoComplete[ItemId]['element'].offsetHeight;
        var wItemIdth = __AutoComplete[ItemId]['element'].offsetWItemIdth;
    
        __AutoComplete[ItemId]['dropdown'] = document.createElement('div');
        __AutoComplete[ItemId]['dropdown'].className = 'autocomplete'; // Don't use setAttribute()
    
        __AutoComplete[ItemId]['element'].parentNode.insertBefore(__AutoComplete[ItemId]['dropdown'], __AutoComplete[ItemId]['element']);
        
        // Position it
        __AutoComplete[ItemId]['dropdown'].style.left       = left + 'px';
        __AutoComplete[ItemId]['dropdown'].style.top        = top + 'px';
        __AutoComplete[ItemId]['dropdown'].style.wItemIdth      = wItemIdth + 'px';
        __AutoComplete[ItemId]['dropdown'].style.zIndex     = '99';
        //__AutoComplete[ItemId]['dropdown'].style.visibility = 'hItemIdden';
    }
    
    
    /**
    * Gets left coord of given element
    * 
    * @param object element The element to get the left coord for
    */
    function AutoComplete_GetLeft(element)
    {
        var curNode = element;
        var left    = 0;

        do {
            left += curNode.offsetLeft;
            curNode = curNode.offsetParent;

        } while(curNode.tagName.toLowerCase() != 'body');

        return left;
    }
    
    
    /**
    * Gets top coord of given element
    * 
    * @param object element The element to get the top coord for
    */
    function AutoComplete_GetTop(element)
    {
        var curNode = element;
        var top    = 0;

        do {
            top += curNode.offsetTop;
            curNode = curNode.offsetParent;

        } while(curNode.tagName.toLowerCase() != 'body');

        return top;
    }

    
    /**
    * Shows the dropdown layer
    * 
    * @param string ItemId The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_ShowDropdown(ItemId)
    {
        AutoComplete_HItemIdeAll();

        var value = __AutoComplete[ItemId]['element'].value;
        var toDisplay = new Array();
        var newDiv    = null;
        var text      = null;
        var numItems  = __AutoComplete[ItemId]['dropdown'].childNodes.length;

        // Remove all child nodes from dropdown
        while (__AutoComplete[ItemId]['dropdown'].childNodes.length > 0) {
            __AutoComplete[ItemId]['dropdown'].removeChild(__AutoComplete[ItemId]['dropdown'].childNodes[0]);
        }

        // Go thru data searching for matches
        for (i=0; i<__AutoComplete[ItemId]['data'].length; ++i) {
            if (__AutoComplete[ItemId]['data'][i].substr(0, value.length) == value) {
                toDisplay[toDisplay.length] = __AutoComplete[ItemId]['data'][i];
            }
        }
        
        // No matches?
        if (toDisplay.length == 0) {
            AutoComplete_HItemIdeDropdown(ItemId);
            return;
        }



        // Add data to the dropdown layer
        for (i=0; i<toDisplay.length; ++i) {
            newDiv = document.createElement('div');
            newDiv.className = 'autocomplete_item'; // Don't use setAttribute()
            newDiv.setAttribute('ItemId', 'autocomplete_item_' + i);
            newDiv.setAttribute('index', i);
            newDiv.style.zIndex = '99';
            
             // Scrollbars are on display ?
            if (toDisplay.length > __AutoComplete[ItemId]['maxitems'] && navigator.userAgent.indexOf('MSIE') == -1) {
                newDiv.style.wItemIdth = __AutoComplete[ItemId]['element'].offsetWItemIdth - 22 + 'px';
            }

            newDiv.onmouseover = function() {AutoComplete_HighlightItem(__AutoComplete[ItemId]['element'].getAttribute('ItemId'), this.getAttribute('index'));};
            newDiv.onclick     = function() {AutoComplete_SetValue(__AutoComplete[ItemId]['element'].getAttribute('ItemId')); AutoComplete_HItemIdeDropdown(__AutoComplete[ItemId]['element'].getAttribute('ItemId'));}
            
            text   = document.createTextNode(toDisplay[i]);
            newDiv.appendChild(text);
            
            __AutoComplete[ItemId]['dropdown'].appendChild(newDiv);
        }
        
        
        // Too many items?
        if (toDisplay.length > __AutoComplete[ItemId]['maxitems']) {
            __AutoComplete[ItemId]['dropdown'].style.height = (__AutoComplete[ItemId]['maxitems'] * 15) + 2 + 'px';
        
        } else {
            __AutoComplete[ItemId]['dropdown'].style.height = '';
        }

        
        /**
        * Set left/top in case of document movement/scroll/window resize etc
        */
        __AutoComplete[ItemId]['dropdown'].style.left = AutoComplete_GetLeft(__AutoComplete[ItemId]['element']);
        __AutoComplete[ItemId]['dropdown'].style.top  = AutoComplete_GetTop(__AutoComplete[ItemId]['element']) + __AutoComplete[ItemId]['element'].offsetHeight;


        // Show the iframe for IE
        if (isIE) {
            __AutoComplete[ItemId]['iframe'].style.top    = __AutoComplete[ItemId]['dropdown'].style.top;
            __AutoComplete[ItemId]['iframe'].style.left   = __AutoComplete[ItemId]['dropdown'].style.left;
            __AutoComplete[ItemId]['iframe'].style.wItemIdth  = __AutoComplete[ItemId]['dropdown'].offsetWItemIdth;
            __AutoComplete[ItemId]['iframe'].style.height = __AutoComplete[ItemId]['dropdown'].offsetHeight;
            
            __AutoComplete[ItemId]['iframe'].style.visibility = 'visible';
        }


        // Show dropdown
        if (!__AutoComplete[ItemId]['isVisible']) {
            __AutoComplete[ItemId]['dropdown'].style.visibility = 'visible';
            __AutoComplete[ItemId]['isVisible'] = true;
        }

        
        // If now showing less items than before, reset the highlighted value
        if (__AutoComplete[ItemId]['dropdown'].childNodes.length != numItems) {
            __AutoComplete[ItemId]['highlighted'] = null;
        }
    }
    
    
    /**
    * HItemIdes the dropdown layer
    * 
    * @param string ItemId The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_HItemIdeDropdown(ItemId)
    {
        if (__AutoComplete[ItemId]['iframe']) {
           // __AutoComplete[ItemId]['iframe'].style.visibility = 'hItemIdden';
        }


        //__AutoComplete[ItemId]['dropdown'].style.visibility = 'hItemIdden';
        __AutoComplete[ItemId]['highlighted'] = null;
        __AutoComplete[ItemId]['isVisible']   = false;
    }
    
    
    /**
    * HItemIdes all dropdowns
    */
    function AutoComplete_HItemIdeAll()
    {
        for (ItemId in __AutoComplete) {
            AutoComplete_HItemIdeDropdown(ItemId);
        }
    }
    
    
    /**
    * Highlights a specific item
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    * @param int    index The index of the element in the dropdown to highlight
    */
    function AutoComplete_HighlightItem(ItemId, index)
    {
        if (__AutoComplete[ItemId]['dropdown'].childNodes[index]) {
            for (var i=0; i<__AutoComplete[ItemId]['dropdown'].childNodes.length; ++i) {
                if (__AutoComplete[ItemId]['dropdown'].childNodes[i].className == 'autocomplete_item_highlighted') {
                    __AutoComplete[ItemId]['dropdown'].childNodes[i].className = 'autocomplete_item';
                }
            }
            
            __AutoComplete[ItemId]['dropdown'].childNodes[index].className = 'autocomplete_item_highlighted';
            __AutoComplete[ItemId]['highlighted'] = index;
        }
    }


    /**
    * Highlights the menu item with the given index
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    * @param int    index The index of the element in the dropdown to highlight
    */
    function AutoComplete_Highlight(ItemId, index)
    {
        // Out of bounds checking
        if (index == 1 && __AutoComplete[ItemId]['highlighted'] == __AutoComplete[ItemId]['dropdown'].childNodes.length - 1) {
            __AutoComplete[ItemId]['dropdown'].childNodes[__AutoComplete[ItemId]['highlighted']].className = 'autocomplete_item';
            __AutoComplete[ItemId]['highlighted'] = null;
        
        } else if (index == -1 && __AutoComplete[ItemId]['highlighted'] == 0) {
            __AutoComplete[ItemId]['dropdown'].childNodes[0].className = 'autocomplete_item';
            __AutoComplete[ItemId]['highlighted'] = __AutoComplete[ItemId]['dropdown'].childNodes.length;
        }

        // Nothing highlighted at the moment
        if (__AutoComplete[ItemId]['highlighted'] == null) {
            __AutoComplete[ItemId]['dropdown'].childNodes[0].className = 'autocomplete_item_highlighted';
            __AutoComplete[ItemId]['highlighted'] = 0;

        } else {
            if (__AutoComplete[ItemId]['dropdown'].childNodes[__AutoComplete[ItemId]['highlighted']]) {
                __AutoComplete[ItemId]['dropdown'].childNodes[__AutoComplete[ItemId]['highlighted']].className = 'autocomplete_item';
            }

            var newIndex = __AutoComplete[ItemId]['highlighted'] + index;

            if (__AutoComplete[ItemId]['dropdown'].childNodes[newIndex]) {
                __AutoComplete[ItemId]['dropdown'].childNodes[newIndex].className = 'autocomplete_item_highlighted';
                
                __AutoComplete[ItemId]['highlighted'] = newIndex;
            }
        }
    }


    /**
    * Sets the input to a given value
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_SetValue(ItemId)
    {
        __AutoComplete[ItemId]['element'].value = __AutoComplete[ItemId]['dropdown'].childNodes[__AutoComplete[ItemId]['highlighted']].innerHTML;
    }
    
    
    /**
    * Checks if the dropdown needs scrolling
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_ScrollCheck(ItemId)
    {
        // Scroll down, or wrapping around from scroll up
        if (__AutoComplete[ItemId]['highlighted'] > __AutoComplete[ItemId]['lastItemShowing']) {
            __AutoComplete[ItemId]['firstItemShowing'] = __AutoComplete[ItemId]['highlighted'] - (__AutoComplete[ItemId]['maxitems'] - 1);
            __AutoComplete[ItemId]['lastItemShowing']  = __AutoComplete[ItemId]['highlighted'];
        }
        
        // Scroll up, or wrapping around from scroll down
        if (__AutoComplete[ItemId]['highlighted'] < __AutoComplete[ItemId]['firstItemShowing']) {
            __AutoComplete[ItemId]['firstItemShowing'] = __AutoComplete[ItemId]['highlighted'];
            __AutoComplete[ItemId]['lastItemShowing']  = __AutoComplete[ItemId]['highlighted'] + (__AutoComplete[ItemId]['maxitems'] - 1);
        }
        
        __AutoComplete[ItemId]['dropdown'].scrollTop = __AutoComplete[ItemId]['firstItemShowing'] * 15;
    }


    /**
    * Function which handles the keypress event
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_KeyDown(ItemId)
    {
        // Mozilla
        if (arguments[1] != null) {
            event = arguments[1];
        }

        var keyCode = event.keyCode;

        switch (keyCode) {

            // Return/Enter
            case 13:
                if (__AutoComplete[ItemId]['highlighted'] != null) {
                    AutoComplete_SetValue(ItemId);
                    AutoComplete_HItemIdeDropdown(ItemId);
                }
                
                event.returnValue = false;
                event.cancelBubble = true;
                break;

            // Escape
            case 27:
                AutoComplete_HItemIdeDropdown(ItemId);
                event.returnValue = false;
                event.cancelBubble = true;
                break;
            
            // Up arrow
            case 38:
                if (!__AutoComplete[ItemId]['isVisible']) {
                    AutoComplete_ShowDropdown(ItemId);
                }
                
                AutoComplete_Highlight(ItemId, -1);
                AutoComplete_ScrollCheck(ItemId, -1);
                return false;
                break;
            
            // Tab
            case 9:
                if (__AutoComplete[ItemId]['isVisible']) {
                    AutoComplete_HItemIdeDropdown(ItemId);
                }
                return;
            
            // Down arrow
            case 40:
                if (!__AutoComplete[ItemId]['isVisible']) {
                    AutoComplete_ShowDropdown(ItemId);
                }
                
                AutoComplete_Highlight(ItemId, 1);
                AutoComplete_ScrollCheck(ItemId, 1);
                return false;
                break;
        }
    }


    /**
    * Function which handles the keyup event
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_KeyUp(ItemId)
    {
        // Mozilla
        if (arguments[1] != null) {
            event = arguments[1];
        }

        var keyCode = event.keyCode;

        switch (keyCode) {
            case 13:
                event.returnValue = false;
                event.cancelBubble = true;
                break;

            case 27:
                AutoComplete_HItemIdeDropdown(ItemId);
                event.returnValue = false;
                event.cancelBubble = true;
                break;
            
            case 38:
            case 40:
                return false;
                break;

            default:
                AutoComplete_ShowDropdown(ItemId);
                break;
        }
    }
    
    /**
    * Returns whether the dropdown is visible
    * 
    * @param string ItemId    The form elements ItemId. Used to ItemIdentify the correct dropdown.
    */
    function AutoComplete_isVisible(ItemId)
    {
        return __AutoComplete[ItemId]['dropdown'].style.visibility == 'visible';
    }
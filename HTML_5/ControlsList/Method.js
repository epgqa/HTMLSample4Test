// Create Event

function createEvent() {
    var oElement = document.getElementById(IDControl);

    oElement.setAttribute('onclick', 'DisplayComment(\'Single click control test\');');
    oElement.setAttribute('ondblclick', 'DisplayComment(\'Double click control test\');');
    oElement.setAttribute('oncontextmenu', 'DisplayComment(\'Right click control test\');');    
}

function asignEventMouseOver()
{
    var oElement = document.getElementById(IDControl);
    oElement.setAttribute('onmouseover', 'DisplayComment(\'Mouse over control test\');');
}

function element_mouseover()
{
    if (_willElementFireEvent)
        DisplayComment('Mouse over control test');
}
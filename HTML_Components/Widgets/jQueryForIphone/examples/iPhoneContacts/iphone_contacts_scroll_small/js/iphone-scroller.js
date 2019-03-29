$(document).ready(function()
{
	
	// First time, the indicator needs a character
	$("#nav-indicator-fixed").append("A");
	
	// Fading out the search bar
	$("#iphone-search").fadeTo(1, 0.85);
	
	// Append background when search bar is hovered
	$("#iphone-search").hover(function()
	{
		$("#iphone-search").addClass("searchbg");
	},function()
	{
		$("#iphone-search").removeClass("searchbg");
	});
	
	// When scrolling, this function checks if the indicator needs to be changed
	var curb = $("#nav-b").position().top;
	var curc = $("#nav-c").position().top;
	var curd = $("#nav-d").position().top;
	var cure = $("#nav-e").position().top;
	var curf = $("#nav-f").position().top;
	var curg = $("#nav-g").position().top;
	var curi = $("#nav-i").position().top;
	$("#iphone-scrollcontainer").scroll(function()
	{
		if($("#nav-a").position().top < 20 && $("#nav-a").position().top > -20)
			$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">A</div>");
		
		if($("#nav-b").position().top < 20 && $("#nav-b").position().top > -20)
		{
			if(curb < $("#nav-b").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">A</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">B</div>");
			curb = $("#nav-b").position().top;
		}
		if($("#nav-c").position().top < 20 && $("#nav-c").position().top > -20)
		{
			if(curc < $("#nav-c").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">B</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">C</div>");
			curc = $("#nav-c").position().top;
		}
		if($("#nav-d").position().top < 20 && $("#nav-d").position().top > -20)
		{
			if(curd < $("#nav-d").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">C</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">D</div>");
			curd = $("#nav-d").position().top;
		}
		if($("#nav-e").position().top < 20 && $("#nav-e").position().top > -20)
		{
			if(cure < $("#nav-e").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">D</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">E</div>");
			cure = $("#nav-e").position().top;
		}
		if($("#nav-f").position().top < 20 && $("#nav-f").position().top > -20)
		{
			if(curf < $("#nav-f").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">E</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">F</div>");
			curf = $("#nav-f").position().top;
		}
		if($("#nav-g").position().top < 20 && $("#nav-g").position().top > -20)
		{
			if(curg < $("#nav-g").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">F</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">G</div>");
			curg = $("#nav-g").position().top;
		}
		if($("#nav-i").position().top < 20 && $("#nav-i").position().top > -20)
		{
			if(curi < $("#nav-i").position().top)
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">G</div>");
			else
				$("#nav-indicator-fixed").replaceWith("<div id=\"nav-indicator-fixed\">I</div>");
			curi = $("#nav-i").position().top;
		}
		
		// Fade the indicator, staying CSS2.1 valid
		$("#nav-indicator-fixed").fadeTo(1, 0.85);
	});
});
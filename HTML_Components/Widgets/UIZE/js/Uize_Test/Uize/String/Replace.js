/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Test.Uize.String.Replace.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.String.Replace',builder:function(){'use strict';return Uize.Test.declare({title:'Test for Uize.String.Replace Module',test:[Uize.Test.requiredModulesTest('Uize.String.Replace'),Uize.Test.staticMethodsTest([['Uize.String.Replace.replaceByLookup',[['',['hello, the dog jumped over the foo. bar bar cat sheep, hello any wool. yes dog, yes dog, three bags there.',{foo:'bar',hello:'there',dog:'cat'}],'there, the cat jumped over the bar. bar bar cat sheep, there any wool. yes cat, yes cat, three bags there.'],['',['<script type="text/javascript">&amp;</script>',{'<':'&lt;','>':'&gt;','"':'&quot;','&':'&amp;'}],'&lt;script type=&quot;text/javascript&quot;&gt;&amp;amp;&lt;/script&gt;'],['',['<script type="text/javascript">cat &amp; dog</script>',{'<':'&lt;','>':'&gt;','"':'&quot;','&':'&amp;',cat:'feline',dog:'canine'}],'&lt;script type=&quot;text/javascript&quot;&gt;feline &amp;amp; canine&lt;/script&gt;']]],['Uize.String.Replace.replacerByLookup',[]]])]});}});
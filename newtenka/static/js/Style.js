var loadCSS = function(title,URL)
{document.write('<link href="' + URL + '" rel="stylesheet" type="text/css" title="'+title+'" />');};
function loadCss(){var css=csslist[0];var cookie = parseInt(readCookie(styleStr));if(cookie){if(!isNaN (cookie))css=csslist[cookie];};loadCSS(css[0],css[1]);};
loadCss();function setActiveStyleSheet(_index){if(isNaN(_index))_index="0";var i, a,head = document.getElementsByTagName("head")[0],s=document.createElement("link");s.rel="stylesheet";s.type="text/css";s.title=csslist[parseInt(_index)][0];s.href=csslist[parseInt(_index)][1];	s.disabled = true;head.appendChild(s);s.disabled = false;	createCookie(styleStr,_index,365);for(i=0; (a = head.getElementsByTagName("link")[i]); i++){if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {a.disabled = true;	break;};};};
function loadWidth()
{
		var cookie = parseInt(readCookie(styleStr+"width"))
		if(cookie){
			if(!isNaN (cookie))
			{
				document.write('<style type="text/css">#header,.notice,.copyright,.nav_top,.tableborder1,.itableborder,.spaceline,.b,.post_div,.post_iframe ,.tableborder2,.tableborder3,.tableborder4,.tableborder4,.tableborder6,.main,.mainbar,.mainbar0,.mainbar1,.mainbar2,.mainbar3,.mainbar4,.bar1,div.th,.list,.postlary1,.postlary2,.postbottom1,.postbottom2{width :'+ cookie +'px};</style>')	
			}
		}
}
loadWidth();
function loadStyle(t) {
	var cookie = parseInt(readCookie(styleStr));
	var styleList = csslist;
	var styleString;
	try
	{
		if (styleList.length > 1){
		
				styleString = '<select name="style" onchange="setActiveStyleSheet(this.options[selectedIndex].value);">';
				styleString += '<option value="0">-- CSS皮肤 --</option>';
				for (var i=0; i<styleList.length ;i++ ){
					styleString += '<option value="'+i+'" '+ (cookie == i?"selected":"")+ '>-- '+styleList[i][0]+' --</option>';
				}
				styleString += '</select>';
			document.write(styleString);
		
		}
		}catch (e){}
}
function reSize(_value)
{
		var stylemsg=document.getElementById("stylemsg");
		var ivalue = parseInt(_value)
		if(isNaN(ivalue))
		{
			stylemsg.innerHTML="设置的宽度必须是数字";
		}
		else
		{
			if(ivalue <900)
			{
				stylemsg.innerHTML="设置的宽度必须大于900像素";
			}
			else
			{
				if(ivalue >5000)
				{
					stylemsg.innerHTML="设置的宽度不可以大于5000像素";
				}
				else
				{
					createCookie(styleStr+"width",ivalue,365)
					location.reload();
				}
			}
		}
}
function getWidth()
{
		var cookie = parseInt(readCookie(styleStr+"width"))
		if(cookie){
			if(!isNaN (cookie))
			{
					document.getElementById("stylewidth").value=cookie;
			}
		}
}
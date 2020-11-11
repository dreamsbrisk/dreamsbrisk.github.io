/*//////////////////////////////////////////////////////////////////
* Script For DvSpace Program
* Copyright (C) 2001 - 2008 Artworld.cn
*
* For further information visit:
* 		http://Artworld.cn/
* 		http://www.artistsky.net/
*
* Builder: Sunwin
* Created: 2007-5-14
/*//////////////////////////////////////////////////////////////////

function sel_type(obj){
	document.getElementById('atype_1').style.display='none';
	document.getElementById('atype_2').style.display='none';
	var sel  = document.getElementById('atype_'+obj.value);
	if (sel){
		sel.style.display = 'block';
	}
	
	//document.Appraise.atype_1.style.display= obj.checked ? 'block','none';
}
function PKForm(postid,rootid,getcode){
	document.Appraise.topicid.value = rootid;
	document.Appraise.announceid.value = postid;
	document.getElementById('agetcode').src = getcode+'?t='+Math.random();
	document.getElementById('GetCodeErr').innerHTML = '';
	document.Appraise.atitle.value = '';
	document.Appraise.acontent.value = '';
	
	ShadeDiv.Show('TopicAppraise','600','400');
}

function PkFormClose(getcode)
{
	ShadeDiv.Close();
	if (document.getElementById('pgetcode')){document.getElementById('pgetcode').src=getcode+'?t='+Math.random();}
	
}

function submit_form(formobject){
	//<iframe style="border:0px;width:400px;height:100px;" src="" name="hiddenframe"></iframe>
	if(formobject.acontent.value==''){
		document.getElementById('aContentStr').innerHTML='<font color=\"red\">*请填写观点内容或选择观点。</font>';
		formobject.acontent.focus();
		return false;		
	}
	return true;
}

function outputHTML(id){
	var pobj= parent.document.getElementById(id);
	if (pobj){
		pobj.innerHTML = document.getElementById(id).innerHTML;
	}
}
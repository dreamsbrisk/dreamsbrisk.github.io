function NewsSpanBar(){
	this.f=1;
	this.event = "click"
	this.titleid = "";
	this.bodyid="";
	this.class_dis = "dis";
	this.class_undis = "undis";
	this.class_hiton = "tab_search_on";
	this.class_hitno = "tab_search";

	var Tags,TagsCnt,len,flag;
	var BClassName;
	this.load=function(){
		if (!document.getElementById(this.titleid)||!document.getElementById(this.bodyid))
		{
			return false;
		}
		flag = this.f;
		BClassName = [this.class_dis,this.class_undis,this.class_hiton,this.class_hitno];
		Tags=document.getElementById(this.titleid).getElementsByTagName('p'); 
		TagsCnt=document.getElementById(this.bodyid).getElementsByTagName('dl'); 
		len=Tags.length;
		for(var i=0;i<len;i++){
			Tags[i].value = i;
			if (this.event!='mouseover'){
				Tags[i].onmouseover=function(){changeNav(this.value)};
			}else{
				Tags[i].onclick=function(){changeNav(this.value)};
			}
			TagsCnt[i].className=BClassName[1];
		}
		Tags[flag].className=BClassName[3];
		TagsCnt[flag].className=BClassName[0];
	}
	function changeNav(v){
		Tags[flag].className=BClassName[2];
		TagsCnt[flag].className=BClassName[1];
		flag=v;
		Tags[v].className=BClassName[3];
		TagsCnt[v].className=BClassName[0];
	}
}

function SpanBarLoad(){
	//Right Circle Switch
	var new1 = new NewsSpanBar();
	new1.f=0;
	new1.titleid = "tabgroup_bot";
	new1.bodyid = "tabgroupbody";
	new1.class_hiton = "tabgroup_on";
	new1.class_hitno = "tabgroup";
	new1.load();

	//Left Topic List Switch
	var new3 = new NewsSpanBar();
	new3.f=0;
	new3.titleid = "topic_bot";
	new3.bodyid = "topicbody";
	new3.class_hiton = "tabgroup_on";
	new3.class_hitno = "tabgroup";
	new3.load();

	//Bottom Link & Online Switch
	var new_link = new NewsSpanBar();
	new_link.f=0;
	new_link.titleid = "bot_link";
	new_link.bodyid = "body_link";
	new_link.class_hiton = "link_on";
	new_link.class_hitno = "link";
	new_link.load();

	//Right Search Switch
	var new2 = new NewsSpanBar();
	new2.f=0;
	new2.event = "move"
	new2.titleid = "search_bot";
	new2.bodyid = "searchbody";
	new2.class_hiton = "tab_search_on";
	new2.class_hitno = "tab_search";
	new2.load();
}
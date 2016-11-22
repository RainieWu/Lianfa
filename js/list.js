// JavaScript Document

function list(){
	var content=document.getElementById("content");
	var lists=content.getElementsByTagName("div");
	var title=content.getElementsByTagName("a");
	var time=content.getElementsByTagName("font");
	
	for(var i=0;i<lists.length;i++){
		lists[i].i=i;
		eventUtil.addEvent(lists[i],'mouseover',function(){
			this.style.borderBottom="1px solid #F1F1F1";
			this.style.marginBottom="9px";
			title[this.i].style.color="#C00000";
			time[this.i].style.color="#C00000";
		});
		eventUtil.addEvent(lists[i],'mouseout',function(){
			this.style.borderBottom="";
			this.style.marginBottom="10px";
			title[this.i].style.color="#000";
			time[this.i].style.color="#000";
		});
	}
}
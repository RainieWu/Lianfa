// JavaScript Document

function getScrollTop(){
	var scrollTop=0;
	if(document.documentElement&&document.documentElement.scrollTop){
		scrollTop=document.documentElement.scrollTop;
	}
	else if(document.body){
		scrollTop=document.body.scrollTop;
	}
	return scrollTop;
}

function showtop(){
	var top=document.getElementById("top");
	var topmenu=document.getElementById("topmenu");
	var topa=topmenu.getElementsByTagName("a");
	var topimg=topmenu.getElementsByTagName("img");
	
	eventUtil.addEvent(window,'scroll',function(){
		if(getScrollTop()>0){
			top.style.display="block";
			animation(top,{opacity:80},5);
		}
		if(getScrollTop()==0){
			top.style.display="none";
			animation(top,{opacity:0},3);
		}
	});
	
	for(var i=0;i<topa.length;i++){
		topa[i].i=i;
		eventUtil.addEvent(topa[i],'mouseover',function(){
			animation(topimg[this.i],{width:20,height:20},5);
		});
		eventUtil.addEvent(topa[i],'mouseout',function(){
			animation(topimg[this.i],{width:24,height:24},5);
		});
	}
}
// JavaScript Document

function showstone(obj){
	//var content=document.getElementById("content");
	var imgs=obj.getElementsByClassName("imgs");
	//var stone=content.getElementsByClassName("stone");
	//var message=content.getElementsByClassName("message");
	//var up=content.getElementsByClassName("up");
	//var down=content.getElementsByClassName("down");
	
	for(var i=0;i<imgs.length;i++){
		imgs[i].i=i;
		eventUtil.addEvent(imgs[i],'mouseover',function(){
			animation(this,{marginTop:12,marginBottom:12,marginLeft:16,marginRight:16,width:288,height:216},3);
			//animation(stone[this.i],{width:300,height:225});
			animation(this.getElementsByTagName("img")[0],{width:288,height:216},3);
			//animation(message[this.i],{width:300,height:53,bottom:53});
			animation(this.getElementsByTagName("div")[0],{width:288,height:48,bottom:48},3);
			//animation(up[this.i],{bottom:100});
			animation(this.getElementsByClassName("up")[0],{bottom:93},3);
			//animation(down[this.i],{bottom:100,opacity:100});
			this.getElementsByClassName("down")[0].style.display="block";
			animation(this.getElementsByClassName("down")[0],{bottom:95,opacity:100},3);
		});
		eventUtil.addEvent(imgs[i],'mouseout',function(){
			animation(this,{marginTop:30,marginBottom:30,marginLeft:40,marginRight:40,width:240,height:180},3);
			//animation(stone[this.i],{width:240,height:180});
			animation(this.getElementsByTagName("img")[0],{width:240,height:180},3);
			//animation(message[this.i],{width:240,height:30,bottom:30});
			animation(this.getElementsByTagName("div")[0],{width:240,height:30,bottom:30},3);
			//animation(up[this.i],{bottom:55});
			animation(this.getElementsByClassName("up")[0],{bottom:57},3);
			//animation(down[this.i],{bottom:50,opacity:0},1);
			animation(this.getElementsByClassName("down")[0],{bottom:50,opacity:0},1);
			this.getElementsByClassName("down")[0].style.display="none";
		});
	}
}
// JavaScript Document

function page(){
	var number=document.getElementById("number");
	var span=number.getElementsByTagName("span");
	
	for(var i=0;i<span.length;i++){
		span[i].i=i+1;
		eventUtil.addEvent(span[i],'mouseover',function(){
			this.style.background="#C00000";
			this.style.color="#FFF";
		});
		eventUtil.addEvent(span[i],'mouseout',function(){
			if(this.className!="active"){
				this.style.background="#FFF";
				this.style.color="#000";
			}
			else{
				this.style.background="#FFF";
				this.style.color="#C00000";
			}
		});
		eventUtil.addEvent(span[i],'click',function(){
			for(var j=0;j<span.length;j++){
				span[j].className="";
				span[j].style.color="#000";
				document.getElementById("page"+span[j].i).style.display="none";
			}
			this.className="active";
			var content=document.getElementById("page"+this.i);
			content.style.display="block";
			showstone(content);
			if(document.documentElement&&document.documentElement.scrollTop) document.documentElement.scrollTop=0;
			else if(document.body) scrollTop=document.body.scrollTop=0;
		});
	}
}
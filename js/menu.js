// JavaScript Document

function menu(){
	var menu=document.getElementById("menu");
	var alist=menu.getElementsByTagName("a");
	var img=menu.getElementsByTagName("img");
		
	for(var i=0;i<alist.length;i++){
		alist[i].i=i;
		eventUtil.addEvent(alist[i],'mouseover',function(){
			this.style.opacity="1";
			this.style.background="#C00000";
			var that=img[this.i];
			animation(img[this.i],{top:30,opacity:0},3,function(){
				that.style.top="-20px";
				animation(that,{top:10,opacity:100},3,function(){
					animation(that,{top:-5},3,function(){
						animation(that,{top:5},5,function(){
							animation(that,{top:-2},5,function(){
								animation(that,{top:0},5);
							})
						});
					});
				});
			});
		});
		eventUtil.addEvent(alist[i],'mouseout',function(){
			if(this.className!="active") this.style.opacity="0.6";
			this.style.background="#FFFFFF";
		});
	}
}
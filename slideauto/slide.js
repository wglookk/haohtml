$(window).resize(function(){
	slideautor($("#simpleone"))	
	return;
});
/////////加载完成运行
$(document).ready(function(){
	slideauto($("#simpleone"))

	return;
});
function slideauto(obj){
//对象赋值
	var linum = obj.find(".admin").find("li").size();
	var liup = 1;
	var objslidecon = obj.find(".objslidecon").width()
	
	obj.find(".admin").width(linum*objslidecon)
	obj.find(".admin").find("li").width(objslidecon)
	obj.find(".guest").find("li").width(objslidecon)
	obj.find(".admin").find("li").css("left",objslidecon*2).hide()
	obj.find(".admin").find("li:eq(0)").css("left",0).show()
	obj.find(".admin").find("li:eq(1)").css("left",objslidecon).show()
	
	var htmllast = obj.find(".admin").find("li:eq(0)").css("left",0).prop("outerHTML")
	obj.find(".guest").html(htmllast)
	//箭头高
	var arrautoh = (obj.height() - obj.find(".objslideconarr").height())/2
	obj.find(".objslideconarr").css("top",arrautoh)

//左箭头
	obj.find(".objslideconarr").find(".lefta").click(function(){	
		var objslidecon = obj.find(".objslidecon").width()
		var objfirst = obj.find(".admin").find("li:eq("+(linum-1)+")").css("left",-objslidecon);
		obj.find(".admin").prepend(objfirst)	
		obj.find(".admin").find("li:eq(0)").show().stop(true).animate({left:0});
		obj.find(".admin").find("li:eq(1)").show().stop(true).animate({left:objslidecon});
		obj.find(".admin").find("li:eq(2)").hide().stop(true).animate({left:objslidecon*2});
		//当前页报数
		if(liup > 1){
		liup = liup - 1;
		}else{
		liup = linum;
		}
		//console.log(liup)
		$("#playpage").html(liup)
		obj.find(".objslidesign").find("span").removeClass("select")
		obj.find(".objslidesign").find("span:eq("+ (liup-1) +")").addClass("select")
	})
//右箭头
	obj.find(".objslideconarr").find(".righta").click(function(){
		var objslidecon = obj.find(".objslidecon").width()
		var htmllast = obj.find(".admin").find("li:eq(0)").css("left",0).prop("outerHTML")
		obj.find(".guest").html(htmllast)		
		obj.find(".admin").find("li:eq(0)").show().stop(true).animate({left:-objslidecon});
		obj.find(".admin").find("li:eq(1)").show().stop(true).animate({left:0});
		obj.find(".admin").find("li:eq(2)").show().stop(true).animate({left:objslidecon});
		obj.find(".guest").find("li:eq(0)").show().stop(true).animate({left:-objslidecon});
		var htmllastadmin = obj.find(".admin").find("li:eq(0)").css("left",objslidecon*2).prop("outerHTML")		
		obj.find(".admin").append(htmllastadmin)
		obj.find(".admin").find("li:eq(0)").remove()
		//当前页报数
		if(liup < linum){
		liup = liup + 1;
		}else{
		liup = 1;
		}
		//console.log(liup)
		$("#playpage").html(liup)
		obj.find(".objslidesign").find("span").removeClass("select")
		obj.find(".objslidesign").find("span:eq("+ (liup-1) +")").addClass("select")
		
	})

//
}


function slideautor(obj){
	var linum = obj.find(".admin").find("li").size();
	var objslidecon = obj.find(".objslidecon").width()
	obj.find(".admin").width(linum*objslidecon)
	obj.find(".admin").find("li").width(objslidecon)
	obj.find(".guest").find("li").width(objslidecon)
	obj.find(".admin").find("li").css("left",objslidecon*2).hide()
	obj.find(".admin").find("li:eq(0)").css("left",0).show()
	obj.find(".admin").find("li:eq(1)").css("left",objslidecon).show()
}
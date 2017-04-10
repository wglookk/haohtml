function autoRoll(id){

var obj = $('#'+ id)
//结构格式化
console.log(obj.html())
var objcontent  = '';
    objcontent += '<div class="rollbox" style="height:' + obj.height() + 'px;' + 'width:' + obj.width() + 'px;">';
    objcontent +=     '<div class="rollcon" style="height:' + obj.height() + 'px;' + 'width:' + parseInt(obj.width()+24) + 'px;">';
    objcontent +=     '<div class="rollconadd" style="width:' + parseInt(obj.width()-20) + 'px;">';
    objcontent +=      obj.html();
    objcontent +=     '</div>';
    objcontent +=     '</div>';
    objcontent +=     '<div class="rollsign" style="height:' + obj.height() + 'px;">';
    objcontent +=     '<div class="rollsignobj"></div>';
    objcontent +=     '</div>';    
    objcontent += '</div>';
obj.html(objcontent)
//

myboxroll(obj.find(".rollcon"),obj.find(".rollconadd"))
signroll(obj.find(".rollcon"),obj.find(".rollconadd"))
mouseroll(obj.find(".rollcon"),obj.find(".rollconadd"),document.getElementById(id))
}
//==============================================
function myboxroll(winbox,wincon){
	var sign_top = winbox.scrollTop()*(winbox.height()/wincon.height())
	winbox.parent().find(".rollsignobj").css("top",sign_top +'px')
	winbox.scroll(function(){
		sign_top = winbox.scrollTop()*(winbox.height()/wincon.height())
		//滚标赋top
		winbox.parent().find(".rollsignobj").css("top",sign_top +'px')
	
	})
}

///////////////////////////////////////////////
//sign滚标函数
function signroll(winbox,wincon){
//
	
	if(wincon.height()<winbox.height()){
		winbox.parent().find(".rollsign").hide()		
	}else{
		winbox.parent().find(".rollsign").show()		
	}
	var sign_h = parseInt(winbox.height()/wincon.height() * winbox.height());
	
	var win_h = winbox.height();
	var rolly

	//var sign_h = $(".myboxcon").height()/$(".mycon").height() * $(".myboxcon").height()
	winbox.parent().find(".rollsign").height(win_h)
	winbox.parent().find(".rollsignobj").height(sign_h)

//
	winbox.parent().find(".rollsign").mousedown(function(ev){
		
		var parenty = ev.pageY;
		
		var objtop = winbox.scrollTop()*(winbox.height()/wincon.height())
		
		
		//
		$(document).mousemove(function(e){

			rolly = e.pageY - parenty + objtop
			if( rolly > 0 && rolly < (win_h-sign_h)){
				winbox.parent().find(".rollsignobj").css("top",rolly)
				winbox.parent().find(".rollcon").scrollTop(rolly*(wincon.height()/winbox.height()))			
			}
			if( rolly < 0){
				winbox.parent().find(".rollsignobj").css("top",0)
				winbox.parent().find(".rollcon").scrollTop(0)
			}
			if(rolly > (win_h-sign_h)){
				winbox.parent().find(".rollsignobj").css("top",win_h-sign_h)
				winbox.parent().find(".rollcon").scrollTop((win_h-sign_h)*(wincon.height()/winbox.height()))			
			}
			
		})
		//
		
	
	})
//
	$("html").mouseup(function(){
	
		$(document).unbind();
		
		
	})
//如果鼠标滑出窗口停止事件
//	$("html").mouseout(function(){
//	
//		$(document).unbind();
//		
//		
//	})
//
}
///////////////////////////////////////////////
var sign_topwheel
function myboxrollwheel(winbox,wincon,num){
	 winbox.scrollTop(winbox.scrollTop()+num)
	 sign_topwheel = winbox.scrollTop()*(winbox.height()/wincon.height())

		//滚标赋top
		winbox.parent().find(".rollsignobj").css("top",sign_topwheel +'px')
	
	
}
//滚轮事件

function mouseroll(winbox,wincon,objroll){

objroll.onmousewheel = function(event){
	event = event || window.event;
	//console.dir(event);	
	//console.log(event.wheelDelta)
//下滚值-120
		if(event.wheelDelta == -120){
		myboxrollwheel(winbox,wincon,20)
		}
//上滚值120
		if(event.wheelDelta == 120){
		myboxrollwheel(winbox,wincon,-20)
		}
	
};

if(navigator.appName == "Microsoft Internet Explorer"){	
//是IE的
	objroll.onmousewheel = function(event){
		event = event || window.event;
		//下滚值3
		if(event.wheelDelta == -120){
		myboxrollwheel(winbox,wincon,20)
		}
		//上滚值-3
		if(event.wheelDelta == 120){
		myboxrollwheel(winbox,wincon,-20)
		}
	};
}else{
	objroll.addEventListener("DOMMouseScroll", function(event) {
		//下滚值3
		if(event.detail == 3){
		myboxrollwheel(winbox,wincon,20)
		}
		//上滚值-3
		if(event.detail == -3){
		myboxrollwheel(winbox,wincon,-20)
		}
	});	

}

}
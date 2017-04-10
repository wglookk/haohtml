//获取浏览器宽、div对象、对象中的值
var all_w = document.documentElement.clientWidth;
var y_div = document.getElementsByTagName("div")
var mytext = [];
var num_i=0;

//加载完成运行
window.onload=function(){
	
for(i=0;i<y_div.length;i++){
	if(y_div[i].getAttribute("youth")=="marquee"){
	marqueeAuto(i)
	}
}

}




//跑马灯
function marqueeAuto(i){

mytext[i] = y_div[i].innerHTML;
y_div[i].innerHTML = "";

addnode(i)
addnode(i)

y_div[i].childNodes[0].style.left = -all_w +"px";

anima(i)

}


//控制对象中的对象动画顺序
function anima(k){

num_i = num_i+1;

y_div[k].childNodes[0].style.left = (num_i-all_w) +"px";
y_div[k].childNodes[1].style.left = num_i +"px";

//当第二个对象等于窗口宽时删除
	if(num_i > all_w || num_i == all_w){
	num_i = 0;
	
	y_div[k].removeChild(y_div[k].childNodes[1]);
	addnode(k);

	}
//速度快慢调整第二个参数
setTimeout("anima("+k+")",50)
}

//生成DOM对象
function addnode(k){

var newItem=document.createElement("div")
var textnode=document.createTextNode(mytext[k])
newItem.appendChild(textnode)
y_div[k].insertBefore(newItem,y_div[k].childNodes[0]);

}


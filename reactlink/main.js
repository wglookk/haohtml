//main.js
//var style = require('./style.css');
// var greeter = require('./Greeter.js');
//document.getElementById('root').appendChild(greeter());


//var pp = new greeter.Greeter()
//pp.say()
import 'whatwg-fetch'
import 'es6-promise'
import React from 'react';
import ReactDOM from 'react-dom';
// import style from 'style-loader!css-loader?modules!./aa.css';
// import './aa.less';
import Hellok from './Hellok';

export class Hello extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: 'ccc',
			color: 'red'
		}
		this.props.name = "yy123"
		this.fncc = this.fncc.bind(this)
		this.loadXMLDoc = this.loadXMLDoc.bind(this)
		this.fetchfn = this.fetchfn.bind(this)
		console.log(this)
	}

	fncc() {
		console.log(this)
		this.setState(prevState => ({
			name: 'vvv',
			color: 'blue'
		}))
		this.props.name = this.state.name
	}



	loadXMLDoc() {
		console.log("1a");
		// var xmlhttp;
		// if (window.XMLHttpRequest)
		//   {// code for IE7+, Firefox, Chrome, Opera, Safari
		//   xmlhttp=new XMLHttpRequest();
		//   }
		// else
		//   {// code for IE6, IE5
		//   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		//   }
		// xmlhttp.onreadystatechange=function()
		//   {
		//   if (xmlhttp.readyState==4 && xmlhttp.status==200)
		//     {
		//     //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		// 		console.log(xmlhttp.responseText)
		//     }
		//   }
		// xmlhttp.open("GET","http://localhost:80/json.php?callbackname=jsonp_callback",true);
		// xmlhttp.send();


		var url = "http://localhost:80/json.php?callbackname=jsonp_callback"; //访问localhost:63342下的jsonp.php
		var scriptTag = document.createElement("script");   //创建一个script标签
		scriptTag.setAttribute("src", url);  //设置script的src属性
		document.body.appendChild(scriptTag);   //将script标签添加到body中

		//回调函数
		var jsonp_callback = function (b) {
			alert(b)
			//console.log(888)
			//document.getElementById("box").innerHTML = resultObj.name+":"+resultObj.sex;
		}

	}

	fetchfn() {
		let url = "http://localhost:80/fetch.php";
		// let urljson = "http://localhost:80/pp.json";

		// fetch(url).then(function(response) {
		// 	return response.json();
		// }).then(function(data) {
		// 	console.log(data);
		// }).catch(function(e) {
		// 	console.log("Oops, error");
		// });

		fetch(url, {
			mode: 'cors',
		}).then(function (res) {
			return res.text()
		}).then(function (data) {
			//console.log(eval("("+data+")").m);
			console.log(JSON.parse(data).m)
		}).catch(function (e) {
			console.log(e);
		});




		// var result = fetch(url, {
		//         credentials: 'include',
		// 				mode: "no-cors",
		//         headers: {
		//             'Accept': 'application/json, text/plain, */*'
		//         }
		//     });

		//     result.then(res => {
		// 			console.log(res)
		//         return res
		//     })


	}



	render() {
		let text = this.state.name
		let yy = this.props.name
		let color = this.state.color
		return <div>
			<h1 style={{ color }}>{text}</h1>
			<h3>{yy}</h3>
			<Hellok name="asd123" />
			<span onClick={this.loadXMLDoc}>wowow</span>
			<br />
			<span onClick={this.fetchfn}>wowow</span>
		</div>
	}

}




ReactDOM.render(<Hello />, document.getElementById('root'));
//module.exports = Hello;

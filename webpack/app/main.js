//main.js

//import './main.css';//使用require导入css文件
//require('./main.css');
/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/
import React, {Component} from 'react'
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';//使用require导入css文件
// 引入 events 模块
import Events from 'events';
// var yy = new Greeter()
class Basics extends Component {
  constructor(props) {
    super(props)
    global.ev = new Events.EventEmitter();
}
render(){
    return (<Greeter />)
}
}
render(<Basics />, document.getElementById('root'));

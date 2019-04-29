// Greeter.js
//import styles from './Greeter.css';//导入
//require('./Greeter.css');

/*
var config = require('./config.json')
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};
*/
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入


import Loadable from 'react-loadable';
import Loading from './my-loading-component';
// import lazyLoad from './lazy.js'
// import ABC from './ABC';
// import ABC from 'bundle-loader?lazy&name=ABC!./ABC';



// let chatChunk = require("bundle-loader!../public/0.js");
// 当你用到这个函数时，这个chunk才会被请求
// var waitForChunk = require("bundle-loader!./file.js");
console.log('---')
// console.log(chatChunk)
//  当请求的chunk加载完成才会执行传入的回调函数，并将请求的模块作为参数传入回调函数
// chatChunk(function(file) {
//     // 接收到懒加载模块，类似于下面代码
//     console.log('9999')
//     console.log(file)
//     // var file = require("./file.js");
// });

const LoadableBar = Loadable({
  loader: () => import('./ABC'),
  loading() {
    return <div>Loading...</div>
  }
});

class Greeter extends Component{
  constructor(){
    super()
    this.state={
      aa:null
    }
    console.log('8787')
  }
  
  componentWillMount(){

    console.log('123')
  }
  
  render() {

    // let {ABC} = this.state;

    return (
          
      <div className={styles.root} onClick={this.kkalert.bind(this)}>
        {config.greetText}  

         <LoadableBar/>
        {          
          //  this.state.aa 
          //  lazyLoad(ABC)
          }
      </div>
    );
  }
  kkalert(){
    // this.setState({
    //   aa:lazyLoad(ABC)
    // })
    console.log("9111111111112")
  }
}

export default Greeter


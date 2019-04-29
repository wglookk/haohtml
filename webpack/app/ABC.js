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
class ABC extends Component{
  constructor(){
    super()
  }
  componentWillMount(){
    console.log('567')
  }
  render() {
    return (
      <div>
        我是ABC 
      </div>
    );
  }

}

export default ABC


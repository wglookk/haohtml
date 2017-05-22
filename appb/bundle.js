/*! 菜鸟教程 webpack 实例 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import yy from './yy'
//require("!style-loader!css-loader!./style.css");
//document.write(require("./runoob2.js"));
class runoob1{

  constructor(word,val){
      //console.log(word)
      this.word = word;
      this.val = val;
      //super(w)
      this.one = this.one.bind(this)
  }
  one(){
    console.log("我是父级")
  }

}

// var me =new runoob1('文','1')
// //console.log(me.one())
// me.one()

module.exports = runoob1;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runoob1_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runoob1_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__runoob1_js__);

class yy extends __WEBPACK_IMPORTED_MODULE_0__runoob1_js___default.a {
  constructor(){
    super("货","3")
    this.two = this.two.bind(this)

    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': '444',
        length: 3
    }
    //var arr1 = [].slice.call(arrayLike);
    this.arr2 = Array.from(arrayLike);
    //console.log(arr2)
  }

  two(e){
    console.log(e)
    this.arr2.push(e)
    console.log(this.arr2)
    // let arrayLike = {
    //     '0': 'a',
    //     '1': 'b',
    //     '2': 'c',
    //     length: 3
    // };
    //return Array.from(this.arrayLike);
  }


}

var objt = new yy()
console.log(objt)
objt.two('真会玩')
//
//
// module.exports = yy;
// module.exports = "It works from runoob2.js";


/***/ })
/******/ ]);
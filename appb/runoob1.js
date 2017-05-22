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

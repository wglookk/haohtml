import runoob1 from './runoob1.js';
class yy extends runoob1 {
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

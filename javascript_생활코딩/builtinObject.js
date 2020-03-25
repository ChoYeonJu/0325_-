// 표준 내장 객체(Standard Built-in Object)
// Object, Function, Array, String, Boolean, Number, Math, Date, RegExp

/*var arr = new Array('seoul','new york', 'ladarkh','pusan','tsukuba');
function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
    
}
console.log(getRandomValueFromArray(arr));
*/

Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york','ladarkh','pusan','Tsukuba')
console.log(arr.rand());

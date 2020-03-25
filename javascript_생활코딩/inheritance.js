// function Person(name){
//     this.name = name;
//     this.introduce = function(){
//         return 'my name is ' + this.name;
//     }
// }

// var p1 = new Person('egoing');
// document.write(p1.introduce()+"<br />");

//결과 my name is egoing

function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'my name is ' + this.name;
}

function Programmer(name){
    this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

function Designer(name){
    this.name  =name;
}

Designer.prototype = new Designer();
Designer.prototype.design = function(){
    return "beautiful!";
}

var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.introduce()+"<br />");

//类型检测 typeof 一般用于值类型检测
console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof "abc"); //string
console.log(typeof null); //object(记住)
console.log(typeof undefined); //undefined
console.log(typeof {name:"Mike",age:20}); //object
console.log(typeof function foo(){}); //function
//输出类型都为function
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
//输出类型为object 因为它们不是function 并且JS中一切都是对象
console.log(typeof Math);
console.log(typeof JSON);

//类型检测 instanceof 
//左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true
//下列所有输出均为true
var a = {name:"Mike",age:20};
console.log(a instanceof Object); 

var b = [12,34,{},""];
console.log(b instanceof Array);
console.log(b instanceof Object);

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);
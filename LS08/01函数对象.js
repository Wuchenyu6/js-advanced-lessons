var a = new Array(5);
console.log(a);//(5) [empty × 5]
var b = new Array("5");
console.log(b);//["5"]




function foo(){}
console.log(foo); //ƒ foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

//思考：用new构造出来的都是一个对象 但Function比较特殊
console.log(typeof new Function());// function
console.log(typeof new Array());	 //object
console.log(typeof new Date());	 //object
//补充：是一个函数对象 是对象
console.log(typeof new Function);//function
console.log(typeof new new Function);//object
console.log(typeof new new new Function);//报错

//补充思考：
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

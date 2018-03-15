//数据类型
var num = 1;
console.log(typeof num); //number
var str = "some string";
console.log(typeof str); //string
var b = true;
console.log(typeof b); //boolean
var n = null;
console.log(typeof n); //object，这是JS语言的特别之处
var u = undefined;
console.log(typeof u); //undefined

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

//不同数据类型之间的判等
var a1 = 2;
var a2 = "2";
console.log(a1==a2);//true
console.log(a1===a2);//false
var b1 = {};
var b2 = {};
console.log(b1==b2);//false
console.log(b1===b2);//false
console.log(b1===b1);//true
var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);//true
console.log(c1===c2);//false

//数字类型
console.log(1===1.0);//true
console.log(Number("xyz"));//NaN
console.log(3/0);//Infinity

//逻辑运算符
console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2" == 2));//false
console.log(false&&false);//false
console.log(2>1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2" == 2));//true
console.log(false||false);//false
//自增运算符
var a = 10;
console.log(++a);//11
var b = 20;
console.log(b++);20

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);//abcdef








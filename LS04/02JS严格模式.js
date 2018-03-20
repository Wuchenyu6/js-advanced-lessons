//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);//大括号外依然能访问到a: 20

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//不报错

if(true){
    var a = 20;
}
console.log(a);//20

// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);//不输出

// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全
// 严格模式使用方式
"use strict"//全局使用
function foo() {
    "use strict"//函数内部使用
}


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123
/////////
function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//报错


//严格模式下禁止删除不可改变的属性的变量
var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);
//{value: "abc", writable: true, enumerable: true, configurable: false}
function  sloppyFunc() {
    str.length = 7;
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    //{value: 3, writable: false, enumerable: false, configurable: false}
    console.log(str.length);
    //3
}
sloppyFunc();
////////
function  strictFunc() {
    'use strict';
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    str.length = 7;
    console.log(str.length);
}
strictFunc();//报错


//这样删除不会报错
delete foo;
delete window.foo;
//严格模式下禁止删除未定义的变量 会报错
'use strict';
delete foo;
delete window.foo;


//非严格模式下正常执行  不会报错
function f(a, a, b) {
    return a+b;
}
f(2,3,4);
//严格模式下禁止函数参数重名
"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错


//严格模式下的arguments，变与不变
function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);//42
console.log(pair[1]);//17
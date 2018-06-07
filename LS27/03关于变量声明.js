// ES6中 let和const 不进行变量提升特性


//var 声明变量
console.log(a);
var a = 1;
console.log(a);
//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);
//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);


//var
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();//undefined

//let
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//Thu Jun 07 2018 08:13:31 GMT+0800 (中国标准时间)

//let 暂时性锁区(块作用域中如果有let声明的变量 则这个变量只能在此作用域中使用)
var temp = new Date();
function f() {
    console.log(temp);//此时temp还未声明 所以输出temp会报错
    //if(false){
        let temp = "Hi!";
    //}
}
f();//报错

// let和const的暂时性死区特性
// 只要块级作用域内存在let，它所声明的变量就“绑定”在这个区域，不再受外部影响
// let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//养成良好习惯，使用变量前声明

typeof b;//报错 ReferenceError 需要使用前定义
let b;//若没有此行，上一行是否会报错？不会。

var tmp = 123;
if(true){
    tmp = "abc";
    let tmp;//思考如果改为var是否会报错，如果let tmp在上一行之前如何？
}


//let const不能重复声明
//let不可以定义重名变量
let abc;
let abc;//报错

function foo1() {
    let x;
    var x;
}
foo1();//报错 重复定义

function foo2() {
    let x;
    let x;
}
foo2();//报错 重复定义

//词法作用域 与调用形式无关 
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack
//代码变式（一）
var name = "Jack";
function echo() {
    console.log(name,age);
}
function foo() {
    var name = "Bill";
    var age = 23;
    echo();
}
foo();//报错    age在全局作用域没有定义
//代码变式（二）
var name = "Jack";
var age;
function echo() {
    console.log(name,age);
}
function foo() {
    var name = "Bill";
    var age = 23;
    echo();
}
foo();//Jack undefined


//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    console.log(x);//outside f1
};
f1();
console.log(x);//outside f1
//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    var x = "inside f1";//如果没有这行，则两次输出都为outside
    console.log(x);//inside f1
};
f1();
console.log(x);//outside f1


//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();
console.log(y);//报错 局部
//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    y = "全局";
    console.log(y);//全局
};
f2();
console.log(y);//全局


//ES5中无块作用域 遇到for/if会冲出作用域
if(true){
    var z = 23;
}
console.log(z);//23
//等价于
var z;
if(true){
    z = 23;
}
console.log(z);
//模拟块作用域
if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错




if(true){
    var i = 0;
}
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();
console.log("i:",i);//0
console.log("j:",j);//报错
//上边代码等价于
var i;
if(true){
    i = 0;
}
function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();
console.log("i:",i);//0
console.log("j:",j);//报错
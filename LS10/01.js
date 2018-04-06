//作用域及其特点
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
//console.log(a,b,c,d);
//将var后面的，改为；以后：
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100;
        c = 200;
    console.log(a,b,c,d);// 100 20 200 600
    function bar() {
        //bar局部作用域
        var a = 500;
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
console.log(a,b,c,d);//10 20 200 600


//词法作用域
var name = "Jack";
function echo() {
    console.log(name);// Jack
}
echo();
//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack
//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack
//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();//g



////////////////////////////////////////////
function f1(){
	var x = 1;
	function f2(){
		return x++;
    }
return f2();
}
var f3=f1();
console.log(f3);//1
console.log(f3);//1
///////////////////////////////////////////
function f1(){
	var x = 1;
	function f2(){
		return x++;
    }
return f2;
}
var f3=f1();
console.log(f3());//1
console.log(f3());//2
console.log(f3());//3




////////////////////////////////////////////
function createInc(starValue){
	return function(step){
		starValue+=step;
		return starValue;
    }
}
var inc =createInc(5);
console.log(inc(1));//5+1
console.log(inc(2));//6+2  starValue是常驻内存 在上一个表达式中已经从5变成了6 
inc=createInc(5);//第三次输出前，新创建了一个闭包，startValue重新创建
console.log(inc(1));//5+1  
/////////////////////////////////////////////////
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);
console.log(inc(1));//9
console.log(inc2(1));//6




/////////////////////////////////////////////////
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1
/////////////////////////////////////////////////
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1




//函数调用时this不进行作用域的传递
var a = 1;
function f1(){
	var b =2;
	function f2(){
		console.log(a,b);
    }
    f2();
}
f1();//1 2


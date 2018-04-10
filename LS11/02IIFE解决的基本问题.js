//文件内的变量污染问题,尤其是异步执行的情况下
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//如何避免文件之间的全局污染，使用IIFE函数立即执行表达式 
(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    console.log("x = ",x);
    alert("x = "+x);
};
})();           // IIFE结束

//如何避免全局污染，使用IIFE函数立即执行表达式 JS文件2中的代码
(function () {  // IIFE开始
    var x = 20;
 })();           // IIFE结束
 
 function nameSpace() {
    var x = 20;
 }
 nameSpace();
//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}





//非期望的变量共享问题及解决办法
//
function f(){
	var getNumFuncs=[];
	for(var i=0;i<10;i++){
		//(function (j){
			getNumFuncs[j]=function(){return j;};
//})(i);
}
return getNumFuncs;
}
var tmp = f();
tmp[3]();//10

//
function f(){
	var getNumFuncs=[];
	for(var i=0;i<10;i++){
		(function (j){
			getNumFuncs[j]=function(){return j;};
})(i);
}
return getNumFuncs;
}
var tmp = f();
tmp[3]();//3

//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//9

//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//10


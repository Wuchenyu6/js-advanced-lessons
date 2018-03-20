//字面量
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];


//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;
// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}
//存在二义性的语句
var obj1={x:2,y:[1],z:false};
//var obj2={x:2,y:[1],z:New Boolean(false)};
console.log(obj1.z==obj2.z);
// 存在二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}
// 存在二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}


//不同类型的表达式
23;//其中的23为原始表达式
obj = {x:2};// ={x:2}为对象初始化表达式
arr = [1,2];// =[1,2]为数组初始化表达式
var foo = function(){ // = function(){}为函数定义表达式
    console.log("foo");
};
obj.x;//obj.x为属性访问表达式
foo();//foo()为函数调用表达式
2+3;//2+3为算数运算表达式
2>3;//2>3为关系运算表达式
1&&2;//1&&2为逻辑运算表达式


//关于语句 
2>3;//表达式语句
//条件语句
var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");//a < b
}
//扩展知识在chrome中测试下述代码: var a,b;i hj//全局   与 var a=b;//谁是局部变量，谁是全局变量？
function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//b: 3
console.log("a:",a);//a: 2
//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);//out for 5
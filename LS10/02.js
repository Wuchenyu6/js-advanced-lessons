//ES5中无块作用域
{
    var a = 4;
}
console.log(a);
//变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}//123


//使用IIFE来解决上述问题 用函数立即执行表达式：在函数外部加一个（）
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;//var不能丢 否则就变成了一个全局变量
    }
}());//234
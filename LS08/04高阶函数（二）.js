//实例三 常用回调函数 设置超时和时间间隔的方法、异步请求、事件监听和处理

//超时回调实例
var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);
//间隔回调实例
var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);
clearInterval(timeInterval);
//事件监听回调实例
document.addEventListener("click", function(){
    console.log("click callback");
});
 


// 函数作为返回值输出
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出：fun2(){return this.x;}
console.log("输出：",obj.fun3()());//输出： 12
console.log("输出：",obj.fun4());//输出： 34
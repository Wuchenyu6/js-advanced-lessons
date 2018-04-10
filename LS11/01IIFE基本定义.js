//基本格式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
(function () {
    console.log("222");
})()//没有分号的话会报错


// 其他形式的IIFE 与运算符结合的写法

//=
var i = function(){
    return 10;
}(); //i为10


//! ==  ?:等
!function(x,y){
    return x==y?true:false; //false
}("5",5);
!function(x,y){
    return x===y?true:false; //true
}("5",5);
true


//&&
true && function(a,b){
    return a>b?a:b;
}(5,9);//9
({}) && function(a,b){
    return a>b?a:b;
}(5,9);//9
0 && function(a,b){
    return a>b?a:b;
}(5,9);//0
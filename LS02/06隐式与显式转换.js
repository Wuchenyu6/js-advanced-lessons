//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean true

//算数运算符 与 隐式类型转换 
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);//img3.jpg 18

//逻辑运算符 与 隐式类型转换
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g);//false true true

// 流程语句 与 隐式类型转换
var h = {x:1};
if(h){
    console.log("h:",h);//h: {x: 1}
}
////
var h = "";
if(h){
    console.log("h:",h);//输出为空
}

//显式类型转换
console.log(Boolean({}));//true
console.log(Boolean(2));//true
console.log(Boolean(!'2'));//false
console.log(Number({}));//NaN
console.log(Number('2'));//2
console.log(String({}));//[object Object]
console.log(Object(2));//Number {2}
console.log(parseInt(4.4));//4
console.log(parseFloat(4.44));//4.4
// toString();
// valueOf();
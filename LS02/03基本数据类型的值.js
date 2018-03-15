//number类型的值
var a1 = 20;
var a2 = 23.4;
console.log(Math.ceil(a2));//24
console.log(Math.floor(a2));//23
console.log(Math.round(a2));//23
var a3 = 5e2;//指数
console.log(a3);//500
console.log(typeof Math);//object
var n1 = 12345.6789;
console.log(n1.toFixed(2));//保留两位小数 12345.68
console.log(n1.toPrecision(2));//把数字格式化为指定长度 1.2e+4
console.log(n1.toString());//转化为字符串格式 12345.6789
console.log(n1.toExponential(2));//转化为指数计数法 1.23e+4
//NaN
var x = Number("xis021");
console.log(x);//NaN
console.log(isNaN(x));//true
console.log(typeof NaN);//number
console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN
console.log(NaN==NaN);//false
console.log(NaN === NaN);//false
//NaN是Not a number的缩写，若设A为NaN、B为NaN，那么NaN==NaN显然不成立
//Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
console.log(isFinite(y2));//false，非有限数
console.log(isFinite(23));//true，有限数
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0




//string类型的值
var str = "abc_def_ghi_jkl_mn";
console.log(str.split("_"));//["abc", "def", "ghi", "jkl", "mn"]
console.log(str.split("_",2));//["abc", "def"]
console.log(str.concat("_opq"));//abc_def_ghi_jkl_mn_opq
console.log(str.substr(4,7));//def_ghi
console.log(str.substring(4,7));//def
console.log(str.slice(2));//c_def_ghi_jkl_mn
console.log(str.slice(2,5));//c_d
console.log(str.slice(-2));//mn
console.log(str.slice(2,-2));//c_def_ghi_jkl_




//Bool类型的值只有两个 true、false
var a;
console.log(a);//undefined
b;
console.log(b);//会报错undeclare = not defined
function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);
function fee() {
}
var z = fee();
console.log(z);//undefined
console.log(typeof null);//object



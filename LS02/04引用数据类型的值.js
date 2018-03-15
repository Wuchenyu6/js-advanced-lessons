//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype);//true
//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype);//true
console.log(arr.__proto__.__proto__ === Object.prototype);//true
//foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
function foo() { 
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);//true
console.log(foo.__proto__.__proto__ === Object.prototype);//true
console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true
//遍历
for(var k in obj){
    console.log(k,obj[k]);//x 1
                          //y 2
}//只遍历原型链obj中的属性
console.log("x" in obj);//true
console.log(Object.keys(obj));//[x,y]

//包装对象
var a = 123;
var b = new Number(a);
console.log(a == b);//true 对象类型转换为了基本类型
console.log(a === b);//false
//临时包装对象
var str="text";
str.p = 4;
console.log(str);//text
console.log(str.p);//undefined 临时对象在使用后立即释放了
var t = str.p;
console.log(str.p);//undefined
console.log(t);//undefined
//基本数据类型（不可变性）
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象，所以具有length属性
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值
//对象数据类型
var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]


//函数对象属性之arguments 实参集合（类似数组的一个对象）
//函数对象属性之length 形参个数
var foo = function (x,y,z){
    console.log(arguments === test.arguments);//false
    console.log(foo.length);//3 形参个数
    console.log(arguments.length);//2 实参个数};
}
foo(1,2);



///////caller 获取调用当前函数的函数
//例子
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);
test();//output: test is called from ,call from the top level
function testOuter() {
    test();
}
testOuter();
//没有调用的情况下test.caller为： null
//test is called from the toppest level
//test is called from the function:
//function testOuter() {
//    test();
//}
//例子
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();//ƒ abc(){this.foo1();}
//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数

var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));//24 4*3*2*1
//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));//24



//prototype对象原型
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//Hi,i'm Leo
console.log(li.sex);//M
Man.prototype.isStrong = true;
console.log(li.isStrong);//true
////////
var arr = [];
arr.__proto__===Array.prototype//true



//关于绑定 例一
// 在绑定功能中，this对象解析为传入的对象。
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);//this指向window
		}
        foo.bind(this)();//23 函数绑定 这个this指向obj
        var fee = foo.bind(this); fee();//23 同上
		foo();//45 window直接调用foo 是全局函数 
    }
};
obj.test();//23 23 45 

//函数对象方法之 bind 硬绑定 例二
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};
// The range object will become the this value in the callback function.
var range = { minimum: 10, maximum: 20 };
// Bind the checkNumericRange function.
var boundCheckNumericRange = checkNumericRange.bind(range);
// Use the new function to check whether 12 is in the numeric range.
var result = boundCheckNumericRange (12);//相当于range.boundCheckNumericRange (12)
console.log(result);//true
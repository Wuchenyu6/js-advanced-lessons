/////////////函数定义 
//函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);
typeof Function;//function
Function instanceof Function;//true
Function instanceof Object;//true
//非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);//return 3

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(3,4);//return 3




/////////////函数调用
//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window 调用函数的主体

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);//23
    }
};
obj.test();//调用对象的方法 this表示调用这个方法的对象本身
///////////
var x =45;
var test = function(){
    console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test=test;
obj.test();//23
test();//45

//间接调用(移花接木 吸星大法)
//间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB
/////////////
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
}
var me = {
    name:"ABC"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8
//swim(1,2);与swim.call(null,1,2);相同


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack





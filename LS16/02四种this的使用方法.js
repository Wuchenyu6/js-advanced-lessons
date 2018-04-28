//this四种应用场景
//注意：不管哪种场景下调用，this指向的都是调用此函数的主体



//一般函数中的this  （非严格松散模式下）指代全局对象
function thisTest(){
    console.log(this === window);
}
thisTest();//true
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);  //20   "新添加属性"
//一般函数中的this(严格模式下)
function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();
//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();






//对象方法中的this（无嵌套的情况下）
//函数作为对象的一个属性时 称之为对象的方法
var point ={
    x:0,
    y:0,
    moveTo:function(x,y){
        this.x=x;
        this.y=y;
    }
}; 
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);//{x: 1, y: 1, moveTo: ƒ}moveTo: ƒ (x,y)x: 1y: 1__proto__: Object
 




//构造函数中的this
function Person(name){
    this.name=name;
}
var p=new Person("Jack");//this指向实例化出来的对象
console.log(p.name);//Jack

//如果直接调用Person也可以
function Person(name){
    this.name=name;
}
Person("Jack");
console.log(name);//Jack





//间接调用中的this（call、apply）
//call 实例1
//call和apply定义在Function.prototype
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};
objA.test();//AA 1
objA.test.call(objB);//BB 5

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);// i'm:QL i can fly ___ 7 8


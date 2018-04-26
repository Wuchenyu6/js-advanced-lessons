//使用3种方式来创建对象  obj1,obj2,obj3;
//obj1通过字面量方式创建，并创建自身属性x
//通过字面量的方式创建 JS对象
var obj1 = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//obj2通过Object静态方法创建，obj2的原型为obj1，并创建自身属性y
var obj2 = Object.create(obj1);
obj2.age = 23;
//obj3通过构造函数来创建，构造函数为Obj3
var Obj3=function(name){
    this.name=name;
}
var obj3=Obj3('Jack');


/////////////////////////////////////////////////////////
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi


//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//自有属性  23

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);//{y: 2, x: 1}
console.log(obj2.hasOwnProperty("x"));//true


//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();//hello,i'm Mike 21 years old

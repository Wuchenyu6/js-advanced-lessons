function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);//20
p1.sayHi();//Hi,i'm Jack




//////////////////////////////////////////////////////////////
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};
var p1 = new Person("Mike");
//name和age属性是定义在p1上
console.log(p1.name);//Mike
console.log(p1.age);//21
//sayHi方法是定义在p1的原型上了
p1.sayHi();//Hi,i'm  Mike 21 years old!
//分析一下访问和调用的过程是怎样的
//分析：属性和方法定义在构造函数中和写在prototype上这两种情况有什么不同?
//没有私有属性情况下，常将方法添加到构造函数的prototype属性上，实现方法共享
//而属性根据情况来确定是定义在构造函数中,还是定义在构造函数的prototype（即实例化对象的原型上）属性上
console.log(p1.__proto__ === Person.prototype);//true



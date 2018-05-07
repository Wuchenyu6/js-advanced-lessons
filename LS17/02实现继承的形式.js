//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){//将方法添加到对象的原型上（即构造函数的prototype上）便于共享，节省内存
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);//等价于 this.name=name; this.age=age;
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//思考：name属性添加到哪个对象上了？Person.prototype、Student.prototype还是实例化的对象上？
//分析：添加到了实例化出来的对象上



//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
// console.log(Person.prototype.constructor); 
// console.log(Student.prototype.constructor);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
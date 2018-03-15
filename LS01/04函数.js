//函数定义及调用 
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));//3  max(2,3)即为调用了函数

//函数定义 注意分号
function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));//3
var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));//2

//函数参数数量问题回顾
function f1() {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);//[2,3,4,"a"]
}
f1(2,3,4,"a");
function f2(a,b,c,d) {
    console.log(a,b,c,d);//2 3 undefined undefined
}
f2(2,3);

//构造函数回顾 JS面向对象具体内容 参见后续面向对象章节
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfo = function () {
    console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
    //Hi,i'm Mike ,i'm 60 years old!
};

var p1 = new Person("Mike",60);
p1.showInfo();
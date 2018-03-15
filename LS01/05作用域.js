//变量作用域
var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:",x);//inside x:34
    y = 45;//加var和不加var的区别
           //加var是局部变量 不加var是全局变量 所以outside y也有输出值
    console.log("inside y:",y);//inside y:45
};
foo();
console.log("outside x:", x);//outside x:23
console.log("outside y:", y);//outside y:45
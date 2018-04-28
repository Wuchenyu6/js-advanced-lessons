//  构造函数中函数嵌套 
//this缺陷
function Point(x,y) {
    this.x = x;//this指向实例化出来的对象
    this.y = y;//this指向实例化出来的对象
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//Point {x: 2, y: 3, moveXY: ƒ}



//this缺陷 解决方案
//that
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)




//通过call/apply方法
function Point(x,y) {
    this.x = x;//this指向实例化出来的对象
    this.y = y;//this指向实例化出来的对象
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.call(this,x);//原函数moveX有形参x 所以要将传也传进去
        moveY.call(this,y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//Point {x: 3, y: 4, moveXY: ƒ}






//bind两种方法解决上边的问题
function Point(x,y) {
    this.x = x;//this指向实例化出来的对象
    this.y = y;//this指向实例化出来的对象
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//Point {x: 3, y: 4, moveXY: ƒ}






//思考：下述代码
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
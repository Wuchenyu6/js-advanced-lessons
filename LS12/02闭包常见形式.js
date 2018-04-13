//闭包的常见形式
//以函数对象形式返回
var tmp = 100;//注意：词法作用域
function foo(x) {
    var tmp = 3;//注意：词法作用域
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18
////////////////////////////////////////////
var tmp = 100;//注意：词法作用域
function foo(x) {
    //var tmp = 3;//注意：词法作用域
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//113
fee(10);//114
fee(10);//115
///////////////////////////////////////////
function foo(x){
	var tmp=3;
	return function(y){
		x.count=x.count?x.count+1:1;
		console.log(x+y+tmp,x.count);
}
}
var age = new Number(2);
var bar = foo(age);
bar(10);//15 1
bar(10);//15 2
bar(10);//15 3


//////////////////////////////////////////////
function fn() {
    var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15
////////////////////////////////////////////////
function fn() {
    //var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//100




//作为对象的方法返回
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
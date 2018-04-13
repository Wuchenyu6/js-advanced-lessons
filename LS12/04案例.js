//闭包 应用案例 

//实现数据的封装 私有属性
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());//default
john.setName("john");
console.log(john.getName());//john

var jack = Person();
console.log(jack.getName());//default
jack.setName("jack");
console.log(jack.getName());//john
////////////////////////////////////////////////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1; // 11
nAdd();
result2(); // 11
/////////////////////////////////////////////////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); //10
nAdd();
result2(); //11
result1();//11



//定时与节点 闭包应用案例 2秒后执行，由于闭包所以objID此时还存在
//虽然有时没有直接用，但闭包无时无刻不存在
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);



//闭包 应用案例
var db = (function() {
    // 创建一个隐藏的object, 这个object持有一些数据
    // 从外部是不能访问这个object的
        var data = {};
    // 创建一个函数, 这个函数提供一些访问data的数据的方法
        return function(key, val) {
            if (val === undefined) { return data[key] } // get
            else { return data[key] = val } // set
        };
    // 我们可以调用这个匿名方法
    // 返回这个内部函数，它形成了一个闭包
    })();
    
    db('x'); // undefined
    db('x', 1); // 设置data['x']为1
    db('x'); // 1
    // 我们不能直接访问data这个object本身 但是我们可以设置它的成员



    
//注意闭包与不经意的变量共享
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());//2
/////////////////////////////////////////////////变式1
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        (function(){
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
            //console.log(i,pos);
        }());
    }
    return result;
}
console.log(f()[1]());// 1
////////////////////////////////////////////变式2
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        (function(){
            var pos = i;
            var func = function(){
                return i;
            }
            result.push(func);
            //console.log(i,pos);
        }());
    }
    return result;
}
console.log(f()[1]());//3
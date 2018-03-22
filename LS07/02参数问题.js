//实参数大于形参数
function test() {
    console.log(arguments);//Arguments(2) ["hello,", "world!", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(test.arguments==arguments,arguments);//false
    console.log(arguments.length);//2
	console.log(typeof arguments);//object
	console.log(arguments instanceof Array);//false arguments是一个类数组对象
	console.log(arguments instanceof Object);//true
    console.log(Array.prototype.slice.call(arguments));//["hello,", "world!"]
    //slice是将Array中的字符串切割出来
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"
///////////////
var arr = [1,2,3,4,5];
arr.x=6;
console.log(arr instanceof Array);//true arr是一个类对象数组（含有属性值的数组）


//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
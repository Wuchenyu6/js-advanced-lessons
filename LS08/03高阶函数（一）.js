////// 函数作为参数被传递（最常见的形式，回调函数）
//例一
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});//13
add(2,-3,Math.abs);//5
add(2,3,Math.sqrt);//3.1462643699419726 (2的开平方加3的开平方)


//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){	return x+1;}
function f2(x){	return x-1;}
function f3(x){	return x*x;}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4

//例二
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}
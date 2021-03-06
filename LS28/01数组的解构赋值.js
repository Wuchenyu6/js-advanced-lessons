//用解构赋值方式定义变量
//数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

let[a,b,[c],d]=[{x:1},{y:0},[1],4];
console.log(a,b,c,d);//{x: 1} {y: 0} 1 4

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);//undefined undefined

//解构赋值改变数组顺序
var a=1,b=2;
console.log(a,b);
[a,b]=[b,a];//直接改变
console.log(a,b);
//1 2
//2 1

//解构赋值中的默认值
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'
// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',null]; // x4='a'y4='null'

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

var [m4 = n4, n4 = 1] = []; // 
console.log(m4,n4);//undefined 1
//等价于
var m4,n4;
m4=n4;
n4=1;
console,log(m4,n4);//undefined 1


//
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a);//[2, 3, 4]
console.log(a == b);//false

let a = [];
let b=[2,3,4];
a = b;
console.log(a);//[2, 3, 4]
console.log(a == b);//true

let a =[];
let b =[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);// [1, 3, 5]
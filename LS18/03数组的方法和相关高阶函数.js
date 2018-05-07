//数组的静态方法:构造器函数对象的方法
const bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // (7) [empty 
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));//true 是数组

function foo(){
    console.log(arguments);
    console.log(Array.isArray(arguments));//false 类数组对象 不是数组
    //console.log(arguments.pop());//不能调用 arguments是类数组对象 不是数组
    //移花接木  用call方法间接调用arguments
    console.log(Array.prototype.pop.call(arguments));//5
    console.log(arguments);
}
foo(3,2,5);




// 数组添加删除元素的原型方法 (破坏性)
//Array.prototype.shift
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);

//unshift
var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);

//pop
var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);

//push
var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);
//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);//(2) ["b", "c"] ,  (3) ["a", "x", "d"]
console.log(arr5.splice(-2,2,"x"));//(2) ["c", "d"]





//排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//(3) [3, 2, 1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//(4) ["apple", "banana", "orange", "pear"]
//有正负号时会产生错误
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//(4) [-1, -20, 50, 7]
//解决办法：sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序
//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);





//合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);//(4) ["banana", "apple", "pear", "orange"],(2) ["banana", "apple"],(2) ["pear", "orange"] 

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);//(2) [3, 4] ,(5) [1, 2, 3, 4, 5]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);//(3) [3, 4, 5] ,(5) [1, 2, 3, 4, 5]

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);
console.log(typeof joinReturn);
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));





//值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
//倒序
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3






// 数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this



// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
var arr1=[2,5,8];
arr1.forEach(function (a){
    console.log(a,this);//this指向Window
})
//输出：
// 2   Window 
// 5   Window 
// 8   Window 
console.log(arr1);// (3) [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,2,3]
arr1.forEach(function (a){
    console.log(a,this);//this指向arr2
},arr2)
//输出
// 2 (3) [1, 2, 3]
// 5 (3) [1, 2, 3]
// 8 (3) [1, 2, 3]
console.log(arr1);//(3) [2, 5, 8]




var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
//输出
//2 "不大于3"
//5 "大于3"
//8 "大于3"
console.log(arr1);//(3) [2, 5, 8]






// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);// 不会输出8  循环到5以后直接跳出循环了
    return a%2===0;
});
console.log(returnValue);//false

//
var arr2= [2,4,6];
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//输出2 4 6
    return a%2===0;
});
console.log(returnValue);//true






// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看输出了哪些数，为什么？
    return a%2===0;
});
console.log(returnValue);







//数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);//(5) [1, 9, 25, 49, 81]    (5) [1, 3, 5, 7, 9]



// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);


// 数组原型方法（迭代-非破坏性-归约方法）

// Array.prototype.reduce(element,initialValue?) //从左向右迭代
// 对reduce的解读 ((((x1 op x2) op x3) op x4)...xn)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));
 



// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));





//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));
//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);
//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }



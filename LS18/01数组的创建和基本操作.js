//创建数组的不同方式
var arr1 = [1,2,3,"4"];
var arr2 = new Array(5);//思考var arr2 = new Array("5");
console.log(arr2);
for(var i=0;i<arr2.length;i++){ 
    arr2[i] = i;
}


//
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//思考：点击document之后，arr22数组有几个元素，每个元素的值分别是什么？

var arr3 = new Array(1,2,3,4);//多个参数
console.log(arr1,arr2,arr3);

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];
//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);


//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idLog(123);


//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：思考此时数组长度是2还是3？如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始

//思考
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//[empty empty 3 undefined]

//当使用使用2的32次方以内的非负整数作为属性名时（包括类型转换的数字)
//数组会自动维护其length属性，作为数组的元素，而不是数组对象的属性
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);//(101) [empty, "Hi", empty × 98, 0, -1.23: true]






// //下述案例，参见后续部分
// //使用map和reduce来实现，数组求平均值和标准差

// //不用map和reduce的写法
// var data = [1,1,3,5,5];
// var total = 0;
// for(var i=0;i<data.length;i++){
//     total += data[i];
// }
// var average = total/data.length;
// total = 0;
// for(var i=0;i<data.length;i++){
//     var deviation = data[i]-average;
//     total+=deviation*deviation;
// }
// var stddev = Math.sqrt(total/(data.length-1));


// //使用map和reduce的写法
// var data = [1,1,3,5,5];
// function sum(x,y) {return x+y;}
// var average = data.reduce(sum)/data.length;

// function deviation(x) {return x-average;}
// var tempArr = data.map(deviation);
// total = 0;
// function square(x) {return x*x;}
// total = tempArr.map(square).reduce(function (x,y) {
//     return x+y;
// });
// var stddev = Math.sqrt(total/(data.length-1));

// //使用map和reduce的精简写法
// var data = [1,1,3,5,5];
// var average = data.reduce(function(x,y) {return x+y;})/data.length;
// var tempArr = data.map(function(x) {return x-average;});
// total = 0;
// total = tempArr.map(function(x) {return x*x;}).reduce(function (x,y) {
//     return x+y;
// });
// var stddev = Math.sqrt(total/(data.length-1));

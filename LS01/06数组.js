//字面量创建数组
var arr1 = [2,3,"a","b"];
console.log(arr1);//(4) [2, 3, "a", "b"]

//访问与改变数组
console.log(arr1[2]);//a
console.log(arr1.length);//4
arr1.length-=1;
console.log(arr1);//[2,3,"a"]

//数组相关方法回顾
//slice
var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);
console.log(arr2);//["a", "b", "c"]
console.log(arr3);//["b"]
//push
var arr4 = ['m','n'];
var pushReturn = arr4.push('o');
console.log(pushReturn);//3
console.log(arr4);//["m", "n", "o"]
//pop
var popReturn =arr4.pop();
console.log(popReturn);//o
console.log(arr4);//["m", "n"]
//shift
var arr5 = [1,2,3,4];
var shiftReturn = arr5.shift();
console.log(shiftReturn);//1
console.log(arr5);//[2, 3, 4]
//unshift
var unshiftReturn = arr5.unshift(0);
console.log(unshiftReturn);//4
console.log(arr5);//[0, 2, 3, 4]
//indexOf
var arr6 = ["ab","cd","ef"];
console.log(arr6.indexOf("cd"));//1
//join
var joinReturn2 = arr6.join('-');
console.log(joinReturn2);//ab-cd-ef
//splice
var arr7 = ["x","y","z"];
var arr8 = arr7.splice(1,1,"m");
console.log(arr7,arr8);
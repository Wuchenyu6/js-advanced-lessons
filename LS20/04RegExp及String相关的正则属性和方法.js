////////////////////////////////属性
// global 默认为false
// ignore case 默认为false
// multiline 默认为false
// lastIndex 表示当前匹配内容的最后一个字符的下一个位置
// sourse 正则表达式文本字符串

var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);//false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);//true true false 0 "\w"

//思考reg1的global属性是定义在谁身上，是否可修改，它的属性特性描述符是什么？

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}// 3  //4  //5  //6  //7  //8

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);//1    ["s", index: 0, input: "slfls3r3sfsf"]

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);//2    ["l", index: 1, input: "slfls3r3sfsf"]

var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}// 
//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);




////////////////////////////////////方法
//Part111 RegExp.prototype.test 方法
var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/


//Part222 RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
console.log(retExp instanceof Array,retExp,execExp.lastIndex);

//对于全局模式下 每检测一次lastIndex增加一次，
//注意：再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
//注意：如果没有全局g 则每次匹配都是从0开始
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
/*
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);//每次执行后从哪开始重新匹配？
}
*/


//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));
console.log("a2b3c4d".replace(/[2-3]/,"X"));
console.log("a2b3c4d".replace(/[2-3]/g,"X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);
"hello world Hi you".match(/hello|world/);
"hello world Hi you".match(/hello|world/g);
"world Hi you".match(/hello|world/);
"THat hot hat".match(/h.t/);
"THat hot hat".match(/h.t/g);
"THat hot hat".match(/h.t/gi);


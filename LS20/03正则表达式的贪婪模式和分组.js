//贪婪模式和非贪婪模式
"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//X45678  设置为非贪婪模式 在量词后加'？'  

"12345678".replace(/\d{3,6}?/g,'X');//XX78

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//NameNameName_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//Xe5  贪婪模式
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//Xd4e5  非贪婪模式
 
// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");//XX
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//abcdefghijk_X_X

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"
"xxabccxxdexx".replace(/\bxx|xx\b/g,'yy');//yyabccxxdeyy

"xx11xx".replace(/(\bxx)|(xx\b)/g,"mm");//mm11mm


//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//10/23/2017

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$1");// 23/10

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^\(ab\)$/.test("(ab)"));//true

//正则前瞻，了解即可 判断后边是否满足断言
console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻
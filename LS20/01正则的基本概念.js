//正则案例
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on


//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

//正则工具
//http://www.iteye.com/news/29859

// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", index: 2, input: "xxAbcaaBbxyz"]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aB"]

//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var regExp = /a*b/gi; 
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"]

var regExp = /a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"]

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true


//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
var regExp = /a/gi;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 因为是g全局 所以是一个循环 而不是从头开始循环


// 正则表达式之 \
//\b 匹配一个词的边界  一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false 
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false 

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//\B 匹配一个非单词边界  他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false 
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null
"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1
//练习将"aaa"替换为"axa"
console.log("aaa".replace(/\Ba\B/,"x"));

//
"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"

//  \d匹配一个数字 等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'

//  \D匹配一个非数字 等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'

//\w匹配一个单字字符（字母、数字或者下划线） 等价于[A-Za-z0-9_] 例如,匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 

//\W 匹配一个非单字字符 等价于[^A-Za-z0-9_] 例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'

//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");//"sdafsa sdfe*"

"sdafsa sdfea2s".replace(/a\Ds/g,"*");//"sd**dfea2s"

"sdafsa sdfea2s".replace(/a\ws/g,"*");//"sd*a sdfe*"

"sdafsa sdfea2s".replace(/a\Ws/g,"*");//"sdafs*dfea2s"

//
var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);//24
str.replace(/\dqe/,11223344);
console.log(str);//test22314234244dgfqeqe232qe13ed

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得‘ye’
console.log("noonday".match(/\B../));//["oo", index: 1, input: "noonday"]
console.log(/\B../.test("noonday"));//true


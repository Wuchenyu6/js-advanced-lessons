//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); //1
console.log("A".localeCompare("A"));//0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);//abcdef

//字符串常用方法，字符串的方法源于String.prototype
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);
var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);
var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找
console.log(str2);//cdef
console.log(str3);//cde
console.log(str4);//ef
console.log(str5);//cd
console.log(arr6);//["ab", "def"]
console.log(arr7);//["ab"]
console.log(arr8);//["ab", "def"]
console.log(str9);//c
console.log(str10);//100
console.log(str11);//3
console.log(str12);//9
//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//abcdefghijklmn cdefg
var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//abcdefghijklmn cde



//字符串变换
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();
console.log(str16);//aaabbb
console.log(str17);//abc def
console.log(str18);//abcdef
console.log(str19);//ABCDEF


//检索和比较
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");
console.log(indexOf);//9
console.log(lastIndexOf);//15


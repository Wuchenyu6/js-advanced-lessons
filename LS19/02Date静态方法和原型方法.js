
// Date 方法参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date



//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//1525675170241
//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());//1525675189895

console.log(Date.parse("1970-01-01"));//0
//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));//86400000

console.log(Date.UTC(2018,5,7));//1528329600000
//将给定的日期转换成毫秒,解释为UTC 协调世界时间

var today = new Date();
today.setMonth(6);//数组从0开始 所以想看7月7号的信息就要写6
console.log(today);//Sat Jul 07 2018 14:53:04 GMT+0800 (中国标准时间)
console.log(today.getDay());//6  星期


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


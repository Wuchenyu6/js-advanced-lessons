



//关于console
console.log("logInfo");
console.warn("warnInfo");
console.error("errorInfo");
console.assert(3>2,"有问题的话会输出这句话11111");
console.assert(2==="2","有问题的话会输出这句话22222");



//异常捕获
//1
try {
    try {
        throw "oops";
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
// "finally"
// "outer" "oops"
//2
try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
// "inner" "oops"
// "finally"

//3
try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
// "inner" "oops"
// "finally"
// "outer" "oops"
//4
try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.warn("inner", ex);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.warn("outer", ex);
}
// "inner" "oops"
// "finally"


//Part33333333333333
//思考下述两段代码的区别，思考两者调用栈CallStack的不同
try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
	abc("xx",function(){
		var arr = new Array(-1);
	});
}
catch(e){
	console.log(e);
}
//捕获到了异常

//JS的异步
//思考这种情况是否能捕获到异常，回调函数捕获异常的问题
try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
}
catch(e){
	console.log(e);
}
abc("xx",function(){
    var arr = new Array(-1);
});
//没有捕获到异常  因为调用函数是在try的外面  catch捕获不到
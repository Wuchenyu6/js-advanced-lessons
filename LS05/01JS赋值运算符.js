var a = 34;
if(a = 45){
    console.log("是否会输出？");//输出
}

var b = 34;
if(45 == b){//防止上述情况的发生
    console.log("是否会输出？");//不会有输出
}
//条件语句
var x=23;
if(x>22){
    x+=2;
}else{
    console.log("x 不大于 22");//不输出
}
console.log(x);//25
var xx = 234;
if(234 == xx){ //注意反写
    console.log("相等");//相等
}

console.log(a);//undefined
if(true){
    var a = 2;
}
console.log(a);//2
console.log(b);//undefined
if(false){
    var b = 3;
}
console.log(b);//undefined


//循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);//i:0
                        //i:1
                        //i:2
}
console.log(i);//3



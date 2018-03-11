// 基本（原始）数据类型与引用（对象）类型的区别：



//（一）内存分配方式不同 
     //一般情况：基本类型在栈区，引用（对象）类型在堆区
function foo() {
    var n = 10;
    var m = true;
    var str = "Hello World"; // str:"Hello World"存在栈中
    var obj1 = { value: "Hello World" };
    // obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
    var c=obj1;  //c不会在堆区再开辟内存 而是指向obj1所指向的那一块内存
    var d=n;     //d在栈区开辟了一块内存来储存10
};
foo(); 
var obj2={a:12,b:{}}; //a在堆区 因为对象的属性如果是基本类型 那么该属性是分配在堆区



//（二）赋值方式不同
     //基本类型 赋值、赋引用、深拷贝、浅拷贝
var str_a = "a"; 
var str_b = str_a; // 原始类型直接访问值,是值赋值
str_b = "b"; // str_b的值为"b",而str_a的值仍是"a"，因为str_a和str_b指向的是栈区不同的两块内存
console.log(str_a,str_b);//输出a b
     //引用类型 赋引用
var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
var obj_b = obj_a; // obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
obj_b.v = "b";// 通过obj_b访问堆内存的变量,这时候堆区中对象值为:{v:"b"},obj_a和obj_b引用的是堆区中同一个对象值
console.log(obj_a,obj_b);//输出b b
obj_b = {v:"c"}; 
// 注意：因为改的是整个对象，这里会在堆区中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象
// 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
console.log(obj_a,obj_b);//输出b c

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//obj_c.x1在堆区,但它却是值赋值
var obj_d = {x2:2,y2:3};
console.log(obj_c.x1 === obj_d.x2);//true 




//（三）判等不同
     // 值类型是判断变量的值是否相等（值比较）
     //引用类型是判断所指向的内存空间是否相同（引用比较）
     
     //
     var a1 = 100;
     var b1 = 100;
     console.log(a1 == b1);//true
     console.log(a1 === b1);//true
     
     //
     var a2 = new Number(200);
     var b2 = new Number(200);
     console.log(a2 == b2);//false
     console.log(a2 === b2);//false
     //a2 和 b2指向的是堆区中不同的两个对象值 即指向的内存空间不同
     
     //
     var a3 = new Number(200);
     var b3 = a3;
     console.log(a3 == b3);//true
     console.log(a3 === b3);//true
     b3 = new Number(200);
     console.log(a3 === b3);//false
     
     //
     var a4 = new Number(200);
     var b4 = 200;
     console.log(a4 == b4);//true 思考：是b4转换了，还是a4转换了
     console.log(a4 === b4);//false
     //是a4转换了 引用对象类型像基本数据类型转换

    //
    var obj_c = {x1:2,y1:3};
    var obj_d = {x2:2,y2:3};
    console.log(obj_c.x1 === obj_d.x2);//true obj_c.x是一个基本类型
    console.log(obj_c === obj_d); //false 是一个对象obj_c 所以是引用赋值



//（四）函数传递方式
// 值传递
var str_a = "Hello World";
function fn_a(arg){
    console.log(arg); //Hello World 
    //传入函数的是str_a的值 并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
    arg = "Hai";
    console.log(str_a,arg); //Hello World , Hai  这两个所指向的内存空间不同
};
fn_a(str_a);
console.log(str_a);//"Hello World" 此处的str_a与早先声明的str_a保持一致


// 引用传递
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}  //两者指向了相同的内存空间

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象 //两者指向的不同的内存空间
};
fn_b(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

// 上面这个问题也可以从内存角度去理解，两个函数都是传址，而这个址引用了obj_a在内存中对应的对象，
// 所以两个函数中的arg起初都是引用和obj_a同一个内存中的对象值，
// 而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，
// 但是在fn_b中重新为arg赋值新的对象，arg指向新对象并不会影响obj_a



//经典案例 函数参数传递
//
var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a); //123

//
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);
console.log(a.y);//345

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345

//
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//123

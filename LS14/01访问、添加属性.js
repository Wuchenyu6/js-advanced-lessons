//对象访问
var obj2 = Object.create(obj1);
obj2.y=2;
var Obj3=function(){this.z=3}
var obj3=new Obj3();
console.log(obj1,obj2,obj3);//{x: 1} {y: 2} Obj3 {z: 3}
console.log(obj2.x);//1

//对象的tostring属性无法访问
var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString);//原型链上有toString属性
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}



//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});//可枚举属性变为false
for(var k in obj){
    console.log(k,obj[k]);// y 2
}
//例一
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{
    writable:false,
    value:11,
    enumerable:false,
    configurable:true
});
//{y: 2, x: 11}
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{
    writable:false,
    value:11,
    enumerable:false,
    configurable:true
});
for(var k in obj){
    console.log(k,obj[k]);// y 2
}
//例二
var person={name:"Jack"};
Object.defineProperty(person,"name",{
	writable:true,//可写性
	configurable:false,//是否能删除是否可配置性
	enumerable:true,//是否可枚举
	value:"Mike"
});
console.log(person.name);//Mike
person.name="Lucy";
console.log(person.name);// Lucy
delete person.name;
console.log(person.name);//Lucy
//例三
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike


//添加属性的方法
//直接添加
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3

//通过Object.defineProperty方法添加的属性
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
conse.log(obj.w);//有w，但上边for...in遍历不到
//x 1
//y 2
//z 3
//456


//通过Object.defineProperty来添加和改变的get /set的属性特性
//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi

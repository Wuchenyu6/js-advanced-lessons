////////////////////////////////////////////////////////
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);//Object.prototype
console.log(obj.__proto__ === Object.prototype);//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;

console.log(newObj.__proto__ === obj);//true
console.log(newObj2.__proto__ === obj);//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null




//原型链综述
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false   判断z是否为自身属性  
//注意：hasOwnProperty是原型方法 调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找 
//区别于Object.keys(obj)这种静态方法




//原型链属性操作
obj.z = 5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3
obj.z = 8;
console.log(obj.z);//8
delete obj.z;//true
console.log(obj.z);//3
delete obj.z;//true
console.log(obj.z);//3
//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//undefined 此时彻底没有z了



//静态方法
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod(); // 'hello'
var foo = new Foo();
foo.classMethod();// TypeError: foo.classMethod is not a function
// classMethod方法前有static表明该方法是一个静态方法，
// 可以直接在Foo类上调用，而不是在Foo类的实例上调用。
//如果静态方法包含this关键字，这个this指的是类，而不是实例

//例子
class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
    }
}
Foo.bar(); // hello
// 静态方法bar调用了this.baz，this指的是Foo类，等同于调用Foo.baz
//静态方法可以与非静态方法重名

//例子
class Foo {
    static baz () { console.log('hello'); }
    baz () {
        console.log('world');
        Foo.baz();//
    }
    static fun1(o){
        // this.fun2();//报错 因为this指向Foo类
        o.fun2();
    }
    fun2(){  console.log("fun2")  }
}
var a = new Foo();
a.baz();//world hello
Foo.fun1(a);//fun2











//静态属性
class Foo {
}
Foo.prop = 1;
Foo.prop // 1

/*
//ES6中不支持下面的两种语法
class Foo {
    // 写法一
    prop: 2

    // 写法二
    static prop: 2
}

Foo.prop // undefined
*/

//目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法
class MyClass {
    static myStaticProp = 42;
    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
}
// 同样的，这个新写法大大方便了静态属性的表达，ES6暂不支持
// 老写法
class Foo {
    // ...
}
Foo.prop = 1;

// 新提案的写法 ES6暂不支持
class Foo {
    static prop = 1;
}
//ES5中创建类的实例，以及如何禁止用户把类当作普通函数执行（ new target）
function Person(name,age){
    //通过new执行的，返回的结果是当前创建的类；如果是当作普通函执行（Person()），返回的是undefined
    if(typeof new.target === 'undefined'){
        throw new SyntaxError('当前Person不能作为一个普通函数执行')
    }
    //new执行的时候，this时当前类的实例，this操作时给当前实例增加私有属性
    this.name = name;
    this.age = age;
}

//原型上存放的是公有的属性和方法：给创建的实例使用
Person.prototype = {
    constructor:Person,
    say:function(){
        console.log(`my name is ${this.name},i am ${this.year} years old`)
    }
}
//把Person当作一个普通对象，给对象设置私有属性
Person.study = function(){
    console.log('study');
}

var p1 = new Person('Tom',18);


/* -----------------分界线-------------------- */


//ES6中Class内部是通过Object.defineProperty来定义，把公共方法定义在原型链上。
//把静态的方法定义在类上

class Person2 {
    constructor(name='Bob',age=18){
        //给实例设置自由属性
        this.name = name;
        this.age = age;
    }
     //直接在大括号中编写的方法都设置在类的原型上，ES6默认把constructor的问题解决了，此时原型上的constructor指向的就是Person2
    say(){
        console.log(`my name is ${this.name},i am ${this.year} years old`)
    }
    //把Person2当作普通对象设置属性和方法，在设置方法前加static即可
    static study(){
        console.log('study');
    }
}
let p2 = new Person2('Jerry');
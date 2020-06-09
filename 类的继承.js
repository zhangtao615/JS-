//ES6继承实现原理

//负责将原型的方法和静态方法定义在构造函数上
function defineProperties (constructor,properties){
    for(let i=0;i<properties.length;i++){
        let obj = {...properties[i],enumerable:true,writeable:true,configurable:true};
        Object.defineProperty(constructor,properties[i].key,obj);
    }
}
//对不同属性进行处理，如果是原型上的方法挂载Class.prototype 如果是静态方法放在 Class上
function _createClass(con,protoProperty,staticProperty){
    if(protoProperty){
        defineProperties(con.prototype,protoProperty);
    }
    if(staticProperty){
        defineProperties(con,staticProperty);
    }
}

//父类
var Parent = function(){
    function Parent(){
        //类的调用检测
        this.name = 'Tom';
        _classCallCheck(this,Parent);
        return {a:100};
    }
    // 用来描述这个类的原型方法和静态方法
    _createClass(Parent,[//第一个数组表示的是公共方法的描述 descirptor
        {key:'fn',value:function(){
            return 100;
        }}
    ])
    return Parent;
}();
// 类的调用检测
function _classCallCheck(instance,constructor){ //检查当前类  有没有new出来的，不是new出来的this属于window
    if(!(instance instanceof constructor)) throw Error('without new')
}
// 继承共有方法和静态方法
function _inherits(subClass,superClass){
    // 子类继承父类的公有方法
    subClass.prototype = Object.create(superClass.prototype,{constructor:{value:subClass}});
    // 也要让子类继承父类的静态方法
    subClass.__proto__ = superClass;
}
var Child = function(Parent){ // 表示儿子继承Parent类，要包多一层不然传参会传到Child上
    _inherits(Child,Parent); // 表示继承 儿子继承父亲
    function Child(){ // 类的调用检查
        // 在子类中应该调用父类的构造函数
        // Parent.call(this);
        _classCallCheck(this,Child);
        let that = this;
        let obj =  Object.getPrototypeOf(Child).call(this); // Child.__proto__ = Object.getPrototypeOf(Child) 继承父类的私有方法，为了保险不用Parent.call(this)，因为不一定继承父类
        if(typeof obj === 'object'){ //如果是对象把obj作为实例
            that = obj;
        }
        return that;
    }
    return Child
}(Parent);
let child = new Child;
console.log(child);
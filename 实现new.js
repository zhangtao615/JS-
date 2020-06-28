const New = (fn) => {
    return () => {
        //创建一个新对象且将其隐式原型指向构造函数原型
        let obj = {
            __proto__ = fn.prototype
        }
        //执行构造函数
        fn.call(obj,arguments);
        //返回对象
        return obj;
    }
}
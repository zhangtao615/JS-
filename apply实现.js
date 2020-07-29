// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.apply = (context) => {
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    context = context || window;
    context.fn = this;
    let res;
    if(arguments[1]){
        res = context.fn(...arguments[1]);
    }else{
        res = context.fn();
    }
    delete context.fn;
    return res;
}
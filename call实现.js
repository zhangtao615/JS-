/*
将函数设为对象的属性
执行该函数
从对象上删除该函数
*/
Function.prototype.call = (context) =>{
    if(typeof this !== 'function'){
        throw new TypeError('not a function');
    }
    //处理context可能为空的情况
    context = context || window;
    context.fn = this;
    let arg = [...this.arguments].slice(1);
    let res = context.fn(...arg);
    delete context.fn;
    return res;
}
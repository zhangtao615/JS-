Function.prototype.call = function(context){
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
//思路：类似于call，返回的是函数
Function.prototype.bind = (context) => {
    if(typeof this !== 'function'){
        throw new TypeError('not a function');
    }
    let _this = this;
    let arg = [...arguments].slice(1);
    return function fn(){
        if(this instanceof fn){
            return new _this(...arg,...arguments);
        }else{
            return _this.apply(context,arg.concat(...arguments));
        }
    }
}

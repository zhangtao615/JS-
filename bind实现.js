//思路：类似于call，返回的是函数
Function.prototype.bind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not a function');
    }
    let _this = this;
    let arg = [...arguments].slice(1);
    return function F(){
        //处理函数使用new的情况
        if(this instanceof F){
            return new _this(...arg,...arguments)
        }else{
            return _this.apply(context,arg.concat(...arguments))
        }
    }
}

//规定时间内未触发第二次就执行
function debounce(fn){
    var timeout = null;
    return function(){
    clearInterval(timeout);
    timeout = setTimeout(function(){
        fn.apply(this,arguments);
    },1000)
    }
    
}
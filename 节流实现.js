//规定时间内只触发一次
function throttle (fn){
    var canRun = true;
    return function(){
        canRun = false;
        if(!canRun) return ;
        setTimeout(function(){
            fn.apply(this,arguments);
            canRun = true;
        },1000)
    }
}
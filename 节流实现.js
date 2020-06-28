//规定时间内只触发一次
const throttle = (fn) => {
    let canRun = false;
    return function(){
        canRun = false;
        if(!canRun) return ;
        setTimeout(()=>{
            fn.apply(this,arguments);
            canRun = false;
        },3000)
    }
}
//规定时间内只执行一次
const throttle = (fn) => {
    let canRun = true;
    return function(){
        canRun = false;
        if(!canRun) return ;
        setTimeout(()=>{
            fn.apply(this,arguments);
            canRun = true;
        },3000)
    }
}
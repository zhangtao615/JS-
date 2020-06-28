//规定时间内未触发第二次就执行
const debounce = (fn) => {
    let timeout = null;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            fn.apply(this,arguments);
        },1000)
    }
}
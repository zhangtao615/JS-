//规定时间内未触发第二次就执行
const debounce = (fn) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,arguments);
        },1000)
    }
}
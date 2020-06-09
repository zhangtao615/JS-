//setTimeout实现setInterval
setTimeout (function(){
    //do someting
    setTimeout(arguments.callee,500)
},500)
//JSON.parse(JSON.stringfy())实现
let copy1 = JSON.parse(JSON.stringify(obj))

//递归实现
function deepColne(obj){
    let copy = obj instanceof Array ? [] : {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            copy[i] = typeof obj[i] === 'object' ? deepColne(obj[i]) : obj[i]; 
        }
    }
    return copy;
}
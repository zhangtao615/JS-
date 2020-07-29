//JSON.parse(JSON.stringfy())实现
//let copy1 = JSON.parse(JSON.stringify(obj))

//递归实现
const deepClone = (obj) => {
    //判断obj是数组还是对象
    let copy = obj instanceof Array ? [] : {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            copy[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return copy;
}

let obj1 = {
    name:'zs',
    age:18
}
let obj2 = deepClone(obj1);
obj2.name = 'ls';
console.log(obj1.name);//zs

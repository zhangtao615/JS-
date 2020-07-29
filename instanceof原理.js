// 思路：右边变量的原型存在于左边变量的原型链上
let InstanceOf =  (leftValue,rightValue) => {
    let rightPro = rightValue.prototype;
    leftvalue = leftValue.__proto__;
    while(true){
        if(leftValue === null){
            return false;
        }
        if(rightPro === leftValue){
            return true;
        }
        leftvalue = leftValue.__proto__;
    }
}
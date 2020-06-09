//未实现异步处理等其他情况
//1.自动执行函数 2.三个状态 3.then

class Promise{
    constructor(fn){
        //三个状态
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = value => {
            if(this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
            }
        }
        let reject = value =>{
            if(this.state === 'pending'){
                this.state = 'rejected';
                this.reason = value;
            }
        }
        //自动执行函数
        try{
            fn(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    //then实现
    then(onFulfilled,onRejected){
        switch (this.state){
            case 'fulfilled':
                onFulfilled();
                break;
            case 'rejected' :
                onRejected();
                break;
            default:
        }
    }
}
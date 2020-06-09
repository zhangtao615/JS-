let things = [];
let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
function lazyLoad (){
    //滚动的高度
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for(let i = 0;i < things.length;i++){
        //图片在可视区冒出的高度
        let x = clientHeight + scrollTop - things[i].offsetTop;
        //图片在可视区内
        if(x>0 && x<clientHeight + things[i].height){
            things[i] = things[i].getAttribute('data')
        }
    }
}
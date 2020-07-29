//ES6 实现ajax；
/**
 * 1.创建xhr对象
 * 2.打开接口
 * 3.发送数据
 * 4.监听返回值
 */
const ajax = () => {
  let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
  xhr.open('get/post',url,true);
  xhr.send(`数据`);
  xhr.onReadyStateChange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
      //
    }
  }
}
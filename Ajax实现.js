//原生Ajax实现
function ajax(url){
//实例化
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHttp")
//初始化
  xhr.open("get",url,true);
  //发送请求
  xhr.send();
  // 设置状态变化回调处理请求结果
  xhr.onreadystatechange = () =>{
    if(xhr.readystate == 4 && xhr.status == 200){
      var res = xhr.responseText;
      return res;
    }
  }
}

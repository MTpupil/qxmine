
/**
 * 大大线报库每日自动签到
 *
 */

const url = "https://ym2.dadawz.cn/typechoUserlog/addLog?params=%7B%22type%22%3A%22clock%22%7D&token=%E6%9C%A8%E7%9E%B30c38a61e1db9faeb6165f759603bc681";
const method = "GAT";
const headers = {"Field": "test-header-param"};
const data = "";

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    let data = JSON.parse(response.body);
    let msg = data.msg;
    if (msg == "操作成功"){
      console.log("签到成功");
    }else if(msg == "请先登录哦"){
      console.log(msg);
      $notify("大大报签到", "", "Token失效，登录状态已退出");
    }else if(msg == "你已经签到过了哦"){
      console.log(msg);
    }else{
      console.log(msg);
      $notify("大大报签到", "", "未知错误");
    }
    
    //$notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("大大报签到", "", "运行异常，请手动重试"); // Error!
    $done();
});

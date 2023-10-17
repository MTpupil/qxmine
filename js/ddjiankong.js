/**
 * 每十分钟检测一次大大线报库羊毛列表，如果有新增羊毛推送本地及通过bark推送。
 * 
 */

const barkUrl = "https://api.day.app/pSyNTWnmVtPgeUepwNdMFb";

function bark(url, ...data) {

  const method = "POST";
  const requestData = Object.assign({}, ...data);

  const myRequest = {
    url: url,
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData) // Optional.
  };

  $task.fetch(myRequest).then(response => {
    //请求成功处理信息
    //发送本地通知
    //$notify("标题", "副标题", "内容"); 
    //console.log("输出日志")
    $done();
  }, reason => {
    //请求失败处理信息
    //发送本地通知
    //$notify("标题", "副标题", "内容"); 
    //console.log("输出日志")
    $done();
  });

}
//bark(barkUrl,{"title":"线报上新，快去看看吧"},{"body":"宝贝宝贝"},{"group":"线报监控"});


const url = `https://ym2.dadawz.cn/typechoMetas/selectContents?searchParams=%7B%22mid%22%3A1%2C%22type%22%3A%22post%22%7D&limit=10&page=1&order=created&token=%E6%9C%A8%E7%9E%B329f13247f26bbeb7d6cb1f17ca87405f`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `ym2.dadawz.cn`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/44) uni-app`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    //console.log(response.statusCode + "\n\n" + response.body);
    var list = [];
    let data = JSON.parse(response.body).data;
    /*for (var i = 0; i < data.length; i++) {
      var title = data[i].title;
      //titleList.push(title);
      
    }
    */
    var list = data.map(item => item.title);
    
    var oldList = $prefs.valueForKey("list").split(',');
    //var list = [3,4,5,6,7]
    //var oldList = [1,2,3,4,5]
    var added = String(list.filter(element => !oldList.includes(element)));
    /*
    console.log("新---" + list);
    console.log("旧---" + oldList);
    console.log("新增---" + added);
    */
    $prefs.setValueForKey(String(list) ,"list");
    if("" == added){
      //console.log("暂无新内容");
    }else{
      $notify("线报上新，快去看看吧","", added);
      bark(barkUrl,{"title":"线报上新，快去看看吧"},{"body":added},{"group":"线报监控"});
      console.log("新增内容:"+added);
    }
    
    
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

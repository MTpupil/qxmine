
/**
 * 实时了解抖音在线和离线情况
 * 
 */

//bark url
const barkUrl = "https://api.day.app/pSyNTWnmVtPgeUepwNdMFb";

//封装bark推送方法，支持不定参数
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

  
//bark(barkUrl,{"title":"宝贝宝贝的卡夫卡"},{"icon":"https://gd-hbimg.huaban.com/2938936cb736cac8a3addc1a83c8f5817435927412458-BZQHve_fw658"});
//bark(barkUrl,{"title":"状态变更通知"},{"body":"✅在线中"},{"group":"姐姐抖音在线"});

//抖音在线状态请求地址及参数
const url = `https://aweme.snssdk.com/aweme/v1/im/widget/info?ac=WIFI&version_code=26.8.0&vid=1E5AAF22-A537-4CAF-B82F-59CCA7AC40F9&aid=1128&device_platform=iphone&sys_region=en&os_version=16.5.1&device_type=iPhone11%252C8&app_name=aweme&build_number=268014&sec_uids=%5B%22MS4wLjABAAAAh4dfvMBVCn4KFf7S22ftjaL4UuGN2iqO9qcuH2-0W_c%22%5D`;
const method = `GET`;
const headers = {
'Cookie' : `install_id=4281933333574281; ttreq=1$70bc7d41478fed5141e8ff0ce6ab4b3ad6544945; store-region=cn-bj; store-region-src=uid; ticket_guard_has_set_public_key=1; sessionid=069cfde1f8b7908d41c2bd4527962326; sessionid_ss=069cfde1f8b7908d41c2bd4527962326; sid_guard=069cfde1f8b7908d41c2bd4527962326%7C1717040492%7C5184000%7CMon%2C+29-Jul-2024+03%3A41%3A32+GMT; sid_tt=069cfde1f8b7908d41c2bd4527962326; uid_tt=6bb1c57bb695beea0490ffcc99326dec; uid_tt_ss=6bb1c57bb695beea0490ffcc99326dec; multi_sids=67124646936%3A069cfde1f8b7908d41c2bd4527962326%7C4301711649293128%3A221a1d69b7e3cf102e9772aaef1e3628; n_mh=koV_5-qc17V8h6-SBlLQV8uSrPdqhsRDVPn2QW11x74; odin_tt=64f129bc0f044091646c1afaf60e7e1416c84907090a2eee91f4defe012b9e94406cd0e55bb95feee8feb6efddd4214f893aa11309884eef2f9941f9c3b0395d; passport_assist_user=Cjz7IiSw_SugKVCGPgjDkiRrFNGThhZDp1LQfbAf3tgMp27UjHqrIWI2hoMXqbU4G1ll_-ZgoQw5NSbRhEUaSgo8wOjgSIdZVryegIQ_5uEIz9-QLzsEqLyvII2GjA-bsnH2c2mHqJAhieSbfynsT78yeZVN57g4XxiADDeOEOzJ0A0Yia_WVCABIgEDwAnNGg%3D%3D; d_ticket=75f813f45ee3f8c804ca3d07f80ff4689e219; passport_csrf_token=89fe5790b9807c8daed715acc00d57a5; passport_csrf_token_default=89fe5790b9807c8daed715acc00d57a5; ttwid=1%7CWKo2qsN2roncZF2lgm9-elyf3OW-AkHPCQOTKRVmyXw%7C1698981717%7Cdbdcfe569b987ac00d229ab6c235d2afafb5d50abc4d58079f0ce042af7474ff`,
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-tt-token' : `00069cfde1f8b7908d41c2bd4527962326042b8b9d64672799f61d83b923a6081cf7c8a9952dc50dbf80d8e336761d650a1ccc553bfd8093ab8f93f8741ec6e00259f3cbfebdeb81a1e88e0ece2a46480fb9ca8737305f1a828fb6b750eb6eb9bd085-1.0.1`,
'Connection' : `keep-alive`,
'Host' : `aweme.snssdk.com`,
'User-Agent' : `AwemeWidgetExtension/268014 CFNetwork/1408.0.4 Darwin/22.5.0`,
'sdk-version' : `2`,
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
let data = JSON.parse(response.body).data[0];
    
    
    var isOnline = data.show_type;

    //var isOnline = "online";

    var name = data.avatar_title;
    var onlineTime = "0";
    
    //console.log($prefs.valueForKey("isOnline"))
    
    if ($prefs.valueForKey("isOnline") != isOnline){
      if (isOnline == "online"){
         $notify("状态变更通知", name, "✅在线中");
         bark(barkUrl,{"title":"状态变更通知"},{"body":"✅在线中"},{"group":"姐姐抖音在线"},{"icon":"https://gd-hbimg.huaban.com/2938936cb736cac8a3addc1a83c8f5817435927412458-BZQHve_fw658"});
         console.log("✅在线中");
         
         $prefs.setValueForKey(onlineTime,"onlineTime")
         
         
      }else{
         
         onlineTime = Number($prefs.valueForKey("onlineTime"));
         let formattedTime = "";

         if (onlineTime < 60) {
           formattedTime = onlineTime + "分钟";
         } else {
           const hours = Math.floor(onlineTime / 60);
           const remainingMinutes = onlineTime % 60;
           if (remainingMinutes === 0) {
             formattedTime = hours + "小时";
           } else {
             formattedTime = hours + "小时" + remainingMinutes + "分钟";
           }
         }
         
         $notify("状态变更通知", name, "❌已离线，本次在线时长:" + formattedTime);
         bark(barkUrl,{"title":"状态变更通知"},{"body":"❌已离线，本次在线时长:" + formattedTime},{"group":"姐姐抖音在线"},{"icon":"https://gd-hbimg.huaban.com/2938936cb736cac8a3addc1a83c8f5817435927412458-BZQHve_fw658"});
         console.log("❌已离线，本次在线时长:" + formattedTime);
      }
      $prefs.setValueForKey(isOnline,"isOnline");
      
    }else{
      //console.log("状态未变不通知")
      if (isOnline == "online"){
        
        onlineTime = Number($prefs.valueForKey("onlineTime")) + 1;
onlineTime = String(onlineTime)

//console.log(onlineTime);
        $prefs.setValueForKey(onlineTime,"onlineTime")
      }
    }
    //$prefs.setValueForKey(1,"isOnline")
    $done();
}, reason => {
    console.log(reason.error);
    //$notify("状态获取失败", "🔴🔴🔴", "请自行检查");
    $done();
});


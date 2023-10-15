
/**
 * 实时了解姐姐抖音在线和离线情况
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
'Cookie' : `store-region=cn-bj; store-region-src=uid; install_id=3723360071338979; ttreq=1$0198c1bcdaa14e4e904d83671b88452ee7f235cd; msToken=Ceh2aTfMpIM4sCwJAC6lTJAPkRZXpCVlWi6Uq_KVFfmHyboT4CYd_daE0aTTmG4YLGwQVY3LlPoXh5AItVDlBHHHyA==; sessionid=5fd3218aadcf21c073ad228f2a04e205; sessionid_ss=5fd3218aadcf21c073ad228f2a04e205; sid_guard=5fd3218aadcf21c073ad228f2a04e205%7C1693496449%7C4832881%7CThu%2C+26-Oct-2023+14%3A08%3A50+GMT; sid_tt=5fd3218aadcf21c073ad228f2a04e205; uid_tt=0053ac5aefe0dae0cc5f48633b0962c4; uid_tt_ss=0053ac5aefe0dae0cc5f48633b0962c4; passport_csrf_token=5f5bc5c710c2f8518d806019680fcf82; passport_csrf_token_default=5f5bc5c710c2f8518d806019680fcf82; n_mh=koV_5-qc17V8h6-SBlLQV8uSrPdqhsRDVPn2QW11x74; odin_tt=d2cd04153418ac257da493d0a63faec64953fc6bc64676a62b67a7da39a77fee9ada2f72b162d846ee3c2105fa335617b2a4750605cdde42cd0f8075095accc8; passport_assist_user=CjyUqtwmZxK3ctaBM8pjQUQhA6gbJ2uwDRkM46FBF6hjcPuCURXHzvgXlN8QX5fFR-4Dx9blJrAVkSJMfKIaSAo8A4XwFP26sike9hjOFTnI1oZDTNhCZyhEPH-NKALsjdGXziAZ1Aku1_hH1Sde68rTEelH_sYzEEQ0RX8GEK2Xtg0Yia_WVCIBA_306Ks%3D; d_ticket=e469b3f9d1a829b0f641ba4dd29d15cb9e219; hccesp_lttk=AAAAAgAAAAAAAAAFAAAAAQAAAAeBwwi0wpEfjLZ/jysd1s9QCWchDiLhoIWQDh8eY8Dk8gAAAAAAAAAAAAAAQCZcxctfvNL0sRhTfF8R1HxAjqPGTH65VkV1T5ujncizGfnF9gB8UmKQf/4l9m5jN4jzmIUY2vJ5KBXAEDITjgE=`,
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-tt-token' : `005fd3218aadcf21c073ad228f2a04e2050486aa5c13d883815258d7c1407db1bfda9f402a8fcf86a074e425559520537241320afd67fb48b57e316cf8a62d6ce1969a1a7c8e86e9918c59ed0a89cf82650e9bbac59ad696f10cbc8c0acaed9d93081-1.0.1`,
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


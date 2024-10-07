/*
 * 千变语音
 * 解锁所有语音无需看广告
 * 会员外显（无实际用处）
 * https://apps.apple.com/cn/app/%E5%8D%83%E5%8F%98%E7%8E%8B%E8%80%85%E5%8F%98%E5%A3%B0%E5%99%A8%E8%AF%AD%E9%9F%B3%E5%8C%85/id1575861885
 * 自用，只解锁广告，未关注其他位置。
 * by.木瞳科技Pro
 * 
 */


const vip = /^https?:\/\/www\.voicepackage\.xyz\/app\/(main\/account\/index|user\/userProfile|main\/home)/


if(vip.test($request.url)){
  let obj=JSON.parse($response.body);
  let result = obj.data;

  result.vip_expiration_time_show="木瞳定制";
  result.nickName="木瞳科技Pro";
  result.vipIsOverdue=false;
  result.exemptAb=true;
  if(result.user){
    result.isShowVip=true
    result.user.user_id=5201314
    result.user.vip_expiration_time_show="木瞳定制"
    result.user.vip_is_overdue=false
    result.user.partner=true
    result.user.nick_name="木瞳科技Pro"
    result.user.isSubscriptionUser=true
    result.user.vipIsOverdue=false
    }


  if ($request.url.includes("home")) {
    // 使用 replace 进行字符串替换
    let string = JSON.stringify(obj);
    string = string.replace(/"open_ad":true/g, '"open_ad":false')
    obj = JSON.parse(string);
  }

  // 返回修改后的 body
  let body=JSON.stringify(obj);
  $done({body})
}

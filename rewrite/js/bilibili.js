
/**
 * author=木瞳
 * desc=去除哔哩哔哩首页推荐流中的广告，仅去除广告类型板块，不去除创作推广型板块。
 *
 */

const SCRIPT_NAME='bilibili';

const user=/^https?:\/\/app\.bili(bili|api)\.(com|net)\/x\/v2\/feed\/index/;

if(user.test($request.url)){
  let obj=JSON.parse($response.body);
  let items = obj.data.items;
    
  items = items.filter(function(aa){
    
return aa.card_goto !== "ad_web_s";
  });
  obj.data.items = items;
  let body = JSON.stringify(obj);
  $done({body})
}

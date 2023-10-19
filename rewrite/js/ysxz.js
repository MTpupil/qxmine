/**
 * 云上写作破解svip
 * 公众号：木瞳科技Pro
 * [MITM]
 * hostname = *.yunshangxiezuo.com
 * 
 */


const SCRIPT_NAME='云上写作';

const user=/^https?:\/\/www\.yunshangxiezuo\.com\/api\/getAuthenticate_2/;

if(user.test($request.url)){
  let obj=JSON.parse($response.body);
  obj.data.user["vip"] = 1;
  obj.data.user["vip_forever"] = 1;
  obj.data.user["vip_last"] = "2099-12-13 00:00:00";
  let body = JSON.stringify(obj);
  $done({body})
}
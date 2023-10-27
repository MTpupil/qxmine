const userUrl = /^https?:\/\/api\.crucio\.hecdn\.com\/v12\/user/;

if(userUrl.test($request.url)){
    const obj = JSON.parse($response.body);
    const user = obj.data.users[0];
    user.is_svip = true;
    user.name = "木瞳科技"
    user.svip_expire_time = 4999999999;
    
    
    let body = JSON.stringify(obj);
    $done({body})
}
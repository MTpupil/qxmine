
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ssc.combmobile.com/tbc-portal/wechatPub/card/queryCardInfoDetail`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `ssc.combmobile.com`,
'User-Agent' : `BackgroundShortcutRunner/1505.1 CFNetwork/1408.0.4 Darwin/22.5.0`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = `{"iccid":"8986112323304715258","needFindVid":false}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    //console.log(response.statusCode + "\n\n" + response.body);

    let data = JSON.parse(response.body).data;

    let yUsed  = Number($prefs.valueForKey("yUsed"));
    let yUsedUnit = $prefs.valueForKey("yUsedUnit");
    let used = data.used;
    let usedUnit = data.usedUnit;
    let sixHourUsed = used - yUsed;
    $notify("流量使用通知", "总计使用" + used + usedUnit, "过去六小时已使用" + sixHourUsed + usedUnit);
    used = String(used);
    $prefs.setValueForKey(used,"yUsed");
    $prefs.setValueForKey(usedUnit,"yUsedUnit");
    



    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

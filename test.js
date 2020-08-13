
/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */
const url2 = "http://210.35.96.114/report/report/ssoCheckUser";
const headers2 = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
        "Content-Type": "application/json",
        "Host": "210.35.96.114",
        "Origin": "http://xgfy.sit.edu.cn",
        "Referer": "http://xgfy.sit.edu.cn/"};
const data2 = {"code":"171012Y118","pwd":"508623"};

const myRequest2 = {
    url: url2,
    method: method, // Optional, default GET.
    headers: headers2, // Optional.
    body: JSON.stringify(data2) // Optional.
};
const url1 = "http://210.35.96.114/report/report/todayReport";
const method = "POST";
const headers1 = {"Origin": "http://xgfy.sit.edu.cn",
        "Content-Type": "application/json",
        "ts": "1595817949995",
        "Host": "210.35.96.114",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
        "Referer": "http://xgfy.sit.edu.cn/",
        "decodes": "3D362A3E5456C66FBCB5D57977C86E31"};
const data1 = {
        "{\"wendu\":0,\"jttw\":-1,\"ksfl\":0,\"usercode\":\"171012Y118\",\"username\":\"周兵\",\"usertype\":2,\"jiguan\":3,\"currentsituation\":3,\"remarks\":\"\",\"deptno\":\"200100\",\"position\":\"浙江省-杭州市\",\"fanxiang\":0,\"lvyou\":0,\"jiechu\":0,\"jiechuqy\":0,\"isback\":0,\"jiaotongfangshi\":0,\"isinhubei\":0,\"notforegoing\":1,\"id\":3296191}": ""
    };

const myRequest1 = {
    url: url1,
    method: method, // Optional, default GET.
    headers: headers1, // Optional.
    body: JSON.stringify(data1) // Optional.
};

$task.fetch(myRequest2).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});
$task.fetch(myRequest1).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});


/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */

const url = "http://210.35.96.114/report/report/todayReport";
const method = "POST";
const headers = {"Origin": "http://xgfy.sit.edu.cn",
        "Content-Type": "application/json",
        "ts": "1595817949995",
        "Host": "210.35.96.114",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
        "Referer": "http://xgfy.sit.edu.cn/",
        "decodes": "3D362A3E5456C66FBCB5D57977C86E31"};
const data = {
        "{\"wendu\":0,\"jttw\":-1,\"ksfl\":0,\"usercode\":\"171012Y118\",\"username\":\"周兵\",\"usertype\":2,\"jiguan\":3,\"currentsituation\":3,\"remarks\":\"\",\"deptno\":\"200100\",\"position\":\"浙江省-杭州市\",\"fanxiang\":0,\"lvyou\":0,\"jiechu\":0,\"jiechuqy\":0,\"isback\":0,\"jiaotongfangshi\":0,\"isinhubei\":0,\"notforegoing\":1,\"id\":3296191}": ""
    };

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});

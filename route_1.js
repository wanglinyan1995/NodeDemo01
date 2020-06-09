var http = require('http');
var url = require('url');
var router = require('./moudule/route.js');

http.createServer((req, res) => {    //创建服务器

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let pathName = url.parse(req.url).pathname.replace(/\//,'')
    // 发送响应数据 "Hello World"
    router.route(pathName)
    res.end();
    // console.log(req,'=========')
    
}).listen(8888);

// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');
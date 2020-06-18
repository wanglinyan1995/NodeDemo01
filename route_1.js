var http = require('http');
var url = require('url');
var router = require('./moudule/route.js');

http.createServer((req, res) => {    //创建服务器
    if(req.url != '/favicon.ico'){
        // 发送 HTTP 头部  HTTP 状态值: 200 : OK  内容类型: text/html
        // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.writeHead(200, {'Content-Type': 'image/jpeg'});

        let pathName = url.parse(req.url).pathname.replace(/\//,'')
        
        try{
            router[pathName](req,res)
        }catch(err){
            router['home'](req,res)
        }
        // res.write("登录成功");
    }
    // res.end();
    
}).listen(8888);

// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');

let file = require('./file');
let url = require('url');

route = {
    home:function(req,res){
        // res.write('首页')
        
        file.readFile('./html/home.html',res,req)
    },
    login:function(req,res){
        let post = ''
        req.on('data',function(chunk){
            post += chunk
        })
        req.on('end',function(){
            file.postReadFile('./html/login.html',res,req,post)
        })
        // file.postReadFile('./html/login.html',res,req,post)

        // res.write('登录页面')
    },
    register:function(req,res){
        res.write('注册页面')
    },
    img:function(req,res){

        file.readImg('./img/banner02.jpg',res)
    },
} 
module.exports = route;
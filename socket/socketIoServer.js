var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var fs = require('fs')

app.get('/',function(req,res){
    function callback(data){
        res.send(data.toString)
    }
    fs.readFile('./socketIoclient.html',function(err,data){
        if(err){
            callback('文件不存在')
        }else{
            callback(data)

        }
    })
})
// app.get('./socket.io.js')

// Socket.io设置
var onlineUsers = {}
var onlineCount = 0
var i = 0

io.on('connection',function(socket){
    console.log('有人连上了了')
    socket.name = ++i
    onlineUsers[socket.name] = socket

    socket.on('disconnect',function(){
        console.log('有人退出了')
    })
    socket.on('message',function(msg){
        broadcast(msg,socket)
    })
    function broadcast(msg,ws){ //消息广播
        for(let key in onlineUsers){
            onlineUsers[key].send(socket.name + "say:" + msg +'\n')
        }
    }
})

http.listen( 9000,function(){
    console.log( "listening on :9000" );
});



// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 9000
});

// let webSocketServer = require('ws').Server,
//     wss = new webSocketServer({prot:9000})

let clientMap = new Object()

let i = 0 //连接名称流水号
wss.on('connection',function(ws){
    console.log(ws + '客户端有人连接')
    ws.name = ++i
    clientMap[ws.name] = ws 

    ws.on('message',function(message){    //对客户端发出消息的监听
        console.log('客户端传来了'+ message)
        broadcast(message,ws)
    })

    ws.on('error',function(e){    //错误信息处理
        console.log('ws error' + e)
        ws.end()
    })

    ws.on('close',function(data){    //客户端关闭事件
        // delete clientMap[ws.name]
        console.log(ws.name+'下线了')
        // broadcast(ws.name+'下线了',ws)

    })
})

function broadcast(msg,ws){ //消息广播
    for(let key in clientMap){
        clientMap[key].send(ws.name + "say:" + msg +'\n')
    }
}
// wss.listen(9000);

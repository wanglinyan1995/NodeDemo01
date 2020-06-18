const net = require('net')

let chatServer = net.createServer(),
    clientMap = new Object()

let i = 0 //连接名称流水号
chatServer.on('connection',function(client){
    console.log('客户端有人连接')
    client.name = ++i
    clientMap[client.name] = client 

    client.on('data',function(data){    //对客户端发出消息的监听
        console.log('客户端传来了'+data)
        broadcast(data,client)
    })

    client.on('error',function(e){    //错误信息处理
        console.log('client error' + e)
        client.end()
    })

    client.on('close',function(data){    //客户端关闭事件
        delete clientMap[client.name]
        console.log(client.name+'下线了')
        broadcast(client.name+'下线了',client)

    })
})

function broadcast(message,client){ //消息广播
    for(let key in clientMap){
        clientMap[key].write(client.name + "say:" + message +'\n')
    }
}
chatServer.listen(9000);

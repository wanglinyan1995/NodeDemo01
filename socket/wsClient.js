
// 打开一个WebSocket:
var ws = new WebSocket('ws://localhost:9000')
ws.onopen= function(){    //连接服务器
    console.log('你好')
    ws.send('你好')
}

ws.onmessage= function(event){    
    console.log(event.data)
    var chatroot = document.getElementById("chatroom")
    chatroom.innerHTML += `<br/>${event.data}`
}
ws.onclose= function(event){    
    console.log('关闭连接')
}
ws.onerror= function(err){    
    console.log(err)
}



const net = require('net')

let port = 9000
let host = '127.0.0.1'

const client = new net.Socket()
client.setEncoding = 'UTF-8'

client.connect(port,host,function(){    //连接服务器
    console.log('你好')
})

client.on('data',function(data){    //连接服务器
    console.log('服务端传来' + data)
    say()
})

client.on('error',function(e){    //错误信息处理
    console.log('client error' + e)
    client.end()
})

client.on('close',function(data){    //客户端关闭事件
    console.log('连接断开')

})

const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function say(){
    rl.question('请输入', (inputStr) => {
        if(inputStr != 'bay'){
            client.write(inputStr + "\n")
        }else{
            client.destroy()    //关闭连接
            rl.close()
        }
    });
}

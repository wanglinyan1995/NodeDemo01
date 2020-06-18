let fs = require('fs')
let queryString = require('querystring');

file = {
    readFile:function(file,res,req){
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.write(data)
            res.end()
        });
    },
    postReadFile:function(file,res,req,post){
        let useInfo = queryString.parse(post)
        let arr = ['email','password']
        let reg; 
        fs.readFile(file, 'utf-8',(err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            
            for(let i = 0;i< arr.length;i++){
                reg = new RegExp('{'+arr[i]+'}','gi','')
                data = data.replace(reg, useInfo[arr[i]])
            }
            // console.log(queryString.stringify(data))
            res.write(data)
            res.end()
        });
    },
    readImg:function(file,res){
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            // console.log(data);
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.write(data)
            res.end()
        });
    },
}

module.exports = file;

const fs = require('fs');


fs.stat('http.js', (err, stats) => {
    if (err) throw err;
    console.log(`文件属性: ${JSON.stringify(stats)}`);
    console.log(`是否是文件: ${stats.isFile()}`);
    console.log(`是否是目录: ${stats.isDirectory()}`);

  });
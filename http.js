let os = require("os");
let http = require("http");
let https = require("https");
let cheerio = require("cheerio");
let url = 'https://www.lagou.com/'

//爬取拉勾网列表数据
function Fileread(html){
    $ = cheerio.load(html)
    let menu = $('.menu_box')
    let menuTit = [] 
    let menulist = []
    let menuData = []
    
    menu.each(function(index,value){
        menuTit.push($(this).find('h2').text().trim())
        let menuArr = {}
        for(let i = 0;i <= $(this).find('.category-list').find('h3').length-1;i++){
            menuArr[i] = $(this).find('.category-list').find('h3').eq(i).text().trim()
        }
        menulist.push(menuArr)
    })
    menuTit.forEach((value,index) => {
        menulist.forEach((value2,index2) => {
            menuData[value] = menulist[index2]
        })
    });

    console.log(menuData,'最终获取的数据[{},{}]')

}
https.get(url,(req,res)=>{
    var html = ''
    req.on('data', (data) => {
        html+=data
        // console.log(buf.toString(html),'注意，这儿返回的是buffer数据转成字符串')
    });
    //end事件
    req.on('end',()=>{  
        // console.log("最后返回的整体数据是:");
        // console.log(html);		
        Fileread(html)

    });  
    
})
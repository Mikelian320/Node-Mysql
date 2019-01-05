var http = require('http');
var url= require('url');
var optFile=require('./Modules/optFile')
var selectDB=require('./Modules/selectDB')
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if (request.url!=="/favicon.ico") {
        function recall(data){
            response.write(data);
            response.end('');
        }
        if(request.url.indexOf('DB')==-1){
            var pathName=url.parse(request.url).pathname;
            pathName='./Html'+pathName.slice(0,pathName.indexOf('.'))+pathName;
            console.log(pathName);
            optFile.readfile(pathName,recall);
            console.log('页面访问！');
        }else{
            var operateData=url.parse(decodeURI(request.url),true).query;
            console.log('数据库操作');
            console.log(operateData);
            selectDB.selectData(operateData,recall);
        }
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
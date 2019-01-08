var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'lian',
	password:'123456',
	port:'3306',
	database:'test',
});

connection.connect();

var addSql ='INSERT INTO trainList(trainID,startStation,endStation,startTime,reachTime,businessPrice,firstclassPrice,secondclassPrice) VALUES(?,?,?,?,?,?,?,?)';
var addParams=['G143','北京南','上海虹桥','07:50','13:12','1748','933','553'];
connection.query(addSql,addParams,function(err,result){
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}
	console.log('------------------INSERT-------------------');
	console.log(result);
	console.log('-------------------------------------------');
});

connection.end();

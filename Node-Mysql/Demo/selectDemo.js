var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'123.206.96.184',
	user:'lian',
	password:'123456',
	port:'3306',
	database:'test',
});
connection.connect();
var sql ="SELECT * FROM trainList WHERE startStation LIKE ?";
//var sql ="SELECT * FROM trainList";
var params=['北京%'];
connection.query(sql,params,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	console.log('------------------SELECT-------------------');
	console.log(result);
	console.log('-------------------------------------------');
});

connection.end();

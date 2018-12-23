var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'123.206.96.184',
	user:'lian',
	password:'123456',
	port:'3306',
	database:'test',
});

connection.connect();

var sql ='UPDATE trainList SET businessPrice=? WHERE trainID=?';
var params =['1765','G143'];
connection.query(sql,params,function(err,result){
	if(err){
		console.log('[UPDATE ERROR] - ',err.message);
		return;
	}
	console.log('------------------UPDATE-------------------');
	console.log(result);
	console.log('-------------------------------------------');
});

connection.end();
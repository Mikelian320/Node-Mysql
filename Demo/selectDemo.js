var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'lian',
	password:'123456',
	port:'3306',
	database:'test',
});

connection.connect();

var sql ='SELECT * FROM trainList';
connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	console.log('------------------SELECT-------------------');
	console.log(result);
	console.log('-------------------------------------------');
});

connection.end();

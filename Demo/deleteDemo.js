var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'123.206.96.184',
	user:'lian',
	password:'123456',
	port:'3306',
	database:'test',
});

connection.connect();

var sql ='DELETE FROM trainList WHERE trainID="G143"';
connection.query(sql,function(err,result){
	if(err){
		console.log('[DELETE ERROR] - ',err.message);
		return;
	}
	console.log('------------------DELETE-------------------');
	console.log(result);
	console.log('-------------------------------------------');
});

connection.end();

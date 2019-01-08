var mysql = require('mysql');
var interface= require('./interface');
module.exports={
	selectData:function(operateData,recall) {
		var connection = mysql.createConnection({
			host:interface.SQL.host,
			user:interface.SQL.user,
			password:interface.SQL.password,
			port:interface.SQL.port,
			database:interface.SQL.database,
		});
		connection.connect();
        var sql ="SELECT * FROM trainList WHERE startStation LIKE ? And endStation LIKE ?";
        var params=[operateData.startStation+'%',operateData.endStation+'%'];
		connection.query(sql.toString(),params,function(err,result){
			if(err){
				console.log('[SELECT ERROR] - ',err.message);
				return;
			}
			console.log('------------------SELECT-------------------');
			console.log(result);
            console.log('-------------------------------------------');
            recall(JSON.stringify(result));
		});
		connection.end();
	}
}

var mysql = require('mysql');
module.exports={
	selectData:function(operateData,recall) {
		var connection = mysql.createConnection({
			host:'loacalhost',
			user:'lian',
			password:'123456',
			port:'3306',
			database:'test',
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
            recall(result);
		});
		connection.end();
	}
}

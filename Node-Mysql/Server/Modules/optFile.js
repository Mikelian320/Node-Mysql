var fs=require('fs');
module.exports={
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if (err) {
                console.log(err);
            } else {
                recall(data);
            }
        });
       // console.log('异步方法执行完毕');
    }
}
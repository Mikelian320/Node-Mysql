function createTable(data){
        if(data.length!=0){
          document.write("<table border='1'><tr><th>车次</th><th>始发站</th><th>终点站</th><th>出发时间</th><th>到达时间</th><th>商务座</th><th>一等座</th><th>二等座</th></tr>");
          for(i=0;i<data.length;i++){
            document.write("<tr><td>"+data[i].trainId+"</td><td>"+data[i].startStation+"</td><td>"+data[i].endStation+"</td><td>"+data[i].startTime+"</td><td>"+data[i].reachTime+"</td><td>"+data[i].businessPrice+"</td><td>"+data[i].firstclassPrice+"</td><td>"+data[i].secondclassPrice+"</td></tr>");
          }
          document.write("</table>");
        }else{
          document.write("<text>抱歉，无相关车次信息！</text>");
        }
}
window.onload=function(){
  var url=decodeURI(window.location.href);
   var str=url.split("?")[1];
   var items=str.split("&");
   fetch('http://localhost:8000/selectDB'+'?startStation='+items[0]+'&endStation='+items[1]+'&startDate='+items[2])
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject({
            status:response.status,
            statusText:response.statusText
        })
      }
    })
    .then(data=>{
      console.log('data is', data);
      createTable(data);
   })
    .catch(error => console.log('error is', error.status,error.statusText));
   }

 

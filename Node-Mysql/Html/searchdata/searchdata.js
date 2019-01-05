
window.onload=function(){
  var url=decodeURI(window.location.href);
   var str=url.split("?")[1];
   var items=str.split("&");
 fetch('http://localhost:8000/selectDB'+'?startStation='+items[0]+'&endStation='+items[1]+'&startDate='+items[2])
 .then(response => {
   if (response.ok) {
       console.log(response.data);
     return response.json()
   } else {
     return Promise.reject({
         status:response.status,
         statusText:response.statusText
     })
   }
 })
 .then(data => console.log('data is', data))
 .catch(error => console.log('error is', error.status,error.statusText));
}
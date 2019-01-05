function navtoSearch() {
    var startStation=document.getElementById("startStation");
    var endStation=document.getElementById("endStation");
    var startDate=document.getElementById("startDate");
    var startStationtext=startStation.options[startStation.selectedIndex].text;
    var endStationtext=endStation.options[endStation.selectedIndex].text;
    var startDatetext=startDate.value;
    try {
        window.location.assign(encodeURI("http://localhost:8000/searchdata.html"+"?"+startStationtext+"&"+endStationtext+"&"+startDatetext));
        document.getElementById("demo").innerHTML=startStationtext;
       // window.location.assign("http://localhost:8000/searchdata.html");
    } catch (error) {
        alert('error');
    }
}
function show() {   
}
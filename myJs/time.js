function getDate(){
	var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
	let day = date.getDay();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
   document.getElementById("year").innerHTML=year;
   document.getElementById("month").innerHTML=month;
   document.getElementById("day").innerHTML=day;
   document.getElementById("hour").innerHTML=hour;
   document.getElementById("minute").innerHTML=minute;
   document.getElementById("second").innerHTML=second;
}
//使用定时器每秒向div写入当前时间
setInterval("getDate()",1000);
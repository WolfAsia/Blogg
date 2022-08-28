"use strict";
/*
 *Your Ajax Server Here if it was not defined in html site-config element, 
 * use internal url (such as './ajaxserver/server.php') or 
 * external URL such as:  url: 'http://www.example.com/avenir/ajaxserver/server.php'
 * depending to your requirements
 */
var message_server_url = './myJs/serve.php';
//Check if action attribute (which indicates server) of form tag is set, then choose it (low 

//访客增加
	var form_data = {};
	form_data.submit_message = "add";
	$.post(message_server_url,form_data,function(json) {
		json = JSON.parse(json);
	    if (json.result=="1"||json.result=='1'||json.result==1) {
	       // notify user that message has been sent
		  document.getElementById('number').innerHTML=json.number;
	    }
	    // Else the login credentials were invalid.
	    else {
	        /* show validation error */
	    
	    }
	})
		
//获取留言
	var form_data = {};
	form_data.submit_message = "get";
	$.post(message_server_url,form_data,function(json) {
		json = JSON.parse(json);
	    if (json.result=="1"||json.result=='1'||json.result==1) {
	       // notify user that message has been sent
		  var html = "";
		  var list = json.list;
		  for(var i = 0; i < list.length; i++){
			  var record = list[i]
			  html = html+ "<li> <img src='svg/profile.png' alt='1' height='10%' width='10%'>"+record[1]+" : "+record[3]+" </li>";
		  }
		  document.getElementById('msg_content').innerHTML = html;
		  var msg_number = list.length;
		  var msg_number1 = msg_number.toString();
		  document.getElementById('msg_number').innerHTML = msg_number1;
	    }
	    // Else the login credentials were invalid.
	    else {
	        /* show validation error */
	    
	    }
	})
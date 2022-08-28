"use strict";
/*
 *Your Ajax Server Here if it was not defined in html site-config element, 
 * use internal url (such as './ajaxserver/server.php') or 
 * external URL such as:  url: 'http://www.example.com/avenir/ajaxserver/server.php'
 * depending to your requirements
 */
var message_server_url = './myJs/serve.php';
//Check if action attribute (which indicates server) of form tag is set, then choose it (low 


if($('.send_message_form').attr('action') && ($('.send_message_form').attr('action') != '')){
    message_server_url = $('.send_message_form').attr('action');
}



var send=function(p){
	var form_fill = $(p);
   // Get the form data.
	var form_inputs = form_fill.find(':input');
	var form_data = {};
	form_inputs.each(function () {
	    form_data[this.name] = $(this).val(); 
	});
	console.log(form_data);
	$.post(message_server_url,form_data,function(json) {
	    console.log(json);
		json = JSON.parse(json);
	    if (json.result=="1"||json.result=='1'||json.result==1) {
	       // notify user that message has been sent
		  
	      $('.send_message_form input').val("");
	      $('.send_message_form textarea').val("");
	      $('.message-ok').removeClass('invisible');
	    }
	    // Else the login credentials were invalid.
	    else {
	        /* show validation error */
	        $('.message').html(json.error);
	    }
	})
}

$('.send_message_form').submit(function (event) {
        event.preventDefault();
        console.log('准备发送');
        send(this);
});


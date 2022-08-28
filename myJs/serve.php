<?php
$servername = "数据库url";
$username = "用户名";
$password = "密码";
 
 //返回数据对象
 $response = array();
 $res = array('res'=>false);
 
// 创建连接
$conn = new mysqli($servername, $username, $password, "数据库名");
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}else{
	
	
	$action = "read";
	
	if(isset($_POST['submit_message'])){
		$action  = $_POST['submit_message'];
	}
	
	if($action=="add")
	{
		$conn -> set_charset('UTF-8');             // 设置数据库字符集
		$sql = "select number from number where id='0'";     // SQL 语句
		$result = $conn -> query($sql);            // 执行上面的 SQL 语句
		$number = $result -> fetch_row()[0];
		$number = $number + 1;
		$sql = "update number set number='$number' where id='0'";
		$result1 = $conn -> query($sql);
		if($result){
			$response['result'] = '1';
			$response['number'] = $number;
		}else{
			$response['result'] = '0';
			$response['number'] = $number-1;
		}
	}
	
	if($action=="send")
	{
		$name=$_POST['name'];
		$email=$_POST['email'];
		$message=$_POST['message'];
		date_default_timezone_set('PRC');
		$time=date('Y-m-d h:i:s', time());
		$conn -> set_charset('UTF-8');             // 设置数据库字符集
		$sql = "insert into message(name,email,msg,time) values('$name','$email','$message','$time')";     // SQL 语句
		$result = $conn -> query($sql);            // 执行上面的 SQL 语句
		if($result){
			$response['result'] = '1';
			$response['success'] = '留言成功啦(*^_^*)';
		}else{
			$response['result'] = '0';
			$response['error'] = '留言失败了/(ㄒoㄒ)/~~';
		}
	}
	
	if($action=="get"){
		$conn -> set_charset('UTF-8');             // 设置数据库字符集
		$sql = 'select * from message order by time desc';     // SQL 语句
		$result = $conn -> query($sql);            // 执行上面的 SQL 语句
		$data = $result -> fetch_all();
		$response['result'] = '1';
		$response['list'] = $data;
	}
	
	$conn -> close();
	
}

echo json_encode($response);
?>
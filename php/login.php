<?php
/*连接后端数据库*/
include "./base.php";
if (!$link) {
    echo "连接失败";
    exit;
}
/*获取数据*/
$username = $_GET['username'];
$password = $_GET['password'];
/*执行sql语句和数据库数据对比*/
$sql = "SELECT * FROM `mi_vip` WHERE `username`='$username'";
$res = mysqli_query($link, $sql);
$data = mysqli_fetch_assoc($res);
/*判断用户是否存在*/
if (!$data) {
    $arr = ['status' => 0, 'msg' => '用户不存在'];
} else {
    if ($data['password'] !== $password) {
        $arr = ['status' => 0, 'msg' => '密码错误'];
    } else {
        $arr = ['status' => 1, 'msg' => '登录成功'];
    }
};
echo json_encode($arr);

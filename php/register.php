<?php
include './base.php';
$username = $_POST['username'];
$password = $_POST['password'];
/*判断该用户名是否存在*/
$sql1 = "SELECT * FROM `mi_vip` WHERE `username`='$username' ";
$res1 = mysqli_query($link, $sql1);
$data = mysqli_fetch_assoc($res1);
if ($data) {
    $arr = ["meta" => ["status" => 2, "msg" => "用户名被占用"]];
} else {
    /*往数据库中添加数据*/
    $sql2 = "INSERT INTO `mi_vip`(`username`,`password`) VALUES('$username','$password')";
    $res2 = mysqli_query($link, $sql2);
    if ($res2) {
        $arr = ['status' => 1, 'msg' => '添加成功'];
    } else {
        $arr = ['status' => 0, 'msg' => '添加失败'];
    }
}

echo json_encode($arr);

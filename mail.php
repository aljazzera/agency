<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

header('Content-Type: text/html; charset=utf-8');

if ($name && $phone != '') {
    $subject = 'Новая заявка! - '.$_SERVER['HTTP_REFERER'];
    $addressat = "norfelatto@gmail.com";
    $message = "Имя: {$name}\nТелефон: {$phone}\nПочта: {$email}\nСообщение: {$message}";  
    $verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\nFrom: noreply@maks.top\n");
} 

?>

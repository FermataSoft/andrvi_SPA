<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './plugins/PHPMailer-6.6.3/src/Exception.php';
require './plugins/PHPMailer-6.6.3/src/PHPMailer.php';
require './plugins/PHPMailer-6.6.3/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', './plugins/PHPMailer-6.6.3/language/');
$mail->IsHTML(true);

// //Enable SMTP debugging.
// $mail->SMTPDebug = 3;
// //Set PHPMailer to use SMTP.
// $mail->isSMTP();
// //Set SMTP host name
// $mail->Host = "smtp.gmail.com";
// //Set this to true if SMTP host requires authentication to send email
// $mail->SMTPAuth = true;
// //Provide username and password
// $mail->Username = "";
// $mail->Password = "";
// //If SMTP requires TLS  encryption then set it
// $mail->SMTPSecure = "tls";
// //Set TCP port to connect to
// $mail->Port = 587;

// От кого письмо
$mail->setFrom('officialpage@andrvi.com', 'AndrVi Official Page');
// Кому отправить
$mail->addAddress('subneck@gmail.com');
// Тема письма
$mail->Subject = 'AndrVi Official Page [SubmitForm]';

$body = 'Тестовый текст';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p?><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

// Отправка
if (!$mail->send()) {
    $message = 'Ошибка отправки';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

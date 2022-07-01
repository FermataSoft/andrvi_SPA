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

// От кого письмо
$mail->setFrom('officialpage@andrvi.com', 'AndrVi Official Page');
// Кому отправить
$mail->addAddress('subneck@gmail.com');
// Тема письма
$mail->Subject = 'AndrVi Official Page [SubmitForm]';

$body = 'Данное письмо отправлено с сайта andrvi.com';

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

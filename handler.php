<?php
$user_name = htmlspecialchars($_POST["username"]);
$user_phone = htmlspecialchars($_POST["userphone"]);
$token = "8289942381:AAElelPE2rdUyPpWCrtPpMeTkyFOfQhPVl8";
$chat_id = "-5525062708";
$text = "Клиент: <b>" . htmlspecialchars($user_name, ENT_HTML5, 'UTF-8') . "</b>\n" . "Телефон: <b>" . htmlspecialchars($user_phone, ENT_HTML5, 'UTF-8') . "</b>";

$formData = array(
  "Клиент: " => $user_name,
  "Телефон: " => $user_phone
);
foreach($formData as $key => $value){
  $text .= $key . "<b>" . urlencode($value) . "</b>" . "%0A";
}
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");
if ($sendToTelegram) {
  echo "Success";  
} else {
  echo "Error";
}


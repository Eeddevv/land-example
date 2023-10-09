<?php

/* https://api.telegram.org/bot1437320354:AAE0VTnj_rwL6-V8pBRPjR0W4lJV_4u5LFY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$ids = $_POST ['ids'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$Miasto = $_POST['Miasto'];
$Kod = $_POST['Kod'];
$Adres = $_POST['Adres'];
$Email = $_POST['Email'];



$token = "1437320354:AAE0VTnj_rwL6-V8pBRPjR0W4lJV_4u5LFY";
$chat_id = "-883231220";
$arr = array(

  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Город: ' => $Miasto,
  'Индекс: ' => $Kod,
  'Адрес: ' => $Adres,
  'Еmail: ' => $Email,
  'Штук: ' => $ids,

);
$txt = "";
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: spasibo/index.html');
} else {
  echo "Error";
}
?>
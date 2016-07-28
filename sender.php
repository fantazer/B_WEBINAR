<? 
 //если проблемы с кодировкой файла сохранить его в другой
    $name = $_POST['name']; // пришедшие переменные
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];
    
    $db = new SQLite3('webinar.db');
    if ($db) {
        $db->exec("INSERT INTO
            Information(Name,Question,Email,Telefon)
            VALUES
            ('$name','$text','$email','$phone')");
    }

    //$to = 'o.fomina@itexpert.ru,kab@itexpert.ru,a.rybalkin@itexpert.ru';
    $to = 'kuznecovs45@gmail.com';  
    $subject = 'WEBINAR';
    $body = "Mail:<br><br>          
            name: <strong>$name</strong><br>   
            E-mail: <strong>$email</strong><br>
            phone: <strong>$phone</strong><br>  
            text: <strong>$text</strong><br>  
  
            ";

    $headers = array(); 
    $headers[] = "MIME-Version: 1.0"; 
    $headers[] = "Content-type: text/html; charset=utf-8"; 
    $headers[] = "Subject: {$subject}"; 
    $headers[] = "From: WEBINAR@itexpert.ru";  
    $headers[] = "X-Mailer: PHP/".phpversion();
       
    mail($to,  $subject, $body, implode("\r\n", $headers));
   
?>
<?php

$angularJSData = json_decode(file_get_contents("php://input"));
$data = (array)$angularJSData;

$company = $data['company'];
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

$mailTo = 'info@petzka.com';
$nameTo = 'Moritz Petzka';

/****** EMAIL ******/
$subjectMain = 'Anfrage von '.$name.' ('.$email.')';
$headerMail  = 'MIME-Version: 1.0' . "\r\n";
$headerMail .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headerMail .= 'To: '.$nameTo.' <'.$mailTo.'>' . "\r\n";
$headerMail .= 'From: '.$name.' <'.$email.'>' . "\r\n";

$mailMain  = '
    <html>
    <head>
      <title>'.$subjectMain.'</title>
    </head>
    <body>
      <p>
        <b>Nachricht</b><br />
        '.$message.'
        </p>
      <table>
        <tr>
          <th>Von</th><td></td>
        </tr>
        <tr>
          <th>Firma</th><td>'.$company.'</td>
        </tr>
        <tr>
          <th>Name</th><td>'.$name.'</td>
        </tr>
        <tr>
          <th>Tel.</th><td>'.$phone.'</td>
        </tr>
        <tr>
          <th>Email</th><td><a href="mailto:'.$email.'">'.$email.'</a></td>
        </tr>
      </table>
    </body>
    </html>
';

/****** Confirmation ******/

$subjectConfirm = 'Ihre Anfrage an Moritz Petzka';
$headerConfirm  = 'MIME-Version: 1.0' . "\r\n";
$headerConfirm .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headerConfirm .= 'To: '.$name.' <'.$email.'>' . "\r\n";
$headerConfirm .= 'From: '.$nameTo.' <'.$mailTo.'>' . "\r\n";

$mailConfirm  = '
    <html>
    <head>
       <title>'.$subjectConfirm.'</title>
    </head>
    <body>
      <p>
        <b>Vielen Dank f&uuml;r Ihre Anfrage!</b><br /><br />
        Ich werde mich so schnell wie m&ouml;glich bei Ihnen melden.<br /><br />
        Mit besten Gr&uuml;&szlig;en,<br />
        '.$nameTo.'<br /><br />
        <a href="mailto:'.$mailTo.'">'.$mailTo.'</a>
      </p>
    </body>
    </html>
';

/****** SEND MAILS ******/
if($email){
    mail($mailTo, $subjectMain, $mailMain, $headerMail);
    mail($email, $subjectConfirm, $mailConfirm, $headerConfirm);
}

?>

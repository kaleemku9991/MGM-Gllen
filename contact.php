<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
  $fname = $_POST['fname'];
  $email = $_POST['email'];
  $message = $_POST['comment'];
  $lname = $_POST['lname'];
  $title = $_POST['title'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $street = $_POST['street'];
  $zip = $_POST['zip'];
  $phone = $_POST['phone'];
  $company = $_POST['company'];


  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your@gmail.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = ''; // Gmail address Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('your@gmail.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('your@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Message Received (Contact Page)';
    $mail->Body = "<h3>First Name : $fname <br>Last Name: $lname <br>Title : $title <br>email : $email <br>Phone: $phone <br>Company : $company <br>Address : $address <br>City: $city <br>Street : $street<br>Zip : $zip <br>Comment: $message</h3>";

    $mail->send();
    $alert = '<div class="alert-success">
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>


<?php
if(isset($_POST['submit'])){
$email="email";
$to_email = "kaleemku9991@gmail.com";
$subject = "Simple Email Test via PHP";
$body = "Hi, This is test email send by PHP Script";
$headers = "From: eb19102033.kaleemullah@gmail.com";

if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "Email sending failed...";
}

}
?>

<?php
require 'path/to/PHPMailerAutoload.php';

// Create a new PHPMailer instance
$mail = new PHPMailer;

// SMTP configuration
$mail->isSMTP();
$mail->Host = 'smtp.example.com';  // Specify your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'your_username';  // SMTP username
$mail->Password = 'your_password';  // SMTP password
$mail->SMTPSecure = 'tls';  // Enable TLS encryption, 'ssl' also accepted
$mail->Port = 587;  // TCP port to connect to

// Email content
$mail->setFrom('sender@example.com', 'Sender Name');
$mail->addAddress('recipient@example.com', 'Recipient Name');
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test email';

// Send the email
if ($mail->send()) {
    echo 'Email sent successfully';
} else {
    echo 'Failed to send email: ' . $mail->ErrorInfo;
}
?>
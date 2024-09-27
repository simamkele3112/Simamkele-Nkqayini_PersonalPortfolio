<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Step 2.1: Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Step 2.2: Set the recipient email address (your email)
    $to = "simamkelen3112@gmail.com"; // Replace with your email address

    // Step 2.3: Set the email subject
    $subject = "New Message from Contact Form";

    // Step 2.4: Prepare the email body
    $body = "You have received a new message from your contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Step 2.5: Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Step 2.6: Send the email using PHP mail() function
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
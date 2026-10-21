<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
echo "<h1>Form Submitted Successfully</h1>";
echo "<p>Name: $name</p>";
echo "<p>Email: $email</p>";
} else {
echo "Form submission failed.";
}
?>
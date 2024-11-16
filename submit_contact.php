<?php
// Local Database credentials
/* $servername = "localhost";
$username = "root";
$password = "";
$dbname = "justonsdb"; */

// Live Database credentials
$servername = "localhost";
$username = "justonservice";
$password = "uXxrHBgk)aAr";
$dbname = "justonsdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data from POST
$name = $_POST['name'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$requirement = $_POST['requirement'];

// Prepare the SQL query to insert the data
$sql = "INSERT INTO event_contact (name, mobile, city, services) VALUES ('$name', '$contact', '$address', '$requirement')";

// Execute the query and check if the data was inserted successfully
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
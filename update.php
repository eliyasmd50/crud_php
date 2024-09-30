<?php
header('Content-Type: application/json');
include('./dbConnect.php');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'])) {
    $id = mysqli_real_escape_string($conn, $data['id']);
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $phone = mysqli_real_escape_string($conn, $data['phone']);
    $position = mysqli_real_escape_string($conn, $data['position']);

    $sql = "UPDATE users SET name='$name', email='$email', phone_number='$phone', position='$position' WHERE id='$id'";
    
    if (mysqli_query($conn, $sql)) {
        echo json_encode(['message' => 'User updated successfully']);
    } else {
        echo json_encode(['error' => 'Error updating user']);
    }
} else {
    echo json_encode(['error' => 'No user ID provided']);
}

mysqli_close($conn);
?>

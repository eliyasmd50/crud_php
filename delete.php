<?php
header('Content-Type: application/json');
include("./dbConnect.php");

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'])) {
    $id = mysqli_real_escape_string($conn, $data['id']);
    
    $sql = "UPDATE employee SET deleted_at = NOW() WHERE id = `$id`";
    
    if (mysqli_query($conn, $sql)) {
        echo json_encode(['message' => 'User Removed successfully']);
    } else {
        echo json_encode(['error' => 'Error deleting user']);
    }
} else {
    echo json_encode(['error' => 'No user ID provided']);
}

mysqli_close($conn);
?>

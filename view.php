<?php

include("./dbConnect.php");

try {
  $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = 10; 
$offset = ($page - 1) * $limit;

$totalResult = mysqli_query($conn, "SELECT COUNT(*) AS total FROM employee");
$totalRow = mysqli_fetch_assoc($totalResult);
$total = $totalRow['total'];
$totalPages = ceil($total / $limit);

$sql = "SELECT * FROM employee LIMIT $limit OFFSET $offset";
$result = mysqli_query($conn, $sql);

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

mysqli_close($conn);


header('Content-Type: application/json');
echo json_encode([
    'totalPages' => $totalPages,
    'currentPage' => $page,
    'data' => $data
]);
}
catch(Exception $e) {
  echo json_encode(['message' => 'Data is not returned']);
  echo $e-> getMessage();
}
?>
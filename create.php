<?php

include("./dbConnect.php");

  try{
    $json = file_get_contents("php://input");
    if ($json === false) {
        throw new Exception("Failed to read input");
    }

    $data = json_decode($json, true);
    if ($data === null) {
        throw new Exception("Failed to decode JSON: " . json_last_error_msg());
    }


    if (!isset($data["employee_name"]) || !isset($data["phone"]) || !isset($data["email"]) || !isset($data["position"])) {
        throw new Exception("Missing required fields");
    }

    $name = mysqli_real_escape_string($conn, $data["employee_name"]);
    $phone = mysqli_real_escape_string($conn, $data["phone"]);
    $email = mysqli_real_escape_string($conn, $data["email"]);
    $position = mysqli_real_escape_string($conn, $data["position"]);

   $sql = "INSERT INTO employee (name, phone_number, email, position) 
                                  VALUES ('$name', '$phone', '$email', '$position')";
    mysqli_query($conn, $sql);

    mysqli_close($conn);
    echo json_encode(['message' => 'Employee Details Inserted Successfully']);
    
  }
  catch(Exception $e){
    echo json_encode(['message' => 'Employee Details is Incorrect Format']);
  }



?>
<?php
    $mode = "dark";
    $name = "Eliyas";
    $greeting = "Hello";
    //data types
    $num = 42; #number
    $doub = 43.5; #double
    $bool = true; # boolean
    $arr = array('1', '2', '3'); #array

    //const definition
    define('DAYS_IN_YEAR', 365);

    //compound 
    $counter = 1;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>quick intro to php</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body <?php if($mode === "dark"): ?> class="dark" <?php endif ?>>
    <h1>
        <?php 
        $greeting .= ", How are you ?";
        echo $greeting . " <br>" . $name . "!";
        ?>
    </h1>
    <h1>
        <?php 
        echo DAYS_IN_YEAR % 2;
        ?>
    </h1>
    <h1>
        <?php
            $counter--;
            echo $counter;
        ?>
    </h1>
</body>
</html>
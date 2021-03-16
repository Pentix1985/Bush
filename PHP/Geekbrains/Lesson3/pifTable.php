<?php
    $table = '<table>';
    $i = 1;
    while($i <= 10) {
        $table .= '<tr>';
        $j = 1;
        while ($j <= 10) {
            $table .= "<td>" . ($j * $i) . "</td>";
            $j++;
        }
        $table .= '</tr>';
        $i++;
    }
    $table .= '</tabel>';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pifTable</title>
</head>
<body>
    <?= $table ?>
</body>
</html>
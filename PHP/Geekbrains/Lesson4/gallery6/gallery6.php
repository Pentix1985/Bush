<?php
    include("config/config.php");
    include("engine/engine.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
    <title>gallery6</title>
</head>
<body>
        <?php
            include("../gallery6/templates/header.php");
            $pathToBigIMG = $bigImagesFolder . $_FILES['photo']['name'];
            $pathToSmallIMG = $smallImageFolder . $_FILES['photo']['name'];

            if(move_uploaded_file($_FILES['photo']['tmp_name'], $pathToBigIMG)) {
                copy($pathToBigIMG, $pathToSmallIMG);
                resize($pathToSmallIMG, false, 255);
            };
            
        ?>

    <div class="container">
        <?php
            include("../gallery6/templates/main.php");
        ?>
    </div>

        <?php
            include("../gallery6/templates/footer.php");
        ?>
</body>
</html>
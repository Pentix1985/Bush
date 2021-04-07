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
    <title>gallery5</title>
</head>
<body>
        <?php
            include("../gallery5/templates/header.php");
            $pathToIMG = "public/img/gallery_img/" . $_FILES['photo']['name'];
            move_uploaded_file($_FILES['photo']['tmp_name'], $pathToIMG);
        ?>

    <div class="container">
        <?php
            include("../gallery5/templates/main.php");
        ?>
    </div>

        <?php
            include("../gallery5/templates/footer.php");
        ?>
</body>
</html>
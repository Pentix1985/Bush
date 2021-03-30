<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
    <title>gallery2</title>
</head>
<body>
<!-- 2. *Строить фотогалерею, не указывая статичные ссылки к файлам, а просто передавая в функцию построения адрес папки с изображениями. Функция сама должна считать список файлов и построить фотогалерею со ссылками в ней. -->
        <?php
            include("../gallery2/templates/header.php");
        ?>

    <div class="container">
        <?php
            include("../gallery2/templates/main.php");
        ?>
    </div>

        <?php
            include("../gallery2/templates/footer.php");
        ?>
</body>
</html>
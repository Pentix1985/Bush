<?php
    include("config/config.php");
    $images = scandir($imagesFolder);
?>

<main>
    <?php for($i = 2; $i < count($images); $i++):?>
        <a href="engine/image.php?path=<?= $imagesFolder . $images[$i] ?>" target="_blank"><img src=<?= $imagesFolder . $images[$i] ?>></a>
    <?php endfor ?>
</main>
<?php
  /*
  Template Name: Home
 */
  $dataHome = get_fields();

  // echo "<prev>";
  // print_r ($dataHome);
  // exit;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="<?php echo $getLink ?>/dist/css/main.css">
</head>
<body>

  <?php include "partials/nav.php" ?>
  
  <?php foreach($dataHome["components_landing"] as $component): ?>
    <?php switch($component["select_components"]) {
      case "hero": ?>
          <?php
            $heroContent = $component["hero"]
          ?>
          <h1><?php echo $heroContent["title"] ?></h1>
          <h1><?php echo $heroContent["description"] ?></h1>
          <h1><?php echo $heroContent["link"]["url"] ?></h1>
          <h1><?php //echo $heroContent["link"]["text"] ?></h1>
      <?php break; case "section": ?>
        <h1>jadfjsdfj</h1>
      <?php break; ?>
    <?php }; ?>
  <?php endforeach ?>
  <script src="<?php echo $getLink?>/dist/js/main.bundle.js"></script>
</body>
</html>
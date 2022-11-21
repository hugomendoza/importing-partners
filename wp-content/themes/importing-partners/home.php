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

  <!-- Component Nav -->
  <?php include "partials/nav.php" ?>
  <!-- Component Nav -->
  
  <?php foreach($dataHome["components_landing"] as $component): ?>
    <?php switch($component["select_components"]) {
      case "hero": ?>
        <!-- Component Hero -->
        <?php
          $heroContent = $component["hero"]
        ?>
        <main class="hero">
          <picture>
            <img
              src=<?php echo $heroContent["background"]["url"]?>"
              alt="<?php echo $heroContent["title"] ?>"
              title="<?php echo $heroContent["title"] ?>"
              loading="lazy"
              width="1"
              height="1"
              class="hero__background"
            >
          </picture>
          <div class="container relative">
            <header
              class="hero__header relative"
              data-aos="fade-up"
            >
              <h1 class="hero__title">
                <?php echo $heroContent["title"] ?>
              </h1>
              <p class="hero__description">
                <?php echo $heroContent["description"] ?>
              </p>
              <a
                href="<?php echo $heroContent["link"]["url"] ?>"
                target="_blank"
                class="btn-primary btn-primary--animated mt-8"
              >
                <?php echo $heroContent["link"]["title"] ?>
              </a>
            </header>
          </div>
        </main>
        <!-- Component Hero -->
      <?php break; case "section": ?>
        <header>
          <h2>jadfjsdfj</h2>
        </header>
      <?php break; ?>
    <?php }; ?>
  <?php endforeach ?>
  <script src="<?php echo $getLink?>/dist/js/main.bundle.js"></script>
</body>
</html>
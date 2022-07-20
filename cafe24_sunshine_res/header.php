<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/1db539ee0d.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-common.css">
  <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
  <script src="./js/script.js"></script>
  <script src="./js/nav.js"></script>
  <title>sunshaine php</title>
</head>
<header>
  <nav class="member">
    <ul class='center-width'>
      <li><a href="./index.php">처음으로</a></li>
      <li><a href="#" class='dummy-link'>로그인</a></li>
      <li><a href="#" class='dummy-link'>회원가입</a></li>
    </ul>
  </nav>
  <div class="header-bottom center-width">
    <h1>
      <span class="hidden">로고</span>
      <a href="./index.php">
        <img src="./img/icons/logo.png" alt="">
      </a>
    </h1>
    <nav class='gnb gnb-lg'>
      <?php include "menu.php" ?>
    </nav>
    <div>
      <a class='tel' href="tel:000-0000-0000">
        <i class="fa-solid fa-tty"></i>
      </a>
      <button class='mbtn'>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-angles-up"></i>
      </button>
    </div>
  </div><!-- center -->
  <nav class='gnb gnb-sl'>
    <?php include "menu.php" ?>
  </nav>
</header>

<body>
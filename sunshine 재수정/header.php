<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-common.css">
  <link rel="stylesheet" href="./css/page1-1.css">
  <link rel="stylesheet" href="./css/page1-2.css">
  <link rel="stylesheet" href="./css/page1-3.css">
  <script src="https://kit.fontawesome.com/7d1f9ca95d.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script> 
  <script src="./js/common.js"></script>
  <script src="./js/header.js"></script>
  <script src="./js/nav.js"></script>
  <script src="./js/sub-common.js"></script>
  <title>사이트리뉴얼</title>
</head>
<body>
  <header>
    <nav class="member">
      <ul class="center-width">
        <li><a href="./index.php">처음으로</a></li>
        <li><a class="dummy-link" href="#">로그인</a></li>
        <li><a class="dummy-link" href="#">회원가입</a></li>
      </ul>
    </nav>
    <div class="header-bottom center-width">
      <h1>
        <span class="hidden">로고</span>
        <a href="./index.php">
          <img src="./img/icons/logo.png" alt="">
        </a>
      </h1>
      <nav class="gnb gnb-lg">
        <?php include "menu.php" ?>
      </nav>
      <div class="mbtn-grp">
        <a class="tel" href="tel:000"><i class="fa-solid fa-tty"></i></a>
        <button class="mbtn">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-up-long"></i>
        </button>
      </div>
    </div><!-- center -->
    <nav class="gnb gnb-sm">
      <?php include "menu.php" ?>
    </nav>
  </header>
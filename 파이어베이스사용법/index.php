<?php include "header.php" ?>

<body>
  <input class="user-email" type="email"> <br>
  <input class="user-password" type="password"> <br>
  <button class="email-register-btn">회원가입</button>
  <button class="google-login-btn">구글로그인</button>
  <hr>
  <input class="login-email" type="email"> <br>
  <input class="login-password" type="password"> <br>
  <button class="login-btn">로그인</button>
  <button class="logout-btn">로그아웃</button>
  <button class="deregister-btn">회원탈퇴</button>
  <hr>
  <p>실시간 로그인 현황</p>
  <div class="login-before">로그인,회원가입</div>
  <div class="login-after" style="display:none;">
    uid:  <span class="uid"></span> <br>
    email: <span class="email"></span> <br>
    <button class="logout-btn">로그아웃</button>
  </div>
  <hr>
    <input class="input-date" type="date">
    <input class="input-time" type="time"> <br>
    <input class="input-title" type="text" placeholder="일정제목"> <br>
    <textarea class="input-desc" placeholder="일정내용" ></textarea> <br>
    <button class="add-list-btn">일정등록하기</button>
    <hr>
    <button class="get-list-btn">일정출력하기</button>
    <div class="output">
      일정출력
    </div>
    
     
</body>

</html>
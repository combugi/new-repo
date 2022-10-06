<?php include "header.php" ?>
<script defer src="./js/fb-detail.js" type="module">
  $(function(){
    fnGetDoc()
  })
</script>
<body>
  <h2>일정 상세 페이지</h2>
  <hr>
  <p>
    제목: <span class="title"></span>

  </p>
  <p>
    
   날짜 : <span class="date"></span>
  </p>
  <p>
    시간 : <span class="time"></span>

  </p>
  <p>
    내용: <span class="desc"></span>

  </p>
  <hr>
  <button class="delete">삭제하기</button>
</body>
</html>
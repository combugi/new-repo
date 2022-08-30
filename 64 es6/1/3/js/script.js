$('.ex1 button').click(function () {
  var 시작단 = parseInt($(".ex1 .시작").val())
  var 끝단 = parseInt($(".ex1 .끝").val())
  for (var 단 = 시작단; 단 <= 끝단; 단++) {
    for (var 곱 = 1; 곱 <= 9; 곱++) {
      $(".ex1 .result").append(`<br>
      
      ${단}*${곱}=${단 * 곱} <br>
      `)
      /*   $(".ex1 .result").append(`<hr>`) */
      $(`<hr>`).appendTo(".ex1 .result")

    }


  }
})
/* -------------------------------------------------------------------------------------------------------- */
$('.ex2 button').click(function () {

  for (var 줄 = 1; 줄 <= 3; 줄++) {
    for (var 별 = 1; 별 <= 줄; 별++) {
      $(".ex2 .result").append("*")
      for (var 여백 = 1; 여백 <= 3 - 줄; 여백++) {
        $(".ex2 .result").append("&nbsp;")
      }
    }//별찍기
    $(".ex2 .result").append("<br>")

  }
})
/* --------------------------------------------------------------------------------- */
$('.ex3 button').click(function () {
 for(var 줄=0; 줄<=4; 줄++){
  $(".ex3 .result").append("<br>")
  for(var 여백=0; 여백>=줄-5; 여백--){
    $(".ex3 .result").append("&nbsp;")
  }
  for(var 별=0; 별<=줄; 별++){
    $(".ex3 .result").append("*")
  }
 }



})
/* --------------------------------------------------------------------------------- */
$('.ex4 button').click(function () {
for(var 줄=0; 줄<=3; 줄++){
  $(".ex4 .result").append("<br>")
  for(var 여백=3; 여백>=줄-3; 여백--){
    $(".ex4 .result").append("&nbsp;")
  }
  for(var 기존줄별=0; 기존줄별<=줄; 기존줄별++){
    $(".ex4 .result").append("*")
  }
  for(var 변형별=1; 변형별<=줄; 변형별++){
    $(".ex4 .result").append("*")
  }
  
}

})
/* --------------------------------------------------------------------------------- */
$('.ex5 button').click(function () {
  for(var 줄=0; 줄<=3; 줄++){
    $(".ex5 .result").append("<br>")
    for(var 여백=-3; 여백<=줄+3; 여백++){
      $(".ex5 .result").append("&nbsp;")
    }
    for(var 기존별=3; 기존별>=줄; 기존별--){
      $(".ex5 .result").append("*")
    }
    for(var 변형별=2; 변형별>=줄; 변형별--){
      $(".ex5 .result").append("*")
    }
  }

})
/* ----------------------------------------------------------------------------------------- */
$(".ex6 button").click(function(){
  for(var 줄=0; 줄<=5; 줄++){
    $(".ex6 .result").append("<br>")
    for(var 여백=5; 여백>=줄-5; 여백--){
      $(".ex6 .result").append("&nbsp;")
    }
    for(var 기존별=1; 기존별<=줄; 기존별++){
      $(".ex6 .result").append("*")
    }
    for(var 추가별=2; 추가별<=줄; 추가별++){
      $(".ex6 .result").append("*")
    }
    
  }
  for(var 줄=0; 줄<=3; 줄++){
    $(".ex6 .result").append("<br>")
    for(var 여백=-3; 여백<=줄+3; 여백++){
      $(".ex6 .result").append("&nbsp;")
    }
    for(var 기존별=3; 기존별>=줄; 기존별--){
      $(".ex6 .result").append("*")
    }
    for(var 추가별=2; 추가별>=줄; 추가별--){
      $(".ex6 .result").append("*")
    }
    
  }

})
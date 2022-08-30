$(function () {
  //백틱 문자열 `  백틱문자열 변수 ${}
  $(".ex1 button").click(function () {
    //$(".ex1 .result").append("1") 
    for (i = 1; i <= 10; i++) {//1 2 3 4 5... 10//
      $(".ex1 .result").append(`${i},`) //쿼터 문자열 '' 

    }
  })
  $(".ex2 button").click(function () {
    //$(".ex1 .result").append("1") 
    for (i = 10; i >= 1; i--) {//1 2 3 4 5... 10//
    
      if ( i > 1) {
        $(".ex2 .result").append(`${i},`); //쿼터 문자열 ''
      } else {
        $(".ex2 .result").append(`${i}`); //쿼터 문자열 ''
      }

    }
  })
})//ready
$(document).ready(function(){
  $(".ex1 button").click(function(){
   /* ex1에 select를  .val로 통해 찾겠다.*/
    var 상품가격=parseInt($('.ex1 select').val())
    var 상품옵션가격=parseInt($('.ex1 input[type=radio]:checked').val())/*type= radio 대괄호 안에 기입 가능 checke에서만 가능*/
    var 수량=$('.ex1 input[type=number]').val()
    var 총가격=(상품가격 +상품옵션가격)*수량 

    alert(총가격)
  })


  $('.ex2 button').click(function(){
    var 국어=Number($('.ex2 .number1').val())
    var 수학=Number($('.ex2 .number2').val())
    var 영어=Number($('.ex2 .number3').val())
    var 총점=국어+수학+영어
    var 평균점수=(국어+수학+영어)/3
    var 평균점수= 평균점수.toFixed(2)

    alert("총점은 "+총점+"점, 평균은 "+평균점수+"점 입니다")
  })

})//ready
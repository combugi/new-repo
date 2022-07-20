$(function () {
  /* ------------------------ex1----------- */
  /* 뽑은 숫자가 1이면서 입력한 값이 one또는  */
  /* 뽑은 숫자가 2이면서 입력한 값이 two또는  */
  /* 뽑은 숫자가 3이면서 입력한 값이 three  */     /* (n===1&&입력한값===one) ||     (n===2 && 입력한값===two)   ||      ( n===3 && 입력한값===three)                                      */
  var n1 = Math.ceil(Math.random() * 3)//0.00.....1~2.99..9  /* 뽑은 숫자 */
  $('.ex1 .num').text(n1)
  $('.ex1 button').click(function () {
    사용자가입력한값 = $('.ex1 input').val() //입력한 값
    var result
    if (
      (n1 === 1 && 사용자가입력한값 === 'one') ||
      (n1 === 2 && 사용자가입력한값 === 'two') ||
      (n1 === 3 && 사용자가입력한값 === 'three')
    ) {
      result = 'yeah'

    } else {
      result = 'OMG'
    }
    alert(result)
  })//click
  /* --------------ex2-------------- */
  var n2 = Math.floor(Math.random() * 3) + 1
  $('.ex2 .num').html(n2)
  /* 뽑은 숫자가 1이면서 입력한 값이 one또는  */
  /* 뽑은 숫자가 2이면서 입력한 값이 two또는  */
  /* 뽑은 숫자가 3이면서 입력한 값이 three  */
  $('.ex2 button').click(function () {
    var 사용자가입력한값 = $('.ex2 input').val()
    var result
    if (n2 === 1) {
      if (사용자가입력한값 === 'one') {

      } else {
        result = "ok"

      }
    } else
      if (n2 === 2) {
        result = "ok"
      } else
        if (n2 === 3) {
          result = "ok"
        }
  })//click
  $('.ex3 button').click(function () {
    /* age가 19이하이면서 point가 60이상
      age가  19초과이면서 point가 70이상
     */
    var age = $('.ex3 .age').val()
    var point = $('.ex3 .point').val()
    if ((age <= 19 && point >= 60) ||
      (age > 19 && point >= 70)) {
      result = '합격'
    } else {
      result = '불합격'
    }//if else 
    if (age <= 19) {
      if (point >= 60) {
        result = '합격'

      }
    }
    alert(result)
  })//click











  $(".ex4 button").click(function () {//나이가  상품가격과 수량을 찾고 총 가격을 알아보자미성년자이면서  담배를 사려고 했을경우 구매금지라는 결과를 내리자
    var 상품가격 = $(".ex4 .product").val()
    var 수량 = $(".ex4 .n").val()
    var 총가격 = 상품가격 * 수량

    var 나이 = $(".ex4 .a").val()
    var result

    if (나이 < 19 && 상품가격 === "4500") {
      result = "구매금지"

    } else {
      result = 총가격

    }
    alert(result)
  })//click





  $(".ex5 button").click(function () {
    var 알파벳 = $('.ex5 input').val()
    var result
    if (
      알파벳 === 'one' ||
      알파벳 === 'two' ||
      알파벳 === 'three'
    ) {
      result = "정답"

    } else if (
      알파벳 !== 'one' && 알파벳 !== 'two' && 알파벳 !== 'three' && 알파벳 !== ''
    ) {
      result = "오답"

    } else {
      result = "입력오류"

    }

    alert(result)
    /* 1에서 3사이의 아무숫자를 사용자가 직접 영단어로 친다
    그 영단어의 정오답유무,입력오류 라는 3가지 조건을 단다.
    */
  })//click
  $(".ex6 button").click(function () {
    /* 입력값이 one 거나two이거나 three 라면 정답 ;입력값이 비어있으면 입력 오류 이도저도 아니면 오답 */
    var 영단어 = $(".ex6 input").val()
    var result
    if (
      영단어 === 'one' ||
      영단어 === 'two' ||
      영단어 === 'three')
       {
      result = "정답입니다~"

    } else if (영단어 === "")
     {
      result = "입력오류입니당"

    } else {
      result = "오답"

    }
    alert(result)

  })//click
  $(".ex7 button").click(function(){
    var 사용자=$('.ex7 ')
  })//click




})//ready
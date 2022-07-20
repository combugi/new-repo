$(function () {

  $('.ex1 button').click(function (e) {
    e.preventDefault()
    var 입력 = $('.ex1 input').val()
    var 나머지 = 입력 % 1
    var result 
    if (나머지 === 0) {
      result = "짝수 입니다"
    } else{
      result = "홀수 입니다"
    }
    alert(result)

  })//click





  $('.ex2 button').click(function (e) {
    e.preventDefault()
    var 입력 = $('.ex2 input').val()
    var 나머지 = 입력 % 1
    var result

    if (나머지 === 0) {
      result = "숫자입니다"
    } else {
      result = "글자입니다"
    }
    alert(result)


  })
  /* ---------------ex2-------------------------------------- */

  /* -----------------------------------ex3----------------- */
  $('.ex3 button').click(function (e) {
    e.preventDefault()
    var 입력값 = $('.ex3 input').val()
    var 글자여부 = isNan(입력값)
    var result
    if (글자여부) {
      result = '글자'
    } else {
      result = '숫자'
    }
    $('.ex3 .result').html(result)
  })


})//ready
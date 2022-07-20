$(function () {
  $('.ex1 button').click(function () {
    var result = $('.ex1 input:checked').val()
    alert(result)

  })//click


  /* ------------조건문------- 
  -문법: 
  if문{(조건에 따라 한가지 결과를 도출할때)} 표기:(){}> if(조건){실행코드}
  else문{또다른 조건이 붙을 경우 두가지 결과만 행동된다}표기:{}
  else if문(여러조건이 붙을경우 여러가지 결과가 행동된다)
  
  비교 연산자 =(집어넣는다),== '1' 1 과 같다라는 결과가 나온다      ===(같다),!==(다르다), >(초과),<(미만),>=(이상); 
  true, faulse(참,거짓)   ex) 5<3 5가 3보다 작다 
  ---------------- */

  /* ex2 */

  $('.ex2 button').click(function () {
    var num = $('.ex2 input').val()
    var result
    if (num === '1') {
      result = '정답'
      alert(result)
    }//if
  })//click


  $('.ex3 button').click(function () {
    var num = $('.ex3 input').val()
    var result
    if (num === '2') {
      result = '정답'
    }//if
    else {
      result = '오답'
    }//if

    alert(result)

  })//click
  $('.ex4 button').click(function () {
    var result = $('.ex4 select').val()

    alert(result)

  })
  $('.ex5 button').click(function () {
    var num = $('.ex5 input').val()
    var result
    if (num === '1') {
      result = 'one'
    } else if (num === '2') {
      result = 'two'
    } else if (num === '3') {
      result = 'three'
    } else {
      result = '잘못입력했습니다'
    }
    alert(result)
  })//click

  $('.ex6 button').click(function () {
    var result = $('.ex6 input:checked').val()
    alert(result)
  })
  $('.ex7 button').click(function () {
    var numm1 = parseInt($('.ex7 .num1').val())
    var numm2 = parseInt($('.ex7 .num2').val())
    var numm3 = parseInt($('.ex7 .num3').val())
    var sum = numm1 + numm2

    var result

    if (sum === numm3) {
      result = '정답'
    } else {
      result = '오답'
    }
    alert(result)
  })//click
  $('.ex8 button').click(function () {
    var n1 = parseInt($('.ex8 .num4').val())
    var n2 = parseInt($('.ex8 .num5').val())
    var i1 = $('.ex8 .bho').val()

    var result
    if (i1 === '+') {
      result = n1 + n2
    } else if (i1 === '-') {
      result = n1 - n2
    } else if (i1 === '*') {
      result = n1 * n2
    } else if(i1==='/'){
      result = n1/n2
    }
    alert(result)

  })
})//ready
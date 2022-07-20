$(function () {
  $(".ex1 button").click(function (e) { /* 문자열로 두개의 숫자를 이어 붙여 만든다 '1''2'+'2''3'12+23
  연산자에따라 연산을 함 1-1,1-2숫자가져오고 ,2-1,2-2숫자가져오고 각각의 두자리 숫자를 parseInt를 씌운다.
  연산별로 조건 분기(else if) */
    e.preventDefault()

    var num1_1 = ($('.ex1 .exa').val())
    var num1_2 = ($('.ex1 .exb').val())
    var num1 = num1_1 + num1_2
    var num2_1 = ($('.ex1 .exd').val())
    var num2_2 = ($('.ex1 .exe').val())
    var num2 = num2_1 + num2_2
    var i1 = $('.ex1 .exc').val()//select에서 연산부호 가져오기 가져오기전 문자상태
    var result = '(num1)' + '(num2)'

    var result

    if (i1 === '+') {
      result = parseInt(num1) + parseInt(num2)

    } else if (i1 === '-') {
      result = parseInt(num1) - parseInt(num2)

    } else if (i1 === '*') {
      result = parseInt(num1) * parseInt(num2)
    } else if (i1 === '/') {
      result = parseInt(num1) / parseInt(num2)
    }

    alert(result)

  })//click

  $('.ex2 button').click(function (e) {/* 숫자를 정상적으로 입력하면(숫자두개를 더해서 1로나눈 나머지가 0이면 정상 아니면 비정상) 
  계산 아니면 오류출력 1번숫자 글자로 가져오고,2번 숫자 글자로 가져오고 더하기 더한숫자를 1로나눈후 나머지를 구한다 */
    e.preventDefault()
    var n1 = parseInt($('.ex2 .1-1').val())
    var n2 = parseInt($('.ex2 .1-2').val())
    /* parseInt 소수점분리 1.1x "1.1 "소수점 을포함한 뒤자리은 다 사라지게만든다 */

    var 더한결과 = n1 + n2
    var 나머지 = 더한결과 % 1
    var result

    if (나머지 === 0) {
      result = 더한결과
    } else {
      result = "홀수입니다"
    }

    alert(result)

  })//click






  $('.ex3 button').click(function (e) { /* 첫수와 끝수 입력하면 총합이 출력 첫수+끝수 , 세트는 (첫수+끝수) 짝수= 세트 갯수+1 /21,2,3,4   4/2=2 7/2=3.5*/
    e.preventDefault()

    var 첫숫자 = parseInt($('.ex3 .num1').val())
    var 끝숫자 = parseInt($('.ex3 .num2').val())
    var 숫자수 = 끝숫자 - 첫숫자 + 1
    var 나머지 = 숫자수 % 2

    var 결과 

   
    if (나머지 === 0) {//짝수라면
      var 양쪽더한결과 = 첫숫자 + 끝숫자
      var 세트 = 숫자수 / 2
      결과 = 양쪽더한결과 * 세트
    } else {var 중간수=(첫번째수+끝번째수)/2
        결과 = 양쪽더한결과 * 세트 +중간수
    }
    alert(결과)
  })//click



  $('.ex4 button').click(function(){//
    var 첫수=parseInt($('ex4 .num1').val())
    var 끝수=parseInt($('ex4 .num2').val())
    var 양더수=첫수+끝수
    var 중간수=양더수/2    //1  2   3  4  '5'   6   7   8      9
    var 숫자수=(끝수-첫수)+1 //직관적으로 볼수 없기에 나타낸 공식
    var 세트=숫자수/2 //항의 갯수를 보기위한 공식
    math.round(세트) // ? 소수점을 업앤다고는 했지만 질문 해야 될듯
    var 결과=양더수*세트+중간수

    var 결과
    alert(결과)   




  })//click
  











})//ready

/* math.round(2.5)->3 */
$(function () {
  /* ex1---------------------- */
  /* 
   성인 3명
   미성인 2명
   저녁 화장실옆 


   10000*3+5000*2 저녁 2000 *5 - 1000 1000원은 문맥상 꼬이므로 가급적 더하자 (-1000)
   (성인수 *3)+ (미성인수 *2) +(저녁이라는 입장시간*5(총 인원)+좌석 요금
   */
  function 입장가격구하기(대상, 박스이름) {
    대상.preventDefault()
    var 성인인원수 = parseInt($(박스이름 + ' .1-1').val())
    var 미성인원수 = parseInt($(박스이름 + ' .1-2').val())
    var 총인원 = 성인인원수 + 미성인원수
    var 시간추가가격 = $(박스이름 + ' input:checked').val()
    var 좌석요금 = $(박스이름 + ' .2').val()
    var 가격 = (10000 * 성인인원수) + (5000 * 미성인원수) + (시간추가가격 * 총인원) + 좌석요금

    $(박스이름+' .result').html(가격 + '원입니다')
  }
  $('.ex1 button').click(function (e) {
    입장가격구하기(e, '.ex1')
  })
  //------------------


  function el(e, ef) {
    e.preventDefault()
    var 결석일수 = $(ef + ' .a').val()//1
    var 조퇴일수 = parseInt($(ef + ' .b').val())//9
    var 지각일수 = parseInt($(ef + ' .c').val())//3
    var 조퇴지각결석환산 = parseInt(조퇴일수 + 지각일수) / 3 //4
    var 총결석일수 = parseInt(조퇴지각결석환산)

    $(ef+' .result').html(총결석일수 + '일입니다')
  }
  $('.ex2 button').click(function (e) {
    el(e, '.ex2')


  })/* ------------------------------------------------ */
  function 출석(e, 출결) {
    e.preventDefault()
    var 총출석일수 = Number($(출결 + ' .a').val())//50 .ex3.a
    var 결석일수 = $(출결 + ' .b').val()//x
    var 조퇴일수 = Number($(출결 + ' .c').val())//20
    var 지각일수 = Number($(출결 + ' .d').val())//10
    var 결석일 = (조퇴일수 + 지각일수) / 3 //30/3 10

    var 결석률 = (결석일 / 총출석일수) * 100//10/50 1/5> 0.2*100 20%
    var 출석률 = 100 - 결석률
    $(출결+' .result').html(출석률 + '%입니다')
  }

  $('.ex3 button').click(function (e) {
    출석(e, '.ex3')
  })
 /*  "+관련+" 숫자 같은 값을 바꿀경우는 따옴표를 없이 하고 문자를 노출시키고자 할때는 따옴표를 씨워준다//
 '  .y 공간(뭐 안에 뭐가있다라는) 같은 개념 ' .result도 p태그안에 있는 속성이므로 ' .result를 해준다
 만약에  붙어있다라면 alert자리에있던 $( a+ rt ')같이 rt라는 속성값을  뛰어주기로 하자  */













  /* 플랜짜기
   결석3
  조퇴2
  지각5
  총결석일수

  결석4
  조퇴1
  지각3
  총결석일수
  --------------ex2-------------------
    */

})//ready
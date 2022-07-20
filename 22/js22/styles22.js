$(function () {
  $('.naver').click(function (e) {
    e.preventDefault()/* 무조건 상단에 적어야 한다 */
    alert('링크클릭')
  })//click


/* -------------------------------------------------------------------------------- */
function fn1_2(e, ex) {
  e.preventDefault()
  var num1 = parseInt($(ex + ' .num1').val())
  var num2 = parseInt($(ex + ' .num2').val())
  var result = num1 + num2
  $(ex + ' .result').html('결과' + result)
}//fn1_2

$(".ex1 button").click(function (e) {/* event listener:이벤트 객체의 정보를 다 끌어 온다(이벤트리스너라 불리
    콜백함수에만 쓰이며
      인자라는 단어는 일반함수에만 해당된다.)*/

  fn1_2(e, '.ex1')
  /* html은 바로 나오게 하는기능 text는 문자가 노출되는 기능 */
})//click
$(".ex2 button").click(function (e) {/* event listener:이벤트 객체의 정보를 다 끌어 온다(이벤트리스너라 불리
    콜백함수에만 쓰이며
      인자라는 단어는 일반함수에만 해당된다.)*/
  fn1_2(e, '.ex2')
  /* html은 바로 나오게 하는기능 text는 문자가 노출되는 기능 */
})//click
/* -----------------------------------------ex3---------------------- */
function 퍼센트구하기(원하는요소, 컨테이너) {
  원하는요소.preventDefault()//클릭한 버튼 원래 기능을 막는다
  var num1 = $(컨테이너 + ' .num1').val()
  var num2 = $(컨테이너 + ' .num2').val()
  var result = num1 / num2 * 100
  $(컨테이너 + ' p').text(result + '%입니다')
}

$('.ex3 button').click(function (e) {
  퍼센트구하기(e, '.ex3')//클릭한 버튼 아무일도 못하게 한다()
  /* 
  2,4->50
  2,8->25
  1)(2 / 4) *100 =50
  2) 4 * 
  */
})//click
/* 일수의 퍼센트는 ??입니다 */
function 출석률(e, 출석일) {
  e.preventDefault()
  var num1 = $(출석일 +' .num1').val()
  var num2 = $(출석일 +' .num2').val()
  var result = num1 / num2 * 100
  $(출석일 +' p').t(result +'일 입니다')
}
$('.ex4 button').click(function (el) {
  출석률(el,'.ex4')
})




})//ready

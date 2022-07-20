$(function () {
  function ex1(이벤트대상, 예제번호) {
    이벤트대상.preventDefault()

    var num1 = $('.ex' + 예제번호 + ' .num1').val()
    var num2 = $('.ex' + 예제번호 + ' .num2').val()

    var result = (num1 / num2 * 100).toFixed(2)
    $('.ex' + 예제번호 + '  .result').html(result + '%입니다')
  }//ex1
  $('.ex1 button').click(function (e) {
    ex1(e, '1')
  })//click
  /* -----------------------------ex1-------------- */

  /* ----------------------ex2---------------------- */
  function ex3(막자, 예제값) {
    막자.preventDefault()
    var num1 = $('.ex' + 예제값 + ' .num1').val()//10
    var num2 = $('.ex' + 예제값 + ' .num2').val()//5
    var num3 = $('.ex' + 예제값 + ' .num3').val()//6
    var result = num2 * num3 / num1//5*6/10
    $('.ex' + 예제값 + '  .result').html(result + "입니다")
  }//ex3
  $('.ex3 button').click(function (e) {
    ex3(e, '3')
  })//click









  function ex4(막막자, 예제수) {
    막막자.preventDefault()
    var num1 = $('.ex' + 예제수 + ' .num1').val()//10
    var num2 = $('.ex' + 예제수 + ' .num2').val()//5
    var num3 = $('.ex' + 예제수 + ' .num3').val()//3

    var result = num1 * num3 / num2 //10*3/5

    $('.ex' + 예제수 + '  .result').html(result + "입니다")
  }

  $('.ex4 button').click(function (e) {


    ex4(e, '4')
  })//click


})//ready


$(function () {
  $('.ex1 .btn1').click(function () {
    $('.ex1 .box').css({ "background": ' red', 'width': '200px ', 'height': '100px ' })


  })//click
  $('.ex1 .btn2').click(function () {
    $('.ex1 .box').css({ "background": ' blue', 'width': '100px ', 'height': '200px ' })
  })//click
  $('.ex1 .btn3').click(function () {
    $('.ex1 .box').css({ "background": ' none' })
  })//click


  /* ---------------------ex2--------------------- */





  $('.ex2 .btn1').click(function () {
    $('.ex2 .box').css({ "background": 'greenyellow', 'width': '200px ', 'height': '200px ' })
    $('.ex2 .box').css({ "background": 'red', 'width': '150px ', 'height': '150px ' })


  })//click
  $('.ex2 .btn1').click(function () {
    $('.ex2 .box').addClass('style2')
    $('.ex2 .box').removeClass('style1')


  })//click





  /* ------------------3-------------------- */


  $('ex3 button').click(function () {


    /*(' ex 3 box').addclass( ) */
    /*(' ex 3 box').addclass( ) */
    $('.ex3 .box').toggleClass('style1 style2')
  })





  $('.ex4 .btn1').click(function () {

    $('.ex4 .box').removeClass('style1 reset').css({ 'background': 'red' })

  })//click
  $('.ex4 .btn2').click(function () {
    $('.ex4  .box').removeClass('reset').addClass('style1')

  })//click
  $('.ex4 .btn3').click(function () {
    $('.ex4  .box').removeClass('style1').addClass('reset')

  })//click

  /* 5-------------------------------------- */
  $('.ex5 .btn1').click(function () {
    $('.ex5 .box').hide()
  })//click
  $('.ex5 .btn2').click(function () {
    $('.ex5 .box').show()

  })//click
  $('.ex5 .btn3').click(function () {
    $('.ex5 .box').toggle()

  })//click
  /* 6-------------------------------------- */ /* 1000=1초 밀리세컨드 단위 기준 */
  $('.ex6 .btn1').click(function () {
    $('.ex6 .box').stop().fadeOut(2000)
  })//click
  $('.ex6 .btn2').click(function () {
    $('.ex6 .box').stop().fadeIn(2000)

  })//click
  $('.ex6 .btn3').click(function () {
    $('.ex6 .box').stop().fadeToggle(2000)
  })//click
  /* 7-------------------------------------- */ /*slide  */
  $('.ex7 .btn1').click(function () {
    $('.ex7 .box').stop().slideUp()
  })//click
  $('.ex7 .btn2').click(function () {
    $('.ex7 .box').stop().slideDown()

  })//click
  $('.ex7 .btn3').click(function () {
    $('.ex7 .box').stop().slideToggle()
  })//click
/* 8-----------------------------------------------아코디언 */
  $('.ex8 .btn1').click(function () {
    $('.ex8 .answer1').stop().slideToggle()
    $('.ex8 .btn1').toggleClass("style")
    $('.ex8 .btn2, .ex8 .btn3').removeClass("style")
    $('.ex8 .answer2, .ex8 .answer3').slideUp("style")
  })//click
  $('.ex8 .btn2').click(function () {
    $('.ex8 .answer2').stop().slideToggle()
    $('.ex8 .btn2').toggleClass("style")
    $('.ex8 .btn1, .ex8 .btn3').removeClass("style")
    $('.ex8 .answer1, .ex8 .answer3').slideUp("style")
  })//click
  $('.ex8 .btn3').click(function () {
    $('.ex8 .answer3').stop().slideToggle()//답변칸이 왔다갔다하기
    $('.ex8 .btn3').toggleClass("style")//버튼이 왔다갔다 할때 색상나타나기
    $('.ex8 .btn1, .ex8 .btn2').removeClass("style")//버튼색상 사라지게하기
    $('.ex8 .answer1, .ex8 .answer2').slideUp("style")//답변이 접혀지면서 색상 나타나게하기
  })//click




})//ready
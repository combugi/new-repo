$(function () {
  $('.ex1 > div').click(function () {
    $(this).children('div').css({ 'background': 'red' })

  })
  $('.ex1 div div').click(function () {
    return false
  })

  $('.ex2>div').click(function () {
    var bg = $(this).children('div').attr('data-bg')
    $('.ex2 div div').css({ 'background': 'none' })
    $(this).children('div').css({ 'background': bg })
  })//click
  $('.ex3 div div').click(function () {
    var bgg = $(this).attr('data-bg')
    $('.ex3 div').css({ 'background': 'white' })
    $(this).parent().css({ 'background': bgg })
  })
  $('.ex4 button').click(function () {
    $('.ex4 button').css({ 'color': 'white' })
    $(this).siblings('button').css({ 'background': 'red' })
  })//click
  $('.ex5 button').click(function () {//토글()
    $(this).siblings('button').removeClass('active')
    $(this).toggleClass('active')
  })//click
  $('.ex6 button').click(function () {
    var n = $(this).attr('data-n')
    $('.ex6  .box' + n).siblings('div').hide()
    $('.ex6 .box' + n).toggle()
  })//click
  $(".ex7 button").click(function(){
    $(".ex7 button").css({'color':'white'})
    $(this).nextAll().css({'color':'red'})

  })
  $(".ex8 button").click(function(){ /* 아코디언 방식 silde toggle(),한 버튼(질문 항목)이 켜지면 색상이 바뀌여지면서 답변 항목은내려와야하고
   다른 항목은 한 항목이 활성화 되었을때 질문항목들이 다 붙어있어야한다   */
    
   $('.ex8 div p').stop().slideup()
   $(this).siblings('p').stop().slideToggle()
   $(this).parent().siblings('div').children('button').removeClass('active')
   $(this).toggleClass('active')
   
    
  })//click

})
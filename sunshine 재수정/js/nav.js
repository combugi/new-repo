$(function(){

  $('.gnb-lg>ul>li').mouseenter(function(){
    $(this).children('ul').stop().slideDown(200)
  }).mouseleave(function(){
    $(this).children('ul').stop().slideUp(200)
  })
  
  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('active')
    $('.gnb-sm').stop().slideToggle(200)
    $('.gnb-sm>ul>li>ul').stop().slideUp()
    $('.gnb-sm>ul>li>a').removeClass('active')
  })

  $('.gnb-sm>ul>li>a').click(function(e){
    e.preventDefault()
    $('.gnb-sm>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
  })

})//ready
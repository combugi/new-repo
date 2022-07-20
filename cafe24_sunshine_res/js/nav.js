$(function () {
  $('.gnb-lg>ul>li').mouseenter(function () {
    $(this).children('ul').stop().slideDown(200)
  })
  $('.gnb-lg>ul>li').mouseleave(function () {
    $(this).children('ul').stop().slideUp(200)
  })
  $(".mbtn").click(function () {
    $(".gnb-sl").stop().slideToggle(300)
    $('.gnb-sl>ul>li>ul').stop().slideUp()
    $('.gnb-sl>ul>li>a').removeClass("active")
  })
  $('.gnb-sl>ul>li>a').click(function (e) {
    e.preventDefault()
    $('.gnb-sl>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $(this).parent().siblings('li').children("a").removeClass("active")
    $(this).toggleClass('active')
    //return false
  })
  $('.gnb-sl>ul>')
})
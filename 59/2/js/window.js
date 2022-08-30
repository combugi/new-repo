$(function () {
  function  gwi(){
   scrt =$(window).scrollTop()
   scrl =$(window).scrollLeft()
   winw =$(window).width()
   winh =$(window).height()
   /* var를 붙인경우 하나의 파일만 사용가능하다.
    이와달리 var을 안붙인경우 다른 파일도 사용가능하다 */
  }
  gwi()
  $(window).resize(function () {
    gwi()
  }).scroll(function () {
    gwi()
  })//window event
})//ready
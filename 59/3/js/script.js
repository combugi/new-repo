$(function () {

 //스크롤 현위치(window.js에서 이미 구했음)호출할때 변수 생성 하지 말것...
 
  var scrStart//스크롤 범위의 시작위치
  var scrEnd//스크롤 범위의 끝위치
  var scrRange//스크롤 범위     
  var scrollRatio //스크롤비율 0~1
  var scrollOffset //점선이 보이는 범위

  function svglineDrawing() {
  
    scrStart = $(".section2").offset().top
    scrEnd = $(".section3").offset().top - winh
    scrRange = scrEnd - scrStart
    scrollRatio = (scrt - scrStart) / scrRange
    if (scrollRatio < 0) { scrollRatio = 0 }
    if (scrollRatio > 1) { scrollRatio = 1 }
    scrollOffset = 1 - scrollRatio
   
    $(".section2 svg path").css({'stroke-dashoffset':scrollOffset})
    /* 스크롤 비율이 0 offset은 1이 나와야 한다.반대로 스크롤 비율이 1일때 offset은 0이 되어야한다 스크롤비율이 
    ex) 20%? 1- 스크롤비율 =offset > 1-0.8 = 0.2 * 100 = 20% ;*/
  }//fn

  svglineDrawing()

  $(window).resize(function () {
    svglineDrawing()
  }).scroll(function () {
    svglineDrawing()
  })
})
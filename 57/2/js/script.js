$(function () {
  function scrollProgress() {
    ////////////////////////////////////////////////////////////////////////////////////
    var 문서의높이 = doch
    var 브라우저높이 = winh

    var 스크롤시작위치 = 0
    var 스크롤끝위치 = doch - winh
    var 스크롤현재위치 = scrt
    var 스크롤가능범위 = 스크롤끝위치 - 스크롤시작위치
    var 스크롤비율 = (스크롤현재위치 - 스크롤시작위치) / 스크롤가능범위

    var 높이시작 = 0
    var 높이끝 = 100
    var 높이변화범위 = 높이끝 - 높이시작

    var 적용높이 = 스크롤비율 * 높이변화범위 + 높이시작
    $('.progress').css({ "height": 적용높이 + "%" })
    //////////////////////////////////////////////////////////////////////////////////////////
    /*  var 섹션2번위치 =$(".section2").offset().top
     var 섹션2번위치퍼센트 = 섹션2번위치 /문서의높이 * 100
     $('.btn2').css({"top":섹션2번위치퍼센트 + "%"}) */
    $(".scrollspy button").each(function(){
      var 섹션번호 =$(this).attr("data-n")
      var 섹션위치 =$('.section'+섹션번호).offset().top
      var 섹션위치퍼센트=섹션위치/문서의높이 * 100
      $(this).css({"top":섹션위치퍼센트+"%"})
     })  
     /* 스크롤스파이------------------------------------------------- */
      var offset1 =$(".section1").offset().top
      var offset2 =$(".section2").offset().top
      var offset3 =$(".section3").offset().top
      var offset4 =$(".section4").offset().top
      var offset5 =$(".section5").offset().top
      var n
      if(scrt<offset2){
        n=1
      }else if(scrt>=offset2 && scrt <offset3){
        n=2
      }else if(scrt>=offset3 && scrt <offset4){
        n=3
      }else if(scrt>=offset4 && scrt <offset5){
        n=4
      }else{
        n=5
      }
   
      $('.scrollspy button').removeClass('active')
      $('btn'+n).addClass('active')


  }
  scrollProgress()
  $(window).resize(function () {
    scrollProgress()
  }).scroll(function () {
    scrollProgress()
  })//window event
  $('.scrollspy button').click(function(){
    var n =$(this).attr("data-n")
    var target =$('.section'+n).offset().top +1
    $('body,html').stop().animate({'scrollTop':target},2000)
  })
})//ready
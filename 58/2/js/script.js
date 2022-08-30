$(function () {
  var section1Width = $('.section1').innerWidth()
  var section1Height = $('.section1').innerHeight()
  var maskWidth
  var n =1 
  function changemaskSize(el){
    el
  }//fn_
  /* ////////////////////////////////////// */
  if (section1Width > section1Height) {//landscape ,가로형
    maskWidth = section1Width * 1.3
  } else {
    //portrait ,세로형;
    maskWidth = section1Height * 1.3
  }
  $(".section1").css({ "-webkit-mask-size": maskWidth })
/* /////////////////////////////////////////////////////// */
  $(".scrollspy button").click(function () {
    var n = $(this).attr("data-n")
    if (winw >= winh) {//landscape
      maskWidth = winw * 1.3
    } else {//세로형일때
      maskWidth = winw * 1.3
    }
   
    $(".section" + n).css({
      "-webkit-mask-size": maskWidth,
      'pointer-events': "all"
    })//4
    $(".section" + n).prevAll('section').css({
      "-webkit-mask-size": maskWidth,
      'pointer-events': "all"
    })
    $(".section" + n).nextAll('section').css({
      "-webkit-mask-size": 0,
      'pointer-events': "none"
    })
    //1,2,3
  })//5,6,7은 숨긴다 (display : none 아님)     prevAll() 이전 걸 다 찾아 주는 속성 nextAll()은 다음걸 다찾아주는 속성
  $('section').bind('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta / -120 //아래로 휠1 위로 - 1
    var n = parseInt($(this).attr('data-n')) //2번에서 휠을 가정할 경우
    var n = n + delta//휠을 아래로 3,휠을 위로 1
    if (n < 1) {
      n = 1
    }
    if (n > 3) {
      n = 3
    }

    $(".section" + n).css({
      "-webkit-mask-size": maskWidth,
      'pointer-events': "all"
    })//4
    $(".section" + n).prevAll('section').css({
      "-webkit-mask-size": maskWidth,
      'pointer-events': "all"
    })
    $(".section" + n).nextAll('section').css({
      "-webkit-mask-size": 0,
      'pointer-events': "none"
    })
  })
})